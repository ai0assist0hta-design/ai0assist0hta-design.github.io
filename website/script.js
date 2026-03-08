const TEXT_SOURCE = [
    "THE STRUCTURE OF THE VOID IS NOT EMPTY BUT FULL OF POTENTIAL ENERGY.",
    "LIGHT REFLECTS UPON THE SURFACE OF THE MATERIAL, REVEALING ITS TEXTURE.",
    "TIME MEASURES THE DECAY OF THE SIGNAL ACROSS THE MEDIUM.",
    "CONCRETE FORMS THE BASE OF THE PHYSICAL ARCHITECTURE.",
    "A SYSTEM IS DEFINED BY THE CONNECTION OF ITS DATA POINTS.",
    "OBSERVATION COLLAPSES THE WAVE FUNCTION INTO A SINGLE STATE.",
    "GLASS AND STEEL COMPOSE THE MODERN FACADE OF THE CITY.",
    "THE PATTERN EMERGES FROM THE CHAOS OF THE RAW INPUT.",
    "GRAVITY IS THE CURVATURE OF SPACE TIME CAUSED BY MASS.",
    "SILENCE IS THE ABSENCE OF SOUND BUT NOT THE ABSENCE OF MEANING."
];

const FILLER_WORDS = new Set(["THE", "OF", "IS", "A", "AN", "BUT", "BY", "IN", "TO", "IT", "ITS", "UPON", "INTO", "AND"]);

// Map words to semantic classes
const SEMANTIC_MAP = {
    // Material / Surface
    "STRUCTURE": "sem-structure", "MATERIAL": "sem-material", "TEXTURE": "sem-material",
    "CONCRETE": "sem-material", "GLASS": "sem-material", "STEEL": "sem-material",
    "BASE": "sem-structure", "PHYSICAL": "sem-material", "FACADE": "sem-material",
    "MASS": "sem-material",

    // Light / Energy
    "LIGHT": "sem-light", "ENERGY": "sem-light", "REFLECTS": "sem-light",
    "SIGNAL": "sem-light", "WAVE": "sem-light",

    // Void / Deep
    "VOID": "sem-void", "EMPTY": "sem-void", "ABSENCE": "sem-void",
    "SPACE": "sem-void", "SILENCE": "sem-void", "CHAOS": "sem-void",

    // Time / Abstract
    "TIME": "sem-time", "DECAY": "sem-time", "STATE": "sem-time",
    "PATTERN": "sem-time", "SYSTEM": "sem-time", "DATA": "sem-structure"
};

const CONTAINER = document.getElementById('grid-system');
const CELL_COUNT = 16;

function generateText() {
    // Combine 3-4 random phrases
    let text = "";
    for (let i = 0; i < 4; i++) {
        text += TEXT_SOURCE[Math.floor(Math.random() * TEXT_SOURCE.length)] + " ";
    }
    return text.trim();
}

function createCell() {
    const cell = document.createElement('article');
    cell.className = 'grid-cell';

    // Text Layer
    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';

    const p = document.createElement('p');
    p.className = 'text-content';

    const rawText = generateText().split(' ');

    // Build HTML with Spans
    rawText.forEach(word => {
        const cleanWord = word.replace(/[^A-Z]/g, ''); // Remove punctuation for checking

        const span = document.createElement('span');
        span.textContent = word + " "; // Preserve spacing

        if (FILLER_WORDS.has(cleanWord)) {
            span.className = "ref-placeholder";
        } else if (SEMANTIC_MAP[cleanWord]) {
            span.className = `sem-word ${SEMANTIC_MAP[cleanWord]}`;
        }

        p.appendChild(span);
    });

    textLayer.appendChild(p);

    // Diagram Layer
    const diagramLayer = document.createElement('div');
    diagramLayer.className = 'diagram-layer';
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'diagram-svg');
    // We can't set viewBox yet because we need pixel measurements from the text
    // actually we can set width/height 100% and just use local coords.

    diagramLayer.appendChild(svg);

    cell.appendChild(textLayer);
    cell.appendChild(diagramLayer);

    return cell;
}

// 1. Populate Grid
for (let i = 0; i < CELL_COUNT; i++) {
    CONTAINER.appendChild(createCell());
}

// 2. Overlay Logic (Must run after paint)
window.onload = () => {
    const cells = document.querySelectorAll('.grid-cell');

    cells.forEach(cell => {
        const textLayer = cell.querySelector('.text-layer');
        const placeholders = textLayer.querySelectorAll('.ref-placeholder');
        const svg = cell.querySelector('.diagram-svg');
        const cellRect = cell.getBoundingClientRect();

        // Data for interaction
        const nodes = [];

        placeholders.forEach((span, id) => {
            const rect = span.getBoundingClientRect();

            // Calculate relative pos
            const x = rect.left - cellRect.left;
            const y = rect.top - cellRect.top;
            const w = rect.width;
            const h = rect.height;

            // Create SVG Rect (Mosaic)
            const node = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            node.setAttribute('x', x);
            node.setAttribute('y', y + h * 0.2); // vertical align adjust
            node.setAttribute('width', w);
            node.setAttribute('height', h * 0.6); // slightly smaller height than line-height
            node.setAttribute('class', 'node-rect');

            svg.appendChild(node);

            nodes.push({
                id: id,
                el: node,
                baseX: x,
                baseY: y + h * 0.2,
                w: w,
                h: h * 0.6,
                centerX: x + w / 2,
                centerY: (y + h * 0.2) + (h * 0.6) / 2
            });
        });

        // Generate Connections (Nearest Neighbor logic)
        // Connect each node to 1-2 nearest nodes to form a graph
        const lines = [];
        nodes.forEach(node => {
            // Find distances
            const others = nodes.filter(n => n.id !== node.id)
                .map(n => ({
                    target: n,
                    dist: Math.hypot(n.centerX - node.centerX, n.centerY - node.centerY)
                }))
                .sort((a, b) => a.dist - b.dist)
                // Filter out very far nodes to keep it local/clustered
                .filter(d => d.dist < 80)
                .slice(0, 2);

            others.forEach(conn => {
                // Avoid dupes (A-B vs B-A)
                const linkId = [node.id, conn.target.id].sort().join('-');
                if (lines.find(l => l.id === linkId)) return;

                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute('x1', node.centerX);
                line.setAttribute('y1', node.centerY);
                line.setAttribute('x2', conn.target.centerX);
                line.setAttribute('y2', conn.target.centerY);
                line.setAttribute('class', 'data-line');

                svg.insertBefore(line, svg.firstChild); // Lines behind nodes

                lines.push({
                    id: linkId,
                    el: line,
                    source: node,
                    target: conn.target
                });
            });
        });

        // 3. Interaction Logic (JS Driven Jitter)
        let animationFrame;
        let isHovering = false;

        // Target offsets
        const offsets = new Map(); // id -> {x, y}

        // Init offsets 0
        nodes.forEach(n => offsets.set(n.id, { x: 0, y: 0 }));

        function update() {
            if (!isHovering) return;

            // Interpolate? Or simple jitter?
            // Prompt: "small, constrained micro-movements"
            // Let's just Apply the random offsets we generated on enter.
            // We need to loop this to allow for smooth "noise" if desired, OR just static offset.
            // Let's do a static offset that drifts slowly? 
            // "Micro-movements" suggests animation.
            // Let's use a Sine wave based on time for organic drift.

            const time = Date.now() * 0.002;

            nodes.forEach(n => {
                // Unique noise per node
                const noiseX = Math.sin(time + n.id) * 1.5; // +/- 1.5px
                const noiseY = Math.cos(time + n.id * 0.5) * 1.5;

                const curX = n.baseX + noiseX;
                const curY = n.baseY + noiseY;
                const curCX = n.centerX + noiseX;
                const curCY = n.centerY + noiseY;

                // Update Node
                n.el.setAttribute('x', curX);
                n.el.setAttribute('y', curY);

                // Update connected lines?
                // We iterate lines and update them
            });

            lines.forEach(l => {
                // Calculate new endpoints
                const sOffset = {
                    x: Math.sin(time + l.source.id) * 1.5,
                    y: Math.cos(time + l.source.id * 0.5) * 1.5
                };
                const tOffset = {
                    x: Math.sin(time + l.target.id) * 1.5,
                    y: Math.cos(time + l.target.id * 0.5) * 1.5
                };

                l.el.setAttribute('x1', l.source.centerX + sOffset.x);
                l.el.setAttribute('y1', l.source.centerY + sOffset.y);
                l.el.setAttribute('x2', l.target.centerX + tOffset.x);
                l.el.setAttribute('y2', l.target.centerY + tOffset.y);
            });

            animationFrame = requestAnimationFrame(update);
        }

        cell.addEventListener('mouseenter', () => {
            isHovering = true;
            update();
        });

        cell.addEventListener('mouseleave', () => {
            isHovering = false;
            cancelAnimationFrame(animationFrame);
            // Reset
            nodes.forEach(n => {
                n.el.setAttribute('x', n.baseX);
                n.el.setAttribute('y', n.baseY);
            });
            lines.forEach(l => {
                l.el.setAttribute('x1', l.source.centerX);
                l.el.setAttribute('y1', l.source.centerY);
                l.el.setAttribute('x2', l.target.centerX);
                l.el.setAttribute('y2', l.target.centerY);
            });
        });

    });
};
