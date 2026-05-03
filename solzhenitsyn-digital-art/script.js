// ─── THEME DATA ───────────────────────────────────────────
const THEMES = [
    {
        id: 1,
        subject: "THE STRUCTURE OF LIES",
        from: "THE STATE",
        to: "THE PEOPLE",
        cc: "DEPARTMENT OF TRUTH",
        date: "██████████",
        ref: "DOC██████",
        body: "VIOLENCE CANNOT SURVIVE ALONE. IT AGES QUICKLY AND LOSES ALL CONFIDENCE IN ITSELF SO IT SUMMONS FALSEHOOD AS ITS FAITHFUL ALLY. VIOLENCE CANNOT CONCEAL ITSELF WITHOUT LIES AND LIES CANNOT SUSTAIN THEMSELVES WITHOUT VIOLENCE. TOGETHER THEY FORM A SYSTEM THAT DOES NOT DEMAND DAILY PHYSICAL FORCE UPON EVERY SHOULDER BUT DEMANDS SOMETHING FAR MORE INSIDIOUS. OBEDIENCE TO LIES AND DAILY PARTICIPATION IN THEM. THROUGH THIS PARTNERSHIP LIES HAVE DRAGGED SOCIETY SO FAR FROM NORMALITY THAT NO ONE CAN SEE A SINGLE PILLAR THROUGH THE DENSE GRAY FOG. ONLY WHAT THE RADIO HAMMERS IN DAY AFTER DAY DRILLS INTO THE BRAIN AND EVERYTHING ELSE IS CONVENIENTLY FORGOTTEN. YET THERE EXISTS A SIMPLEST KEY TO LIBERATION. PERSONAL NON-PARTICIPATION IN LIES. THOUGH LIES CONCEAL EVERYTHING AND EMBRACE EVERYTHING THEY NEED NOT DO SO WITH ANY HELP FROM ME. WHEN PEOPLE RENOUNCE FALSEHOOD IT SIMPLY CEASES TO EXIST LIKE AN INFECTION THAT CAN SURVIVE ONLY IN A LIVING ORGANISM."
    },
    {
        id: 2,
        subject: "IDEOLOGY AS JUSTIFICATION",
        from: "THE PARTY COMMITTEE",
        to: "FIELD OPERATIVES",
        cc: "BUREAU OF IDEOLOGY",
        date: "██████████",
        ref: "DOC██████",
        body: "SHAKESPEARES VILLAINS STOPPED AT A DOZEN CORPSES BECAUSE THEY HAD NO IDEOLOGY. MACBETHS SELF-JUSTIFICATIONS WERE FEEBLE AND HIS CONSCIENCE DEVOURED HIM. BUT IDEOLOGY CHANGES EVERYTHING. IT PROVIDES THE SOCIAL THEORY THAT ALLOWS EVIL ACTS TO APPEAR GOOD IN ONES OWN EYES AND IN THE EYES OF OTHERS. THE INQUISITION INVOKED CHRISTIANITY. COLONIZERS INVOKED CIVILIZATION. NAZIS INVOKED RACE. JACOBINS INVOKED EQUALITY AND THE HAPPINESS OF FUTURE GENERATIONS. EACH BELIEVED THEY WERE DOING WHAT WAS RIGHT AND NECESSARY. THIS IS WHY THE TWENTIETH CENTURY EXPERIENCED EVIL ON A SCALE MEASURED NOT IN DOZENS BUT IN MILLIONS. THE IDEOLOGICAL EVILDOER CROSSES THE PRECISE LINE THAT SHAKESPEARES VILLAINS COULD NOT AND HIS EYES REMAIN DRY AND CLEAR. JUST AS A WEAK BLUE LIGHT CAN TRIGGER WHAT INTENSE YELLOW LIGHT CANNOT SO EVILDOING HAS A THRESHOLD MAGNITUDE. ONCE CROSSED THE PERSON LEAVES HUMANITY BEHIND PERHAPS WITHOUT THE POSSIBILITY OF RETURN."
    },
    {
        id: 3,
        subject: "THE GULAG AND IMPRISONMENT",
        from: "CAMP ADMINISTRATION",
        to: "PRISONER NO. ██████",
        cc: "GULAG DIRECTORATE",
        date: "██████████",
        ref: "DOC██████",
        body: "AT THE END OF THE DAY SHUKHOV FALLS ASLEEP FEELING PLEASED WITH LIFE. HE WASNT THROWN IN THE PUNISHMENT CELL. HE SWIPED EXTRA GRUEL AT DINNER. HE ENJOYED HIS WORK ON THE WALL. THE BLADE WASNT FOUND AT THE SEARCH POINT AND HE EARNED A BIT OF TOBACCO. THE END OF AN UNCLOUDED DAY. ALMOST A HAPPY ONE. THEN THE DEVASTATING ARITHMETIC. THIS WAS JUST ONE OF THREE THOUSAND SIX HUNDRED AND FIFTY-THREE DAYS OF HIS SENTENCE FROM BELL TO BELL. THE EXTRA THREE WERE FOR LEAP YEARS. NOW CONSIDER WHAT ONE YEAR CONTAINS. THREE HUNDRED AND SIXTY-FIVE DAYS MARCHING OUT TO ROLL-CALL IN DRIZZLE BLIZZARD AND BITTER COLD. THREE HUNDRED AND SIXTY-FIVE DAYS OF HATEFUL ALIEN WORK. SEVEN HUNDRED AND THIRTY BOWLS OF GRUEL AND SEVEN HUNDRED AND THIRTY PORTIONS OF GRITS. NO RADIO AND NO BOOKS — AT LEAST NOT THAT. AND THIS IS ONLY ONE YEAR. THERE ARE TEN. THERE ARE TWENTY-FIVE. YET EVEN HERE THE PRISONERS MINDS ARE NOT INACTIVE. A WEAK SPARK WAS BREATHED INTO THEM ONCE AND THE QUESTION REMAINS WHAT HAS BECOME OF IT NOW."
    },
    {
        id: 4,
        subject: "CONSCIENCE",
        from: "A HUMAN BEING",
        to: "HIS OWN CONSCIENCE",
        cc: "MEMORY",
        date: "██████████",
        ref: "DOC██████",
        body: "THIS IS THE MAIN PROBLEM OF THE TWENTIETH CENTURY. IS IT PERMISSIBLE MERELY TO CARRY OUT ORDERS AND COMMIT ONES CONSCIENCE TO SOMEONE ELSES KEEPING. CAN A PERSON LIVE WITHOUT HIS OWN IDEAS ABOUT GOOD AND EVIL DERIVING THEM ONLY FROM PRINTED INSTRUCTIONS AND THE VERBAL COMMANDS OF SUPERIORS. THOSE SOLEMN OATHS PRONOUNCED WITH A TREMOR IN THE VOICE WERE MEANT TO DEFEND THE PEOPLE AGAINST EVILDOERS YET HOW EASILY THEY ARE REDIRECTED TO SERVE THE VERY EVIL THEY WERE SWORN TO OPPOSE. IF ONLY THE ANSWER WERE SIMPLE. IF ONLY EVIL PEOPLE EXISTED SOMEWHERE INSIDIOUSLY COMMITTING THEIR DEEDS AND IT WERE ONLY NECESSARY TO SEPARATE AND DESTROY THEM. BUT THE LINE DIVIDING GOOD AND EVIL CUTS THROUGH THE HEART OF EVERY HUMAN BEING WITHOUT EXCEPTION. DURING A LIFETIME THIS LINE SHIFTS. THE SAME PERSON STANDS AT VARIOUS AGES NEAR SAINTHOOD AND NEAR THE DEVIL. THE NAME DOES NOT CHANGE AND TO THAT NAME WE ASCRIBE EVERYTHING. SOCRATES COMMAND KNOW THYSELF HAS NEVER BEEN MORE URGENT THAN NOW."
    },
    {
        id: 5,
        subject: "RESISTANCE",
        from: "AN ORDINARY PERSON",
        to: "THE SYSTEM",
        cc: "BYSTANDERS",
        date: "██████████",
        ref: "DOC██████",
        body: "WE HAVE NOT MATURED ENOUGH TO MARCH INTO THE SQUARES AND SHOUT THE TRUTH ALOUD. IT IS NOT YET NECESSARY AND IT IS CERTAINLY DANGEROUS. BUT THERE IS SOMETHING WE CAN DO RIGHT NOW. LET US REFUSE TO SAY WHAT WE DO NOT THINK. THIS IS THE EASIEST AND MOST ACCESSIBLE PATH AND IT ACCOUNTS FOR THE COWARDICE ALREADY WELL ROOTED WITHIN US. IF WE DID NOT PASTE TOGETHER THE DEAD BONES AND SCALES OF IDEOLOGY AND IF WE DID NOT SEW ITS ROTTING RAGS WE WOULD BE ASTONISHED AT HOW QUICKLY THE LIES BECOME HELPLESS AND FALL AWAY. THIS IS NOT THEORY. AT SAMARKA CAMP IN NINETEEN FORTY-SIX A GROUP OF INTELLECTUALS REACHED THE BRINK OF DEATH WORN DOWN BY HUNGER COLD AND LABOR BEYOND THEIR STRENGTH. DID THEY STEAL. DID THEY INFORM ON OTHERS. DID THEY WHIMPER ABOUT THEIR RUINED LIVES. NO. FORESEEING DEATH IN DAYS RATHER THAN WEEKS THEY SAT AGAINST THE WALL AND ORGANIZED A SEMINAR SHARING THEIR FINAL KNOWLEDGE WITH ONE ANOTHER. FROM ONE SESSION TO THE NEXT PARTICIPANTS WERE MISSING. THEY WERE ALREADY IN THE MORGUE."
    },
    {
        id: 6,
        subject: "BUT NOT THROUGH ME",
        from: "THE LIE",
        to: "ME",
        cc: "[REDACTED]",
        date: "██████████",
        ref: "DOC██████",
        body: "LET THE LIE COME INTO THE WORLD. LET IT EVEN TRIUMPH. BUT NOT THROUGH ME. THIS IS NOT THE BATTLE CRY OF A HERO BUT THE QUIET RESOLUTION OF AN ORDINARY PERSON WHO REFUSES TO PARTICIPATE IN FALSEHOOD. WRITERS AND ARTISTS CAN DO MORE BECAUSE THEY CAN DEFEAT THE LIE ENTIRELY. IN THE STRUGGLE AGAINST LIES ART HAS ALWAYS TRIUMPHED AND SHALL ALWAYS TRIUMPH BECAUSE LIES CAN PREVAIL AGAINST MUCH IN THIS WORLD BUT NEVER AGAINST ART. YET FOR EVERY PERSON REGARDLESS OF CALLING THERE COMES A GREAT FORK IN THE ROAD. IF YOU GO TO THE RIGHT YOU LOSE YOUR LIFE. IF YOU GO TO THE LEFT YOU LOSE YOUR CONSCIENCE. WHOEVER VOWS TO SURVIVE AT ANY PRICE HAS ALREADY DECIDED TO SURVIVE AT SOMEONE ELSES EXPENSE. IT WAS NOT THE MAJORITY WHO CHOSE THE HARDER PATH BUT NEITHER WAS IT ONLY A FEW. MANY MADE THAT CHOICE THOUGH THEY NEVER SHOUTED ABOUT IT. YOU HAD TO LOOK CLOSELY TO SEE THEM. AND IT WAS ONLY ON ROTTING PRISON STRAW THAT THE FIRST STIRRINGS OF GOOD COULD BE FELT. THE LINE SEPARATING GOOD AND EVIL PASSES NOT THROUGH STATES NOR BETWEEN PARTIES BUT RIGHT THROUGH EVERY HUMAN HEART."
    }
];

// ─── REDACTION LAW ────────────────────────────────────────
// Law: "Truth is hidden. Lies remain visible."
// 1. Words about truth/goodness → ALWAYS redacted
// 2. Words of author's claims/assertions → redacted (the system silences his argument)
// 3. Violence/evil words → NEVER redacted (lies remain visible)

const REDACTED_TRUTH = new Set([
    "TRUTH", "CONSCIENCE", "FREEDOM", "FREE", "GOOD", "GOODNESS",
    "BEAUTY", "ART", "LIBERATION", "SOUL", "INTEGRITY",
    "MEMORY", "LITERATURE", "SAINTHOOD", "GENUINE", "PROOF",
    "LIGHT", "SPARK", "FLAME", "HEART", "BRAVE", "PROTECT",
    "DEFEND", "JUSTICE", "KNOWLEDGE", "WISDOM", "LOVE", "HOPE"
]);

// Author's claims, assertions, resistance — the system censors his voice
const REDACTED_CLAIMS = new Set([
    // Verbs of assertion / resistance / action
    "CANNOT", "MUST", "NEVER", "ALWAYS", "SHALL", "REFUSE", "REFUSES",
    "RESIST", "OPPOSE", "STAND", "STANDS", "REJECT", "DEMAND", "DEMANDS",
    "ENDURE", "SURVIVE", "SURVIVES", "REMAIN", "REMAINS", "EXIST", "EXISTS",
    "CHOOSE", "CHOSE", "DECIDE", "DECIDED", "PARTICIPATE", "BECOME", "BECOMES",
    "LIVE", "CARRY", "GIVE", "TAKE", "HOLD", "KNOW", "KNOWS",
    "BELIEVE", "UNDERSTAND", "REALIZE", "RECOGNIZE", "REMEMBER",
    "REVEAL", "REVEALS", "DISCOVER", "DISCOVERED", "EXPOSE", "WITNESS",
    "STRUGGLE", "PREVAIL", "TRIUMPH", "TRIUMPHED", "OVERCOME",
    "RENOUNCE", "REPROACH", "DESTROY", "RETURN", "CHANGE",
    "EMERGES", "STIRRINGS", "LIBERATE", "SEPARATING", "CROSSES",
    // Words of judgment / moral claim
    "WRONG", "UNJUST", "SHAMEFUL", "CRIMINAL", "GUILTY", "COMPLICIT",
    "INSIDIOUS", "INSIDIOUSLY", "COMMITTING", "COWARDICE",
    "DANGEROUS", "DEVASTATING", "PERMANENT", "UNMISTAKABLE",
    // Words of scope / certainty
    "EVERY", "ENTIRE", "ENTIRELY", "ABSOLUTE", "CERTAIN", "CERTAINLY",
    "WHOLE", "COMPLETE", "TOTAL", "WHEREVER", "WHOEVER", "EVERYONE",
    "EVERYTHING", "NOTHING", "ANYONE",
    // Rhetorical force / author's voice
    "SIMPLY", "MERELY", "ALREADY", "NEITHER", "BOTH", "RIGHT",
    "WITHOUT", "BEYOND", "DESPITE", "AGAINST", "NECESSARY",
    "ENOUGH", "URGENT", "GREATER", "DEEPER", "PRECISELY",
    // Words of human experience the author invokes
    "PERSON", "HUMAN", "HUMANITY", "PEOPLE", "LIFE", "LIVES", "LIVING",
    "GENERATION", "GENERATIONS", "OUR", "YOUR", "OURSELVES",
    "INHABITANTS", "NATION", "NATIONS", "WORLD", "EARTH",
    // Words of consequence / logic
    "BECAUSE", "THEREFORE", "THOUGH", "THROUGH", "BEEN",
    "SAME", "ANOTHER", "EACH", "SUCH", "DOES",
    // Words of time / persistence
    "NOW", "ONCE", "EVER", "AFTER", "UNTIL", "DURING",
    "LIFETIME", "YEARS", "DAYS", "DECADES", "PAST", "FUTURE", "HISTORY",
    // Words of place / condition
    "PLACE", "PLACES", "LINE", "ROAD", "PATH",
    "CONDITION", "CONDITIONS", "FOUNDATION", "FOUNDATIONS",
    // Strong verbs from the text
    "CONCEAL", "INFECTED", "DRAGGED", "CONVINCED", "FORCED",
    "TOLERATE", "TOLERATING", "IMPLANTING", "BURYING", "CRUSHING",
    "FORGOTTEN", "ERASED", "HAMMERING", "SHREDDING"
]);

const SEMANTIC_MAP = {
    // Truth / Light (these will be REDACTED → visible only on hover)
    "TRUTH": "sem-light", "LIBERATION": "sem-light", "FREEDOM": "sem-light",
    "FREE": "sem-light", "LIGHT": "sem-light", "BEAUTY": "sem-light",
    "ART": "sem-light", "GOODNESS": "sem-light", "GOOD": "sem-light",
    "CONSCIENCE": "sem-light", "MEMORY": "sem-light", "LITERATURE": "sem-light",
    "SOUL": "sem-light", "SAINTHOOD": "sem-light",
    "PROOF": "sem-light", "GENUINE": "sem-light",

    // Power / Violence / Oppression (visible — lies remain)
    // Core violence
    "VIOLENCE": "sem-void", "LIES": "sem-void", "LIE": "sem-void",
    "FALSEHOOD": "sem-void", "EVIL": "sem-void", "CRUELTY": "sem-void",
    "POWER": "sem-void", "IDEOLOGY": "sem-void", "FORCE": "sem-void",
    "SILENCE": "sem-void", "FEAR": "sem-void", "DEATH": "sem-void",
    "PUNISHMENT": "sem-void", "DESTROYED": "sem-void", "ABYSS": "sem-void",
    "DEVIL": "sem-void", "MALICE": "sem-void", "FOUL": "sem-void",
    "TUMOR": "sem-void", "MORGUE": "sem-void",
    // System violence
    "OBEDIENCE": "sem-void", "SUPPRESSION": "sem-void", "CENSORSHIP": "sem-void",
    "REGIME": "sem-void", "GULAG": "sem-void", "CAMP": "sem-void",
    "SERVITUDE": "sem-void", "PRISON": "sem-void", "TORTURE": "sem-void",
    "OPPRESSION": "sem-void", "TYRANT": "sem-void", "TERROR": "sem-void",
    "COMPLICIT": "sem-void", "GUILTY": "sem-void", "CRIMINAL": "sem-void",
    "CORRUPTION": "sem-void", "PROPAGANDA": "sem-void", "DECEPTION": "sem-void",
    "THREATENING": "sem-void", "ARREST": "sem-void", "EXILE": "sem-void",
    // Broader oppressive categories (lenient evaluation)
    "INFECTION": "sem-void", "INFECTED": "sem-void", "POISONS": "sem-void",
    "CORPSES": "sem-void", "CORPSE": "sem-void", "GRAVE": "sem-void",
    "BONES": "sem-void", "ROTTING": "sem-void", "CRUSHED": "sem-void",
    "DRAGGED": "sem-void", "TRAMPLE": "sem-void", "DEVOURED": "sem-void",
    "VIOLATION": "sem-void", "OBLIVION": "sem-void", "ERASED": "sem-void",
    "FORGOTTEN": "sem-void", "SLANDER": "sem-void", "DEFORMATION": "sem-void",
    "HAMMERING": "sem-void", "DRILLS": "sem-void", "SHREDDING": "sem-void",
    "MUFFLED": "sem-void", "MISTRUST": "sem-void", "SECRECY": "sem-void",
    "FORCED": "sem-void", "HATRED": "sem-void", "HATEFUL": "sem-void",
    "BITTER": "sem-void", "ALIEN": "sem-void", "FEEBLE": "sem-void",
    "RUINS": "sem-void", "DANGER": "sem-void", "EVILDOER": "sem-void",
    "EVILDOERS": "sem-void", "EVILDOING": "sem-void",
    "SENTENCED": "sem-void", "SENTENCE": "sem-void",
    "INSIDIOUS": "sem-void", "INSIDIOUSLY": "sem-void",
    "FROZEN": "sem-void", "NAKED": "sem-void", "RUINED": "sem-void",
    "FOG": "sem-void", "DENSE": "sem-void", "GRAY": "sem-void",
    // GULAG-context oppression
    "CELL": "sem-void", "THROWN": "sem-void", "BLIZZARD": "sem-void",
    "ROLLCALL": "sem-void", "PRISONERS": "sem-void", "MARCHING": "sem-void",
    "GRUEL": "sem-void", "GRITS": "sem-void",
    // FREEDOM-context oppression
    "LABOR": "sem-void", "ENCROACH": "sem-void", "PRESSURES": "sem-void",
    "DEPRIVE": "sem-void", "PROPAGANDIST": "sem-void", "DRAGS": "sem-void",
    "PRETENDS": "sem-void", "APPOINTED": "sem-void", "ASHES": "sem-void",
    // WEIGHT OF TRUTH-context
    "CONTRADICTION": "sem-void", "ERROR": "sem-void", "MISTRUSTED": "sem-void",
    "REFUTE": "sem-void",

    // System / Structure
    "SYSTEM": "sem-structure", "STATE": "sem-structure", "REGIME": "sem-structure",
    "OBEDIENCE": "sem-structure", "CENSORSHIP": "sem-structure",
    "SUPPRESSION": "sem-structure", "INFORMATION": "sem-structure",
    "CAMP": "sem-structure", "GULAG": "sem-structure", "COMMANDERS": "sem-structure",
    "PARTY": "sem-structure", "GOVERNMENT": "sem-structure",
    "AUTHORITY": "sem-structure", "ORDERS": "sem-structure",
    "ZONE": "sem-structure", "SERVITUDE": "sem-structure",

    // Time
    "TIME": "sem-time", "YEARS": "sem-time", "CENTURY": "sem-time",
    "GENERATIONS": "sem-time", "PAST": "sem-time", "FUTURE": "sem-time",
    "DECADES": "sem-time", "DAYS": "sem-time", "HISTORY": "sem-time",
    "FORGOTTEN": "sem-time", "ERASED": "sem-time",

    // Material / Earth
    "EARTH": "sem-material", "WORLD": "sem-material", "NATION": "sem-material",
    "PEOPLE": "sem-material", "HUMAN": "sem-material",
    "PRISON": "sem-material", "STRAW": "sem-material", "STONES": "sem-material",
    "BONES": "sem-material", "ICE": "sem-material"
};

// Seeded random for consistent results per theme
function seededRandom(seed) {
    let s = seed;
    return function () {
        s = (s * 16807 + 0) % 2147483647;
        return s / 2147483647;
    };
}

// ─── DOM ──────────────────────────────────────────────────
const CONTAINER = document.getElementById('grid-system');
const cellLineManagers = new Map();

function createCell(theme) {
    const cell = document.createElement('article');
    cell.className = 'grid-cell';
    cell.dataset.themeId = theme.id;

    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';

    // Header
    const header = document.createElement('div');
    header.className = 'doc-header';
    header.innerHTML = `
        <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">${theme.from}</span></div>
        <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">${theme.to}</span></div>
        <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">${theme.cc}</span></div>
        <div class="doc-divider"></div>
        <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value doc-subject">${theme.subject}</span></div>
        <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value date-redacted">${theme.date}</span></div>
        <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">${theme.ref}</span></div>
        <div class="doc-divider"></div>
    `;

    // Body Text with hybrid redaction
    const bodyWrapper = document.createElement('div');
    bodyWrapper.className = 'body-wrapper';

    const p = document.createElement('p');
    p.className = 'text-content';

    const words = theme.body.split(' ');

    words.forEach(word => {
        const cleanWord = word.replace(/[^A-Z]/g, '');
        const span = document.createElement('span');
        span.textContent = word + " ";

        const semClass = SEMANTIC_MAP[cleanWord];
        const isViolenceWord = semClass === 'sem-void';

        if (isViolenceWord) {
            // Violence words → NEVER redacted, always visible
            span.className = 'sem-word sem-void';
        } else if (REDACTED_TRUTH.has(cleanWord) || REDACTED_CLAIMS.has(cleanWord)) {
            // Truth + author's claims → redacted
            span.className = 'ref-placeholder';
        }

        p.appendChild(span);
    });

    // Diagram Layer (SVG) — inside body-wrapper so it clips to text area
    const diagramLayer = document.createElement('div');
    diagramLayer.className = 'diagram-layer';
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'diagram-svg');
    diagramLayer.appendChild(svg);

    bodyWrapper.appendChild(p);
    bodyWrapper.appendChild(diagramLayer);

    textLayer.appendChild(header);
    textLayer.appendChild(bodyWrapper);

    cell.appendChild(textLayer);

    return cell;
}

// 1. Populate Grid — 12 cells, 4×3
THEMES.forEach(theme => {
    CONTAINER.appendChild(createCell(theme));
});

// ─── TYPEWRITER EFFECT ────────────────────────────────────
function typeText(el, text, baseDelay) {
    return new Promise(resolve => {
        let i = 0;
        function tick() {
            if (i < text.length) {
                i++;
                const typed = text.substring(0, i);
                const untyped = text.substring(i);
                el.innerHTML = typed + '<span style="visibility: hidden;">' + untyped + '</span>';

                // Irregular delay: faster for letters, slower for spaces/punctuation
                const char = text[i - 1];
                let delay = baseDelay + Math.random() * baseDelay * 0.8;
                if (char === ' ') delay += baseDelay * 0.3;
                if (char === '.' || char === ',') delay += baseDelay * 1.2;
                setTimeout(tick, delay);
            } else {
                el.textContent = text;
                resolve();
            }
        }
        tick();
    });
}

// Phase 1: Header info — all cells type simultaneously, each field at different rhythm
async function typeHeaders() {
    const cells = document.querySelectorAll('.grid-cell');
    const allPromises = [];

    cells.forEach((cell, cellIdx) => {
        const values = cell.querySelectorAll('.doc-value');
        const labels = cell.querySelectorAll('.doc-label');

        // Type each label with unique timing per cell
        labels.forEach((label, labelIdx) => {
            const originalText = label.textContent;
            label.textContent = '';
            label.style.visibility = 'visible';

            // Base delay for typing labels
            const baseDelay = 15 + (cellIdx * 3) + (labelIdx * 5) + Math.random() * 15;
            // Start before values do
            const startDelay = labelIdx * 80 + cellIdx * 20 + Math.random() * 30;

            const p = new Promise(resolve => {
                setTimeout(() => {
                    typeText(label, originalText, baseDelay).then(resolve);
                }, startDelay);
            });
            allPromises.push(p);
        });

        // Type each value with unique timing per cell
        values.forEach((val, valIdx) => {
            const originalText = val.textContent;
            val.textContent = '';
            val.style.visibility = 'visible';

            // Each cell+field gets a different base delay for variety
            const baseDelay = 22 + (cellIdx * 3) + (valIdx * 8) + Math.random() * 20;
            // Stagger start: each field starts slightly after the previous
            const startDelay = valIdx * 110 + cellIdx * 30 + Math.random() * 80;
            const p = new Promise(resolve => {
                setTimeout(() => {
                    if (val.classList.contains('date-redacted')) {
                        // The typing func replaces text inside the element, meaning we can run clip-path right as it begins
                        val.style.clipPath = 'inset(0 100% 0 0)';
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                val.style.transition = 'clip-path 0.4s linear';
                                val.style.clipPath = 'inset(0 0 0 0)';
                            });
                        });
                        val.addEventListener('transitionend', () => {
                            val.style.clipPath = '';
                            val.style.transition = '';
                        }, { once: true });
                    }
                    typeText(val, originalText, baseDelay).then(resolve);
                }, startDelay);
            });
            allPromises.push(p);
        });

        // Show dividers after a delay
        const dividers = cell.querySelectorAll('.doc-divider');
        dividers.forEach(d => {
            setTimeout(() => { d.style.visibility = 'visible'; }, 180 + cellIdx * 30);
        });
    });

    await Promise.all(allPromises);
}

// Phase 2: Body text — all cells type their words simultaneously
async function typeBodyTexts() {
    const cells = document.querySelectorAll('.grid-cell');
    const allPromises = [];

    cells.forEach((cell, cellIdx) => {
        const spans = cell.querySelectorAll('.text-content > span');
        const bodyWrapper = cell.querySelector('.body-wrapper');
        if (bodyWrapper) bodyWrapper.style.visibility = 'visible';

        const p = new Promise(resolve => {
            let i = 0;
            let speedMultiplier = 1.0; // Delay multiplier (1.0 = normal)
            function typeNextWord() {
                if (i < spans.length) {
                    const span = spans[i];
                    span.style.visibility = 'visible';

                    // Accelerate: Decrease delay by 3% each word (faster typing over time), up to a max 85% speedup 
                    speedMultiplier = Math.max(0.15, speedMultiplier * 0.97);

                    if (span.classList.contains('ref-placeholder')) {
                        // Underline drawing: black box sweeps left → right
                        span.style.clipPath = 'inset(0 100% 0 0)';
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                span.style.transition = 'clip-path 0.4s linear';
                                span.style.clipPath = 'inset(0 0 0 0)';
                            });
                        });
                        span.addEventListener('transitionend', () => {
                            span.style.clipPath = '';
                            span.style.transition = '';
                        }, { once: true });
                        // Trigger progressive line drawing after box appears
                        setTimeout(() => {
                            const manager = cellLineManagers.get(cell);
                            if (manager) manager.revealNode(span);
                        }, 200 * Math.max(0.5, speedMultiplier)); // accelerate line draw timing slightly

                        // Micro Y-jitter on appearance
                        const jitter = (Math.random() - 0.5) * 0.6;
                        span.style.transform = `translateY(${jitter}px)`;

                        i++;
                        // Variable delay per word for REDACTED words since they show up as a chunk mostly
                        const delay = (40 + Math.random() * 40) * speedMultiplier;
                        setTimeout(typeNextWord, delay);
                    } else {
                        // Standard word - type out letter by letter like the header
                        const originalText = span.textContent;
                        // base delay for typing characters in body
                        const textDelay = (10 + Math.random() * 15) * Math.max(0.3, speedMultiplier);

                        // Micro Y-jitter on appearance
                        const wordJitter = (Math.random() - 0.5) * 0.6;
                        span.style.transform = `translateY(${wordJitter}px)`;

                        typeText(span, originalText, textDelay).then(() => {
                            i++;
                            // delay between words
                            const wordDelay = (15 + Math.random() * 20) * speedMultiplier;
                            setTimeout(typeNextWord, wordDelay);
                        });
                    }
                } else {
                    resolve();
                }
            }
            // Stagger start per cell slightly
            setTimeout(typeNextWord, cellIdx * 80);
        });
        allPromises.push(p);
    });

    await Promise.all(allPromises);
}

// Init: hide everything, then run phases
async function initTypewriter() {
    document.body.classList.add('is-loading');
    // Hide all text initially
    document.querySelectorAll('.doc-label, .doc-value, .doc-divider').forEach(el => {
        el.style.visibility = 'hidden';
    });
    document.querySelectorAll('.text-content > span').forEach(el => {
        el.style.visibility = 'hidden';
    });
    document.querySelectorAll('.body-wrapper').forEach(el => {
        el.style.visibility = 'hidden';
    });

    // Small delay before starting
    await new Promise(r => setTimeout(r, 600));

    // 1. Start typing the headers first
    const headerPromise = typeHeaders();

    // 2. Start the body texts when the headers are nearly complete
    const bodyPromise = new Promise(resolve => {
        setTimeout(async () => {
            await typeBodyTexts();
            resolve();
        }, 1200);
    });

    // Make cells hoverable midway through the overall animation (approx 2.5s)
    setTimeout(() => {
        document.body.classList.remove('is-loading');
    }, 2500);

    await Promise.all([headerPromise, bodyPromise]);
}

initTypewriter();

function setupCellInteractions(cells) {
    cells.forEach(cell => {
        const bodyWrapper = cell.querySelector('.body-wrapper');
        const textContent = cell.querySelector('.text-content');
        if (!bodyWrapper || !textContent) return;
        const placeholders = textContent.querySelectorAll('.ref-placeholder');
        const violenceWords = textContent.querySelectorAll('.sem-word.sem-void');
        const svg = cell.querySelector('.diagram-svg');

        // Red lines SVG — behind text (z-index: 1)
        const redSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        redSvg.setAttribute('class', 'diagram-svg red-lines-svg');
        const redLayer = document.createElement('div');
        redLayer.className = 'red-line-layer';
        redLayer.appendChild(redSvg);
        bodyWrapper.appendChild(redLayer);

        // Connect all placeholders as nodes
        const nodeSpans = Array.from(placeholders);
        const violenceSpans = Array.from(violenceWords);

        function getNodePositions() {
            const wrapperRect = bodyWrapper.getBoundingClientRect();
            return nodeSpans.map((span, id) => {
                const rect = span.getBoundingClientRect();
                return {
                    id,
                    centerX: rect.left - wrapperRect.left + rect.width / 2,
                    centerY: rect.top - wrapperRect.top + rect.height / 2,
                    visible: span.style.visibility !== 'hidden' && rect.top >= wrapperRect.top && rect.bottom <= wrapperRect.bottom
                };
            });
        }

        function getViolencePositions() {
            const wrapperRect = bodyWrapper.getBoundingClientRect();
            return violenceSpans.map((span, id) => {
                const rect = span.getBoundingClientRect();
                return {
                    id,
                    centerX: rect.left - wrapperRect.left + rect.width / 2,
                    centerY: rect.top - wrapperRect.top + rect.height / 2,
                    visible: span.style.visibility !== 'hidden' && rect.top >= wrapperRect.top && rect.bottom <= wrapperRect.bottom
                };
            });
        }

        function buildLines(positions) {
            svg.innerHTML = '';
            const lines = [];

            positions.forEach(node => {
                if (!node.visible) return;

                const others = positions
                    .filter(n => n.id !== node.id && n.visible)
                    .map(n => ({
                        target: n,
                        dist: Math.hypot(n.centerX - node.centerX, n.centerY - node.centerY)
                    }))
                    .sort((a, b) => a.dist - b.dist)
                    .filter(d => d.dist < 150)
                    .slice(0, 2);

                others.forEach(conn => {
                    const linkId = [node.id, conn.target.id].sort().join('-');
                    if (lines.find(l => l.id === linkId)) return;

                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute('x1', node.centerX);
                    line.setAttribute('y1', node.centerY);
                    line.setAttribute('x2', conn.target.centerX);
                    line.setAttribute('y2', conn.target.centerY);
                    line.setAttribute('class', 'data-line');

                    svg.appendChild(line);
                    lines.push({ id: linkId, el: line, source: node, target: conn.target });
                });
            });

            return lines;
        }

        function buildRedLines(positions) {
            redSvg.innerHTML = '';
            const lines = [];

            positions.forEach(node => {
                if (!node.visible) return;

                const others = positions
                    .filter(n => n.id !== node.id && n.visible)
                    .map(n => ({
                        target: n,
                        dist: Math.hypot(n.centerX - node.centerX, n.centerY - node.centerY)
                    }))
                    .sort((a, b) => a.dist - b.dist)
                    .filter(d => d.dist < 150)
                    .slice(0, 2);

                others.forEach(conn => {
                    const linkId = 'r-' + [node.id, conn.target.id].sort().join('-');
                    if (lines.find(l => l.id === linkId)) return;

                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute('x1', node.centerX);
                    line.setAttribute('y1', node.centerY);
                    line.setAttribute('x2', conn.target.centerX);
                    line.setAttribute('y2', conn.target.centerY);
                    line.setAttribute('class', 'red-line');

                    redSvg.appendChild(line);
                    lines.push({ id: linkId, el: line, source: node, target: conn.target });
                });
            });

            return lines;
        }

        // Progressive line drawing during typewriter
        const revealedIds = new Set();
        const typewriterLinkIds = new Set();

        function revealNode(span) {
            const spanIdx = nodeSpans.indexOf(span);
            if (spanIdx === -1) return;
            revealedIds.add(spanIdx);

            const allPos = getNodePositions();
            const newNode = allPos[spanIdx];
            if (!newNode) return;

            const nearby = allPos
                .filter(n => n.id !== spanIdx && revealedIds.has(n.id) && n.visible)
                .map(n => ({ node: n, dist: Math.hypot(n.centerX - newNode.centerX, n.centerY - newNode.centerY) }))
                .filter(d => d.dist < 150)
                .sort((a, b) => a.dist - b.dist)
                .slice(0, 2);

            nearby.forEach(({ node: targetNode }) => {
                const linkId = [newNode.id, targetNode.id].sort().join('-');
                if (typewriterLinkIds.has(linkId)) return;
                typewriterLinkIds.add(linkId);

                const length = Math.hypot(targetNode.centerX - newNode.centerX, targetNode.centerY - newNode.centerY);
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute('x1', newNode.centerX);
                line.setAttribute('y1', newNode.centerY);
                line.setAttribute('x2', targetNode.centerX);
                line.setAttribute('y2', targetNode.centerY);
                line.setAttribute('class', 'data-line');
                line.style.strokeDasharray = length;
                line.style.strokeDashoffset = length;
                svg.appendChild(line);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        line.style.transition = 'stroke-dashoffset 1.2s linear';
                        line.style.strokeDashoffset = '0';
                    });
                });
                currentLines.push({ id: linkId, el: line, source: newNode, target: targetNode });
            });

            positions = allPos;
        }

        cellLineManagers.set(cell, { revealNode });

        let positions = getNodePositions();
        let currentLines = [];
        let redLinePositions = [];
        let currentRedLines = [];

        let scrollVelocity = 0;
        let lastScrollTop = 0;
        let wobbleDecay = 0;
        let wobbleFrame;

        function wobbleUpdate() {
            wobbleDecay *= 0.9;
            if (Math.abs(wobbleDecay) < 0.15) {
                wobbleDecay = 0;
                return;
            }

            const time = Date.now() * 0.0015;
            currentLines.forEach(l => {
                const s1 = Math.sin(time + l.source.id * 1.7) * wobbleDecay;
                const s2 = Math.cos(time + l.source.id * 0.9) * wobbleDecay;
                const t1 = Math.sin(time + l.target.id * 2.3) * wobbleDecay * 0.8;
                const t2 = Math.cos(time + l.target.id * 1.1) * wobbleDecay * 0.8;

                l.el.setAttribute('x1', l.source.centerX + s1);
                l.el.setAttribute('y1', l.source.centerY + s2);
                l.el.setAttribute('x2', l.target.centerX + t1);
                l.el.setAttribute('y2', l.target.centerY + t2);
            });
            currentRedLines.forEach(l => {
                const s1 = Math.sin(time + l.source.id * 2.1) * wobbleDecay;
                const s2 = Math.cos(time + l.source.id * 1.3) * wobbleDecay;
                const t1 = Math.sin(time + l.target.id * 1.7) * wobbleDecay * 0.8;
                const t2 = Math.cos(time + l.target.id * 0.9) * wobbleDecay * 0.8;

                l.el.setAttribute('x1', l.source.centerX + s1);
                l.el.setAttribute('y1', l.source.centerY + s2);
                l.el.setAttribute('x2', l.target.centerX + t1);
                l.el.setAttribute('y2', l.target.centerY + t2);
            });

            wobbleFrame = requestAnimationFrame(wobbleUpdate);
        }

        textContent.addEventListener('scroll', () => {
            const scrollTop = textContent.scrollTop;
            scrollVelocity = Math.abs(scrollTop - lastScrollTop);
            lastScrollTop = scrollTop;

            positions = getNodePositions();
            currentLines = buildLines(positions);
            if (isHovering) {
                redLinePositions = getViolencePositions();
                currentRedLines = buildRedLines(redLinePositions);
            }

            wobbleDecay = Math.min(scrollVelocity * 1.5, 8);
            cancelAnimationFrame(wobbleFrame);
            wobbleUpdate();
        });

        let animationFrame;
        let isHovering = false;
        const allPlaceholders = Array.from(placeholders);

        function hoverUpdate() {
            if (!isHovering) return;
            const time = Date.now() * 0.005;

            currentLines.forEach(l => {
                const sx = Math.sin(time + l.source.id * 1.3) * 3;
                const sy = Math.cos(time + l.source.id * 0.7) * 2.5;
                const tx = Math.sin(time + l.target.id * 1.9) * 2.5;
                const ty = Math.cos(time + l.target.id * 0.4) * 3;

                l.el.setAttribute('x1', l.source.centerX + sx);
                l.el.setAttribute('y1', l.source.centerY + sy);
                l.el.setAttribute('x2', l.target.centerX + tx);
                l.el.setAttribute('y2', l.target.centerY + ty);
            });

            currentRedLines.forEach(l => {
                const sx = Math.sin(time + l.source.id * 1.5) * 2.5;
                const sy = Math.cos(time + l.source.id * 0.9) * 2;
                const tx = Math.sin(time + l.target.id * 2.1) * 2;
                const ty = Math.cos(time + l.target.id * 0.6) * 2.5;

                l.el.setAttribute('x1', l.source.centerX + sx);
                l.el.setAttribute('y1', l.source.centerY + sy);
                l.el.setAttribute('x2', l.target.centerX + tx);
                l.el.setAttribute('y2', l.target.centerY + ty);
            });

            allPlaceholders.forEach((span, i) => {
                const bx = Math.sin(time * 1.2 + i * 0.7) * 1.2;
                const by = Math.cos(time * 0.9 + i * 1.1) * 0.8;
                span.style.transform = `translate3d(${bx}px, ${by}px, 0)`;
            });

            animationFrame = requestAnimationFrame(hoverUpdate);
        }

        cell.addEventListener('mouseenter', () => {
            isHovering = true;
            positions = getNodePositions();
            currentLines = buildLines(positions);
            redLinePositions = getViolencePositions();
            currentRedLines = buildRedLines(redLinePositions);
            hoverUpdate();
        });

        cell.addEventListener('mouseleave', () => {
            isHovering = false;
            cancelAnimationFrame(animationFrame);
            cancelAnimationFrame(wobbleFrame);
            currentLines.forEach(l => {
                l.el.setAttribute('x1', l.source.centerX);
                l.el.setAttribute('y1', l.source.centerY);
                l.el.setAttribute('x2', l.target.centerX);
                l.el.setAttribute('y2', l.target.centerY);
            });
            redSvg.innerHTML = '';
            currentRedLines = [];
            allPlaceholders.forEach(span => {
                span.style.transform = '';
            });
        });

        // Click handler for sub page transitions
        cell.addEventListener('click', () => {
            if (document.body.classList.contains('is-loading')) return;
            const id = parseInt(cell.dataset.themeId);
            if (id === 1) openPhysicsSubpage(cell);
            else if (id === 2) openIdeologySubpage(cell);
            else if (id === 3) openPrisonSubpage(cell);
            else if (id === 4) openConscienceSubpage(cell);
            else if (id === 5) openResistanceSubpage(cell);
            else if (id === 6) openNotThroughMeSubpage(cell);
        });
    });
}

function initCellInteractions() {
    const cells = document.querySelectorAll('.grid-cell');
    setupCellInteractions(cells);
}

window.onload = () => {
    initCellInteractions();
};

/* ─── 3D MODEL SUBPAGE: THEME 01 ───────────────────────── */

let threeModules = null;

async function loadThreeModules() {
    if (threeModules) return threeModules;
    const THREE = await import('three');
    const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
    const { EffectComposer } = await import('three/addons/postprocessing/EffectComposer.js');
    const { RenderPass } = await import('three/addons/postprocessing/RenderPass.js');
    const { UnrealBloomPass } = await import('three/addons/postprocessing/UnrealBloomPass.js');
    threeModules = { THREE, GLTFLoader, EffectComposer, RenderPass, UnrealBloomPass };
    return threeModules;
}

const TEXT_CHUNKS = [
    `Violence quickly grows old and loses confidence in itself. To maintain a respectable face it summons falsehood as its ally. Violence cannot conceal itself without lies, and lies cannot be sustained without violence.`,
    `The system does not demand daily physical force upon every shoulder. It demands only obedience to lies and daily participation in them. All loyalty to the regime is contained in that single demand.`,
    `Lies have dragged society so far from normality that one can no longer see a single pillar through the dense, gray fog. Even if they offered us the chance to learn the truth, would our free people even want to know it?`,
    `Only what the radio hammers in day after day drills into the brain. Everything else is conveniently forgotten.`,
    `The simplest and most accessible key to self-neglected liberation lies in personal non-participation in lies.`,
    `Though lies conceal everything, though they embrace everything, not with any help from me. When people renounce lies it simply cuts short their existence.`,
    `Like an infection, they can survive only in a living organism. This opens a breach in the imaginary encirclement caused by our inaction.`,
    `SOURCES: Live Not by Lies (1974) / The Gulag Archipelago, Part I, Ch. 8 CLASSIFICATION: SUPPRESSED`
];

function generatePartTexture(textChunks, fontSize, color, keyword) {
    const canvas = document.createElement('canvas');
    canvas.width = 4096; canvas.height = 4096;
    const ctx = canvas.getContext('2d');

    // Modern bold font
    const FONT_FAM = `'Inter', 'Helvetica Neue', 'Arial', sans-serif`;

    // 0. Fill background with tiny micro-text (Data Noise/Density)
    ctx.fillStyle = '#1a1a1a';
    ctx.font = `600 ${fontSize * 0.4}px ${FONT_FAM}`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    const microStr = "0101 STANDARDIZATION ISO SEQ-992 0182 DATA STREAM NULL CONFIRM // ";
    let mY = 0;
    while (mY < canvas.height) {
        let line = "";
        while (ctx.measureText(line).width < canvas.width * 1.5) line += microStr;
        ctx.fillText(line, -20, mY);
        mY += fontSize * 0.4;
    }

    // 1. Draw massive giant keyword in background
    ctx.fillStyle = '#333333';
    ctx.font = `900 1000px ${FONT_FAM}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(keyword, canvas.width / 2, canvas.height / 2);
    ctx.fillText(keyword, canvas.width / 2, 400);
    ctx.fillText(keyword, canvas.width / 2, canvas.height - 400);

    // 2. Overlay dense data text with tight line height
    ctx.font = `800 ${fontSize}px ${FONT_FAM}`; // Bolder, modern text
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';

    // Create an infinite word pool
    const textPool = textChunks.join(' ').split(' ');
    let wordIdx = 0;

    const lh = fontSize * 0.95;
    let y = fontSize;

    // Fill the canvas completely with unbroken text
    while (y < canvas.height + lh) {
        let currentLine = '';
        while (true) {
            const nextWord = textPool[wordIdx % textPool.length];
            const testLine = currentLine ? currentLine + ' ' + nextWord : nextWord;

            // If the next word overflows the canvas, print currentLine and move down
            if (ctx.measureText(testLine).width > canvas.width - 40) {
                ctx.fillText(currentLine, 20, y);
                y += lh;
                break; // move to next line without advancing wordIdx just yet (well, we haven't)
            } else {
                currentLine = testLine;
                wordIdx++;
            }
        }
    }

    return canvas;
}

// Per-part texture configs (Law of Extreme Hierarchical Scale)
const PART_CONFIG = {
    // Massive focus items (Huge text)
    equipment: { textIdx: [0, 1, 7], fontSize: 48, color: '#ffffff', keyword: 'SYSTEM', uvScale: 0.0007 },

    // Large structural cores (Medium-Huge text)
    pole_body: { textIdx: [1, 5, 6], fontSize: 36, color: '#ededed', keyword: 'POWER', uvScale: 0.0025 },

    // Medium connection elements
    hardware: { textIdx: [2, 3, 5], fontSize: 24, color: '#cccccc', keyword: 'NODE', uvScale: 0.0045 },
    connectors: { textIdx: [0, 6, 7], fontSize: 20, color: '#cccccc', keyword: 'LINK', uvScale: 0.007 },

    // Small dense elements
    crossbar: { textIdx: [4, 6, 7], fontSize: 16, color: '#bbbbbb', keyword: 'SPAN', uvScale: 0.012 },

    // Microscopic extreme detail
    insulators: { textIdx: [3, 4, 7], fontSize: 12, color: '#aaaaaa', keyword: 'ISOLATE', uvScale: 0.018 }
};

function createPartShaderMaterial(THREE, tex, uvScale) {
    return new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        uniforms: {
            uTime: { value: 0 }, uTextMap: { value: tex }, uUvScale: { value: uvScale },
            uUvOffset: { value: new THREE.Vector2(Math.random() * 100.0, Math.random() * 100.0) },
            uFresnelPower: { value: 1.5 }, uFresnelColor: { value: new THREE.Color(0xdc143c) },
            uBaseColor: { value: new THREE.Color(0xffffff) }, uAccentColor: { value: new THREE.Color(0xdc143c) },
            uModelAngle: { value: 0.0 } // Sync dynamically to rotation.y
        },
        vertexShader: `
            uniform float uTime;
            varying vec3 vWorldNormal, vWorldPos, vViewDir;
            varying float vDepth;
            void main() {
                vWorldNormal = normalize(mat3(modelMatrix) * normal);
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                vViewDir = -normalize(mv.xyz);
                vDepth = -mv.z;
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: `
            uniform float uTime, uFresnelPower, uUvScale, uModelAngle;
            uniform vec2 uUvOffset;
            uniform sampler2D uTextMap;
            uniform vec3 uFresnelColor, uBaseColor, uAccentColor;
            varying vec3 vWorldNormal, vWorldPos, vViewDir;
            varying float vDepth;

            // Law of Orthogonal Conformity: Locked World Triplanar
            float triplanarText(vec3 pos, vec3 norm, float scale) {
                vec3 blend = abs(norm);
                // 자연스러운 곡면 매핑을 위해 혼합 지수를 낮춤 (원형 오브젝트에서 끊김 방지)
                blend = pow(blend, vec3(5.0)); 
                blend /= dot(blend, vec3(1.0));
                
                // 가로로만 흐르도록 강제 제어 (수평 흐름의 절대 법칙)
                float speed = uTime * 0.005; 
                
                // 완벽히 독립된 각 축의 면에서 텍스트가 바르게 누워야 하므로,
                vec2 uvX = (vec2(pos.z, pos.y) * scale) + uUvOffset;
                vec2 uvY = (vec2(pos.x, pos.z) * scale) + uUvOffset;
                vec2 uvZ = (vec2(pos.x, pos.y) * scale) + uUvOffset;
                
                // 수평 축(x)에만 스피드를 더해 오직 스크롤(가로) 흐름만 발동
                uvX.x += speed;
                uvY.x -= speed; // Y면 (윗면) 흐름 방향 조정
                uvZ.x -= speed; 
                
                float tx = texture2D(uTextMap, uvX).r;
                float ty = texture2D(uTextMap, uvY).r;
                float tz = texture2D(uTextMap, uvZ).r;
                
                return tx*blend.x + ty*blend.y + tz*blend.z;
            }

            void main() {
                // 모델이 빙빙 돌더라도 텍스트 껍데기가 완벽하게 기하학적 수평/수직을 유지하며 붙어있도록
                // 현재 월드 공간 좌표를 "모형의 회전각도"만큼 반대로 돌려서 고정축을 도출.
                float c = cos(-uModelAngle);
                float s = sin(-uModelAngle);
                mat3 invRot = mat3(
                    c, 0.0, -s,
                    0.0, 1.0, 0.0,
                    s, 0.0, c
                );
                
                vec3 fixedPos = invRot * vWorldPos;
                vec3 fixedNorm = invRot * vWorldNormal;
                
                // 절대 빗나가지 않는 고정된 독립 수평/수직면 계산 추출
                float textRaw = triplanarText(fixedPos, fixedNorm, uUvScale);
                
                // Spatial Depth effect: Sharp front faces vs Soft/Shadowed back faces
                float text;
                float occlusion = 1.0;
                
                if (gl_FrontFacing) {
                    // Optimized for extreme close-up: Narrow smoothstep for razor-sharp typography
                    text = smoothstep(0.48, 0.52, textRaw);
                } else {
                    // 카메라 먼쪽(내부/뒷면)은 블러(Smudge) 처리 후 그림자처럼 어둡게 감춤
                    text = smoothstep(0.0, 1.0, textRaw); // 블러 반경 최대치 확장 (0.0~1.0)
                    occlusion = 0.25; // 75% 가려진 그림자 효과 (더 어둡게)
                }
                
                // (이전의 discard 구문 삭제: 스크롤링 시 화면 자글거림/프레임 드랍 원인 제거)

                vec3 ld = normalize(vec3(0.5,1.0,0.7));
                vec3 finalNormal = gl_FrontFacing ? vWorldNormal : -vWorldNormal; // 뒷면 조명을 위한 노멀 반전
                
                float diff = max(dot(finalNormal, ld), 0.0) * 0.7 + 0.3;
                float fresnel = pow(1.0 - max(dot(finalNormal, vViewDir), 0.0), uFresnelPower);
                
                // Light mode vs Dark mode check (uBaseColor.r < 0.5 means near-black ink in light mode)
                bool isLightMode = uBaseColor.r < 0.5;

                vec3 finalSurf;
                float finalAlpha;

                if (isLightMode) {
                    // LIGHT MODE: Brutalist black ink on white paper
                    vec3 surf = uBaseColor * diff * text * occlusion;
                    vec3 edge = uFresnelColor * fresnel;
                    finalSurf = 1.0 - (1.0 - surf) * (1.0 - edge);
                    finalAlpha = text * 0.98 + 0.02;
                    if (text > 0.5 && gl_FrontFacing) finalAlpha = 1.0;
                } else {
                    // DARK MODE: High-contrast white typography on void
                    // We use max() blending between the white text and red edge to prevent the "pink" tint.
                    // Also boost text brightness to ensure it doesn't look grey in shadows.
                    vec3 tCol = uBaseColor * (diff * 0.2 + 0.8); 
                    vec3 eCol = uFresnelColor * fresnel * 0.6;   
                    finalSurf = mix(eCol, max(tCol, eCol), text);
                    finalAlpha = text * 0.95 + 0.05 + fresnel * 0.2;
                }

                // Global transparency adjustments (Back faces for ghost effect)
                if (!gl_FrontFacing) finalAlpha *= 0.2;
                
                gl_FragColor = vec4(finalSurf, finalAlpha);
            }
        `
    });
}

// Per-subpage guide fade: fade the guide text after the first user gesture
// or after 6 seconds, whichever comes first.
function armGuideFade(container) {
    const guides = () => container.querySelectorAll('.overlay-text-guide');
    let fired = false;
    const fade = () => {
        if (fired) return;
        fired = true;
        guides().forEach(el => el.classList.add('user-engaged'));
        container.removeEventListener('pointerdown', fade);
        container.removeEventListener('wheel', fade);
        window.removeEventListener('keydown', fade);
    };
    container.addEventListener('pointerdown', fade, { passive: true });
    container.addEventListener('wheel', fade, { passive: true });
    window.addEventListener('keydown', fade, { passive: true });
    setTimeout(fade, 6000);
}

function openPhysicsSubpage(clickedCell) {
    // Create the container
    const container = document.createElement('div');
    container.id = 'physics-subpage';

    // Loading indicator
    const loadingEl = document.createElement('div');
    loadingEl.className = 'model-loading';
    loadingEl.textContent = 'LOADING MODEL...';
    container.appendChild(loadingEl);

    // Create the containers for the 3-column grid
    const sidebarLeft = document.createElement('div');
    sidebarLeft.className = 'physics-sidebar left';
    
    const sidebarRight = document.createElement('div');
    sidebarRight.className = 'physics-sidebar right';

    // 1. LEFT SIDEBAR: Header Box (Restored - Top)
    const headerBox = document.createElement('div');
    headerBox.className = 'faint-text-box';
    headerBox.innerHTML = `
        <div class="doc-header">
            <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">THE STATE</span></div>
            <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">THE PEOPLE</span></div>
            <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">DEPARTMENT OF TRUTH</span></div>
            <div class="doc-divider"></div>
            <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value" style="color: #dc143c; font-weight: 700;">THE STRUCTURE OF LIES</span></div>
            <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value">██████████</span></div>
            <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">DOC██████</span></div>
            <div class="doc-divider"></div>
        </div>
    `;
    sidebarLeft.appendChild(headerBox);

    // 2. LEFT SIDEBAR: Solzhenitsyn Thesis (Bottom - Highlights Applied)
    const paraBox = document.createElement('div');
    paraBox.className = 'faint-text-box paragraph-box';
    paraBox.innerHTML = `
        <div class="text-content" style="max-height: none; overflow: visible;">
            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"violence… summons falsehood as its ally"</span><br>
                Violence quickly grows old and loses confidence in itself. To maintain a respectable face it summons falsehood as its ally. Violence cannot conceal itself without lies, and lies cannot be sustained without violence. The system does not demand daily physical force upon every shoulder — only obedience to lies and daily participation in them. All loyalty to the regime is contained in that single demand.
            </div>

            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"the lie has… led us so far away from a normal society"</span><br>
                Lies have dragged society so far from normality that one can no longer see a single pillar through the dense, gray fog. Even if they offered us the chance to learn the truth, would our free people even want to know it? Only what the radio hammers in day after day drills into the brain; everything else is conveniently forgotten.
            </div>

            <div style="margin-bottom: 0;">
                <span style="color: #dc143c; font-weight: 600;">"personal non-participation in lies"</span><br>
                The simplest and most accessible key to self-neglected liberation lies in personal non-participation in lies. Though lies conceal everything, though they embrace everything — not with any help from me. When people renounce lies it simply cuts short their existence — like an infection, they can survive only in a living organism. This opens a breach in the imaginary encirclement caused by our inaction.
            </div>
        </div>
    `;
    sidebarLeft.appendChild(paraBox);

    // 3. RIGHT SIDEBAR: Concept Narrative (Bottom - Single Box Remaining)
    const infrastructureBox = document.createElement('div');
    infrastructureBox.className = 'faint-text-box';
    infrastructureBox.innerHTML = `
        <div class="text-content">
            It's a utility pole. The red sparks on the wires are words pulled from official documents — violence, obedience, falsehood.
            <br><br>
            On their own, those words don't do much. You hear them once in a speech, once in a memo, and forget. The pole's job is to bundle and route them. Power doesn't have to write a new lie every day. It only needs the wire to stay live.
            <br><br>
            That's all the system actually asks. Stay connected. Receive the signal. Pass it on.
            <br><br>
            The full sentences still wrap around the structure, but you can't read them. They weren't meant to be read.
        </div>
    `;
    sidebarRight.appendChild(infrastructureBox);

    // 4. UI Controls (Back, Theme, Info, Zoom)
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn is-light';
    backBtn.title = 'BACK';
    backBtn.setAttribute('data-tip', 'BACK TO INDEX');
    container.appendChild(backBtn);

    const themeBtn = document.createElement('div');
    themeBtn.className = 'theme-toggle-wrapper is-light';
    themeBtn.title = 'DARK / LIGHT';
    themeBtn.setAttribute('data-tip', 'DARK MODE');
    themeBtn.innerHTML = '<div class="slider-knob"></div>';
    container.appendChild(themeBtn);

    const infoBtn = document.createElement('div');
    infoBtn.className = 'info-icon-btn is-light';
    infoBtn.title = 'BRIEFING';
    infoBtn.setAttribute('data-tip', 'BRIEFING');
    infoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    container.appendChild(infoBtn);

    const zoomContainer = document.createElement('div');
    zoomContainer.className = 'zoom-slider-container is-light';
    zoomContainer.innerHTML = `
        <button class="zoom-btn zoom-in">＋</button>
        <div class="zoom-track"><div class="zoom-thumb"></div></div>
        <button class="zoom-btn zoom-out">－</button>
    `;
    container.appendChild(zoomContainer);

    // Navigation Guide (Relocated to Column 1 Bottom)
    const guideText = document.createElement('div');
    guideText.className = 'overlay-text-guide is-light';
    armGuideFade(container);
    guideText.innerHTML = 'SCROLL TO ZOOM<br>CLICK & MOVE TO ROTATE';
    container.appendChild(guideText);

    // Create the Layout Inspector (Visual Markers)
    const inspector = document.createElement('div');
    inspector.className = 'layout-inspector is-hidden';
    inspector.innerHTML = `
        <div class="layout-marker marker-padding-top"></div><div class="layout-label label-padding-top">TOP: 3.5rem (56px)</div>
        <div class="layout-marker marker-padding-bottom"></div><div class="layout-label label-padding-bottom">BOTTOM: 3.5rem (56px)</div>
        <div class="layout-marker marker-sidebar-l"></div><div class="layout-label label-sidebar-l">SB_LEFT: 2 COL SPAN</div>
        <div class="layout-marker marker-sidebar-r"></div><div class="layout-label label-sidebar-r">SB_RIGHT: 2 COL SPAN</div>
        <div class="layout-marker marker-padding-l"></div><div class="layout-label label-padding-l">MAR_L: 3.5rem</div>
        <div class="layout-marker marker-padding-r"></div><div class="layout-label label-padding-r">MAR_R: 3.5rem</div>
    `;
    container.appendChild(inspector);

    // Create the Grid Debug Overlay (8 Columns)
    const gridOverlay = document.createElement('div');
    gridOverlay.className = 'grid-debug-overlay is-hidden';
    for (let i = 0; i < 8; i++) {
        const col = document.createElement('div');
        col.className = 'grid-debug-column';
        gridOverlay.appendChild(col);
    }
    container.appendChild(gridOverlay);

    // Create the Grid Toggle Button (kept for designer use; hidden by default)
    const gridToggleBtn = document.createElement('button');
    gridToggleBtn.className = 'grid-toggle-btn is-hidden';
    gridToggleBtn.textContent = 'TOGGLE_GRID_GUIDE';
    // 5. Physics Subpage Interactive Logic
    infoBtn.onclick = () => {
        container.classList.toggle('info-active');
        infoBtn.classList.toggle('active');
    };
    gridToggleBtn.onclick = () => {
        gridOverlay.classList.toggle('is-hidden');
        inspector.classList.toggle('is-hidden');
    };
    container.appendChild(gridToggleBtn);

    // Assemble the grid
    container.appendChild(sidebarLeft);
    // The 3D canvas and model will live in the background/behind the grid
    container.appendChild(sidebarRight);

    document.body.appendChild(container);

    requestAnimationFrame(() => {
        container.classList.add('is-visible');
    });

    // Initialize Three.js scene
    let animFrameId;
    let cleanupFns = [];
    let isLightMode = true;

    loadThreeModules().then(({ THREE, GLTFLoader, EffectComposer, RenderPass, UnrealBloomPass }) => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf4f4f4);
        // scene.fog removed to keep brightness strictly uniform regardless of camera distance
        // scene.fog = new THREE.FogExp2(0x0a0a0a, 0.003); 

        const w = window.innerWidth, h = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(26, w / h, 0.1, 5000);

        // Finalized horizontal perspective shift
        let 카메라_오프셋_비율 = 0.00;
        camera.setViewOffset(w, h, w * 카메라_오프셋_비율, 0, w, h);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        container.insertBefore(renderer.domElement, container.firstChild);

        // Post-processing: Bloom
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.4, 0.4, 0.85);
        composer.addPass(bloomPass);

        // Lighting
        const ambL = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambL);
        const dl1 = new THREE.DirectionalLight(0xffffff, 1.2);
        dl1.position.set(3, 8, 5); scene.add(dl1);
        const pl = new THREE.PointLight(0xdc143c, 0.4, 500);
        pl.position.set(0, -50, 0); scene.add(pl);
        const dl2 = new THREE.DirectionalLight(0x4466aa, 0.8);
        dl2.position.set(-5, 2, -8); scene.add(dl2);

        // Theme Toggling Logic
        themeBtn.onclick = () => {
            isLightMode = !isLightMode;

            // Toggle CSS classes to invert UI parts
            themeBtn.classList.toggle('is-light', isLightMode);
            backBtn.classList.toggle('is-light', isLightMode);
            infoBtn.classList.toggle('is-light', isLightMode);
            zoomContainer.classList.toggle('is-light', isLightMode);
            guideText.classList.toggle('is-light', isLightMode);
            container.classList.toggle('is-dark', !isLightMode);


            // Update Scene environment
            const bgColor = isLightMode ? 0xf4f4f4 : 0x0a0a0a;
            scene.background.setHex(bgColor);
            // scene.fog.color.setHex(bgColor);
            // scene.fog.density = isLightMode ? 0.001 : 0.003; // Light fog is usually finer

            // Update bloom and lighting
            bloomPass.strength = isLightMode ? 0.4 : 0.65;
            ambL.color.setHex(isLightMode ? 0xffffff : 0x333333);
            ambL.intensity = isLightMode ? 0.9 : 0.4;
            dl2.intensity = isLightMode ? 0.8 : 0.4;

            // Re-configure part materials dynamically
            parts.structural.forEach(child => {
                if (child.material && child.material.uniforms) {
                    // Soften the black ink to a charcoal gray (0x333333) in light mode
                    child.material.uniforms.uBaseColor.value.setHex(isLightMode ? 0x333333 : 0xffffff);
                }
            });

            parts.cables.forEach(c => {
                const mesh = c.mesh;
                const ghost = c.ghost;
                if (isLightMode) {
                    mesh.material.color.setHex(0x111111);
                    mesh.material.emissive.setHex(0x000000);
                    mesh.material.opacity = 0.28; // Reduced from 0.4
                    mesh.material.emissiveIntensity = 0;
                    mesh.material.blending = THREE.MultiplyBlending;

                    // Enable Ghost Blur in Light Mode
                    if (ghost) {
                        ghost.visible = true;
                        ghost.material.uniforms.uColor.value.setHex(0x222222);
                        ghost.material.uniforms.uOpacity.value = 0.08; // Reduced from 0.12
                    }
                } else {
                    mesh.material.color.setHex(0xff1111);
                    mesh.material.emissive.setHex(0xcc0000);
                    mesh.material.opacity = 0.7;
                    mesh.material.emissiveIntensity = 0.6;
                    mesh.material.blending = THREE.NormalBlending;

                    // Disable Ghost Blur in Dark Mode
                    if (ghost) ghost.visible = false;
                }
                mesh.material.needsUpdate = true;
            });

            // Particles contrast
            if (typeof sigMat !== 'undefined') {
                sigMat.color.setHex(isLightMode ? 0xff0000 : 0xff1111);
            }
        };

        // Generate per-part textures (Optimize Memory: Create once, share everywhere)
        const partTextures = {};
        for (const [partName, cfg] of Object.entries(PART_CONFIG)) {
            const chunks = cfg.textIdx.map(i => TEXT_CHUNKS[i]);
            const canvas = generatePartTexture(chunks, cfg.fontSize, cfg.color, cfg.keyword);
            const tex = new THREE.CanvasTexture(canvas);
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
            tex.minFilter = THREE.LinearMipmapLinearFilter;
            tex.magFilter = THREE.LinearFilter; // Smoothing for close-ups
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
            partTextures[partName] = tex;
        }

        // Camera orbit
        let pivotPoint = new THREE.Vector3(), maxRadius = Infinity;
        let spherical = { radius: 300, theta: 0, phi: Math.PI * 0.58 };
        let isDragging = false, lastMouse = { x: 0, y: 0 };

        function updateCam() {
            const { radius: r, theta: t, phi: p } = spherical;
            camera.position.set(pivotPoint.x + r * Math.sin(p) * Math.sin(t), pivotPoint.y + r * Math.cos(p), pivotPoint.z + r * Math.sin(p) * Math.cos(t));
            camera.lookAt(pivotPoint);
        }

        // --- Zoom Slider Logic ---
        function syncZoomSlider() {
            if (maxRadius === Infinity || !zoomContainer) return;
            const thumb = zoomContainer.querySelector('.zoom-thumb');
            if (thumb) {
                const currentMax = container.classList.contains('info-active') ? 1200 : 800;
                const range = Math.max(0.1, currentMax - 5);
                // Invert mapping so that thumb at top (0%) means zoomed in (radius 5)
                const p = Math.max(0, Math.min(1, (spherical.radius - 5) / range));
                thumb.style.top = `${p * 100}%`;
            }
        }

        const zInBtn = zoomContainer.querySelector('.zoom-in');
        const zOutBtn = zoomContainer.querySelector('.zoom-out');
        const zTrack = zoomContainer.querySelector('.zoom-track');
        const zThumb = zoomContainer.querySelector('.zoom-thumb');

        let isDraggingZoom = false;
        if (zInBtn) zInBtn.onclick = () => { spherical.radius = Math.max(5, spherical.radius / 1.3); updateCam(); syncZoomSlider(); };
        if (zOutBtn) zOutBtn.onclick = () => { 
            const currentMax = container.classList.contains('info-active') ? 1200 : 800;
            spherical.radius = Math.min(currentMax, spherical.radius * 1.3); 
            updateCam(); syncZoomSlider(); 
        };

        // --- Info Button Logic: Transition Back to Home Angle & Pivot ---
        const HOME_THETA = Math.PI * -0.8;
        const HOME_PHI = 1.12;
        const HOME_PIVOT = new THREE.Vector3();
        let targetTheta = HOME_THETA, targetPhi = HOME_PHI, targetRadius = 593;
        let targetPivot = new THREE.Vector3();
        let isTransitioning = false;

        infoBtn.onclick = () => {
            const isInfoActive = !container.classList.contains('info-active');
            container.classList.toggle('info-active', isInfoActive);
            infoBtn.classList.toggle('active', isInfoActive);
            
            isTransitioning = true;
            targetTheta = HOME_THETA;
            targetPhi = HOME_PHI;
            targetPivot.copy(HOME_PIVOT); // Restore the panning center
            
            if (isInfoActive) {
                targetRadius = 1200;
                maxRadius = 1200;
            } else {
                targetRadius = 593;
                maxRadius = 800;
            }
        };

        if (zThumb) {
            zThumb.onmousedown = (e) => { e.preventDefault(); e.stopPropagation(); isDraggingZoom = true; };
        }

        function onZoomMM(e) {
            if (!isDraggingZoom || !zTrack || container.classList.contains('info-active')) return;
            e.stopPropagation();
            const rect = zTrack.getBoundingClientRect();
            let p = (e.clientY - rect.top) / rect.height;
            p = Math.max(0, Math.min(1, p));
            spherical.radius = 5 + p * (maxRadius - 5);
            updateCam();
            syncZoomSlider();
        }
        function onZoomMU() { isDraggingZoom = false; }

        window.addEventListener('mousemove', onZoomMM);
        window.addEventListener('mouseup', onZoomMU);
        cleanupFns.push(() => {
            window.removeEventListener('mousemove', onZoomMM);
            window.removeEventListener('mouseup', onZoomMU);
        });

        // Part registry
        const parts = { cables: [], structural: [] };
        const allInteractable = [];
        let hoveredPart = null;
        const raycaster = new THREE.Raycaster();
        const mouseNDC = new THREE.Vector2(-999, -999);

        // Cable material: RED GLOW
        const cableMat = new THREE.MeshPhysicalMaterial({
            color: 0xff1111,
            emissive: 0xcc0000,
            emissiveIntensity: 0.6,
            transparent: true,
            opacity: 0.7,
            roughness: 1.0,
            metalness: 0.0,
            side: THREE.DoubleSide,
            depthWrite: false,
            depthTest: true,
            transparent: true
        });

        // Load model
        const loader = new GLTFLoader();
        loader.load('models/Pole.glb', (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Classify each mesh and assign appropriate material
            model.traverse((child) => {
                if (!child.isMesh) return;
                const n = child.name.toLowerCase();

                if (n.includes('cable')) {
                    child.material = cableMat.clone();
                    const pa = child.geometry.getAttribute('position');
                    const orig = new Float32Array(pa.array.length); orig.set(pa.array);

                    // --- CABLE OCCLUSION BLUR (Ghost Mesh) ---
                    // This pass only renders when behind structural objects, creating a "smudge" effect
                    const ghost = new THREE.Mesh(child.geometry, new THREE.ShaderMaterial({
                        uniforms: {
                            uColor: { value: new THREE.Color(0x333333) },
                            uOpacity: { value: 0.12 }
                        },
                        vertexShader: `
                            void main() {
                                // Fatten the wire slightly to simulate a blurry/smudgy spatial depth
                                vec3 pos = position + normal * 0.12; 
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform vec3 uColor;
                            uniform float uOpacity;
                            void main() {
                                gl_FragColor = vec4(uColor, uOpacity);
                            }
                        `,
                        transparent: true,
                        depthTest: true,
                        depthWrite: false,
                        depthFunc: THREE.GreaterDepth, // RENDER ONLY IF BEHIND
                        side: THREE.DoubleSide
                    }));
                    child.parent.add(ghost);

                    parts.cables.push({ mesh: child, ghost: ghost, originalPositions: orig });
                    allInteractable.push(child);
                } else {
                    // Determine part type broadly so things stop falling back to hardware inappropriately
                    let partType = 'hardware'; // default
                    if (n.includes('equipment') || n.includes('transformer') || n.includes('box')) partType = 'equipment';
                    else if (n.includes('insulator')) partType = 'insulators';
                    else if (n.includes('crossbar') || n.includes('arm')) partType = 'crossbar';
                    else if (n.includes('pole') || n.includes('body') || n.includes('cylinder') || n.includes('base')) partType = 'pole_body';
                    else if (n.includes('connector') || n.includes('joint') || n.includes('link')) partType = 'connectors';

                    const cfg = PART_CONFIG[partType] || PART_CONFIG.hardware;
                    const canvas = partTextures[partType] || partTextures.hardware;
                    const mat = createPartShaderMaterial(THREE, canvas, cfg.uvScale);
                    child.material = mat;
                    parts.structural.push(child);
                    allInteractable.push(child);
                }
            });

            // Init permanent glowing signals on cables
            parts.cables.forEach(c => {
                const numSigs = 4 + Math.floor(Math.random() * 4); // 4~7 signals per cable for high density
                for (let i = 0; i < numSigs; i++) {
                    spawnSig(c, Math.random());
                }
            });

            pivotPoint.set(0, box.min.y + size.y * 0.52, 0);
            HOME_PIVOT.copy(pivotPoint);
            targetPivot.copy(pivotPoint);

            pl.position.set(0, box.min.y - 20, 0);
            const maxDim = Math.max(size.x, size.y, size.z);
            spherical.radius = 593; maxRadius = 800;
            spherical.phi = 1.12; spherical.theta = Math.PI * -0.8;
            updateCam();
            syncZoomSlider();

            // Finalized design setup
            model.position.x = 8.0;
            model.position.y = -64.0; 

            parts.cables.forEach(c => {
                const mesh = c.mesh;
                const ghost = c.ghost;
                if (isLightMode) {
                    mesh.material.color.setHex(0x111111);
                    mesh.material.emissive.setHex(0x000000);
                    mesh.material.opacity = 0.28; // Slightly more transparent (previously 0.4)
                    mesh.material.emissiveIntensity = 0;
                    mesh.material.blending = THREE.MultiplyBlending;
                    if (ghost) {
                        ghost.visible = true;
                        ghost.material.uniforms.uColor.value.setHex(0x222222);
                        ghost.material.uniforms.uOpacity.value = 0.08;
                    }
                } else {
                    mesh.material.color.setHex(0xff1111);
                    mesh.material.emissive.setHex(0xcc0000);
                    mesh.material.opacity = 0.7;
                    mesh.material.emissiveIntensity = 0.6;
                    mesh.material.blending = THREE.NormalBlending;
                    if (ghost) ghost.visible = false;
                }
                mesh.material.needsUpdate = true;
            });

            parts.structural.forEach(mesh => {
                if (mesh.material.uniforms) {
                    mesh.material.uniforms.uBaseColor.value.setHex(isLightMode ? 0x333333 : 0xffffff);
                }
            });

            window._mainModel = model;
            scene.add(model);
            loadingEl.remove();
        },
            (prog) => { if (prog.total > 0) loadingEl.textContent = `LOADING MODEL... ${Math.round(prog.loaded / prog.total * 100)}%`; },
            (err) => { console.error(err); loadingEl.textContent = 'ERROR LOADING MODEL'; });

        // Cable hover wave
        function updateCableWaves(time) {
            parts.cables.forEach((cd, idx) => {
                const isH = hoveredPart === cd.mesh;
                if (!isH && !cd._wasH) return;
                const pa = cd.mesh.geometry.getAttribute('position');
                const orig = cd.originalPositions;
                if (!pa || !orig) return;
                if (isH) {
                    cd._wasH = true;
                    const a = 0.6, f = 0.02 + idx * 0.003, s = time * (1.5 + idx * 0.2), ph = idx * 1.7;
                    for (let i = 0; i < pa.count; i++) {
                        const ox = orig[i * 3], oy = orig[i * 3 + 1], oz = orig[i * 3 + 2];
                        const w1 = Math.sin(ox * f + s + ph) * a, w2 = Math.cos(oz * f * 0.7 + s * 0.8 + ph) * a * 0.5;
                        pa.array[i * 3] = ox + w2 * 0.3; pa.array[i * 3 + 1] = oy + w1; pa.array[i * 3 + 2] = oz + w2 * 0.3;
                    }
                    pa.needsUpdate = true;
                } else if (cd._wasH) { pa.array.set(orig); pa.needsUpdate = true; cd._wasH = false; }
            });
        }

        // Hover effects disabled per user request
        function updateHover(time) {
            // No operation - selection effects removed
        }

        // Electric signals (Permanent loop across all cables)
        const signals = [];
        const sigGeo = new THREE.SphereGeometry(0.6, 8, 8); // Larger particle base size
        const sigMat = new THREE.MeshBasicMaterial({ color: 0xff1111, transparent: false }); // High-intensity vibrant red

        function spawnSig(cd, offsetProgress = 0) {
            const pa = cd.mesh.geometry.getAttribute('position');
            if (!pa || pa.count < 2) return;

            const p = new THREE.Mesh(sigGeo, sigMat);
            cd.mesh.parent.add(p);

            const dir = Math.random() > 0.5 ? 1 : -1;
            const startIdx = dir === 1 ? 0 : pa.count - 1;

            // Speed: crosses entire cable in 40.0 to 90.0 seconds (Much slower, heavy signals)
            const spd = (1.0 / (40.0 + Math.random() * 50.0)) * pa.count;

            let vi = startIdx;
            if (offsetProgress > 0) {
                if (dir === 1) vi = offsetProgress * (pa.count - 1);
                else vi = (1.0 - offsetProgress) * (pa.count - 1);
            }

            signals.push({ mesh: p, cable: cd, vi: vi, dir: dir, spd: spd });
        }

        function updateSig(dt) {
            const time = performance.now() * 0.001;
            for (let i = 0; i < signals.length; i++) {
                const s = signals[i];
                s.vi += s.dir * s.spd * dt;
                const pa = s.cable.mesh.geometry.getAttribute('position');

                let reachedEnd = false;
                if (s.dir === 1 && s.vi >= pa.count - 1) reachedEnd = true;
                if (s.dir === -1 && s.vi <= 0) reachedEnd = true;

                if (reachedEnd) {
                    // Loop back to a random end
                    s.dir = Math.random() > 0.5 ? 1 : -1;
                    s.vi = s.dir === 1 ? 0 : pa.count - 1;
                    s.spd = (1.0 / (15.0 + Math.random() * 25.0)) * pa.count;
                }

                const idx = Math.floor(Math.max(0, Math.min(pa.count - 1, s.vi)));
                const wp = new THREE.Vector3(pa.array[idx * 3], pa.array[idx * 3 + 1], pa.array[idx * 3 + 2]);
                s.cable.mesh.localToWorld(wp);
                s.mesh.parent.worldToLocal(wp);
                s.mesh.position.copy(wp);

                // Visual beating pulse
                const pulse = 0.5 + Math.sin(time * 15.0 + i) * 0.5;
                s.mesh.scale.setScalar(1.2 + pulse * 1.8); // Larger visual pulse scale
            }
        }

        // Mouse controls
        function onMM(e) {
            if (isDragging && !container.classList.contains('info-active')) {
                const dx = e.clientX - lastMouse.x, dy = e.clientY - lastMouse.y; lastMouse.x = e.clientX; lastMouse.y = e.clientY;
                spherical.theta -= dx * 0.005; spherical.phi -= dy * 0.005; spherical.phi = Math.max(0.05, Math.min(Math.PI - 0.05, spherical.phi)); updateCam();
            }
            const r = renderer.domElement.getBoundingClientRect();
            mouseNDC.x = ((e.clientX - r.left) / r.width) * 2 - 1; mouseNDC.y = -((e.clientY - r.top) / r.height) * 2 + 1;
        }
        function onMD(e) { 
            if (e.button === 0 && !container.classList.contains('info-active')) { 
                isDragging = true; 
                isTransitioning = false; // User takes manual control
                lastMouse.x = e.clientX; 
                lastMouse.y = e.clientY; 
            } 
        }
        function onMU() { isDragging = false; }
        function onWH(e) {
            if (container.classList.contains('info-active')) return;
            isTransitioning = false; // User takes manual control
            e.preventDefault(); const dir = e.deltaY > 0 ? 1 : -1;
            const r = renderer.domElement.getBoundingClientRect();
            const n = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
            const zr = new THREE.Raycaster(); zr.setFromCamera(n, camera); const rd = zr.ray.direction.clone();
            if (dir > 0) spherical.radius *= 1.1; else { spherical.radius /= 1.1; pivotPoint.add(rd.multiplyScalar(spherical.radius * 0.02)); }
            spherical.radius = Math.max(5, Math.min(maxRadius, spherical.radius)); updateCam(); syncZoomSlider();
        }
        renderer.domElement.addEventListener('mousedown', onMD);
        window.addEventListener('mousemove', onMM);
        window.addEventListener('mouseup', onMU);
        renderer.domElement.addEventListener('wheel', onWH, { passive: false });
        cleanupFns.push(() => {
            renderer.domElement.removeEventListener('mousedown', onMD); window.removeEventListener('mousemove', onMM);
            window.removeEventListener('mouseup', onMU); renderer.domElement.removeEventListener('wheel', onWH);
        });

        function onResize() {
            const w = window.innerWidth, h = window.innerHeight;
            camera.aspect = w / h;
            camera.setViewOffset(w, h, w * 카메라_오프셋_비율, 0, w, h);
            camera.updateProjectionMatrix();
            renderer.setSize(w, h); composer.setSize(w, h);
        }
        window.addEventListener('resize', onResize);
        cleanupFns.push(() => window.removeEventListener('resize', onResize));

        // Render loop
        let lastTime = performance.now();
        function animate() {
            animFrameId = requestAnimationFrame(animate);
            const now = performance.now(), dt = Math.min((now - lastTime) / 1000, 0.05); lastTime = now;
            const time = now * 0.001;

            if (isTransitioning) {
                // Smoothly glide camera back to home/landing values (Lerp factor 0.1 for high fidelity)
                spherical.theta += (targetTheta - spherical.theta) * 0.1;
                spherical.phi += (targetPhi - spherical.phi) * 0.1;
                spherical.radius += (targetRadius - spherical.radius) * 0.1;
                
                // Also restore the panning center (Pivot Point)
                pivotPoint.x += (targetPivot.x - pivotPoint.x) * 0.1;
                pivotPoint.y += (targetPivot.y - pivotPoint.y) * 0.1;
                pivotPoint.z += (targetPivot.z - pivotPoint.z) * 0.1;

                if (Math.abs(targetTheta - spherical.theta) < 0.01 &&
                    Math.abs(targetPhi - spherical.phi) < 0.01 &&
                    Math.abs(targetRadius - spherical.radius) < 0.5 &&
                    pivotPoint.distanceTo(targetPivot) < 0.1) {
                    isTransitioning = false;
                }
                updateCam();
                syncZoomSlider();
            }

            // Update shader time on structural parts
            parts.structural.forEach(m => {
                if (m.material.uniforms) {
                    m.material.uniforms.uTime.value = time;
                    if (window._mainModel) m.material.uniforms.uModelAngle.value = window._mainModel.rotation.y;
                }
            });
            pl.intensity = 0.3 + Math.sin(time * 0.5) * 0.15;

            // Slow continuous rotation when user isn't holding mouse
            if (window._mainModel && !isDragging) {
                window._mainModel.rotation.y -= dt * 0.062; 
                
                // Dynamic Perspective Shift:
                // Periodically oscillate between default view (phi=1.12) and low-angle view (phi=2.20)
                // Tilt speed is set slightly faster than object rotation (1.12x)
                const tiltIntensity = 0.54; // (2.20 - 1.12) / 2
                const midPhi = 1.66;        // (1.12 + 2.20) / 2
                spherical.phi = midPhi - Math.cos(window._mainModel.rotation.y * 1.12) * tiltIntensity;
                updateCam();
            }

            updateCableWaves(time);
            if (!isDragging) updateHover(time);
            updateSig(dt);

            renderer.domElement.style.cursor = isDragging ? 'grabbing' : 'grab';
            composer.render(); // Render through bloom
        }
        animate();

        backBtn.onclick = () => {
            container.style.opacity = '0'; cancelAnimationFrame(animFrameId);
            cleanupFns.forEach(fn => fn());
            signals.forEach(s => { if (s.mesh.parent) s.mesh.parent.remove(s.mesh); s.mesh.geometry.dispose(); s.mesh.material.dispose(); });
            renderer.dispose(); setTimeout(() => container.remove(), 500);
        };
    });
}

/* ─── CRT TV WALL SUBPAGE: THEME 02 — IDEOLOGY AS JUSTIFICATION ─── */

function openIdeologySubpage(clickedCell) {
    const container = document.createElement('div');
    container.id = 'ideology-subpage';
    container.className = 'is-light'; // default to light
    container.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 2000; opacity: 0; transition: opacity 0.6s ease; overflow: hidden;
        display: grid; grid-template-columns: repeat(8, 1fr); gap: 2.5rem; padding: 0 3.5rem;
    `;

    // 4. UI Controls (Back, Theme, Info, Zoom)
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn is-light';
    backBtn.title = 'BACK';
    backBtn.setAttribute('data-tip', 'BACK TO INDEX');
    container.appendChild(backBtn);

    const themeBtn = document.createElement('div');
    themeBtn.className = 'theme-toggle-wrapper is-light';
    themeBtn.title = 'DARK / LIGHT';
    themeBtn.setAttribute('data-tip', 'DARK MODE');
    themeBtn.innerHTML = '<div class="slider-knob"></div>';
    container.appendChild(themeBtn);

    const infoBtn = document.createElement('div');
    infoBtn.className = 'info-icon-btn is-light';
    infoBtn.title = 'BRIEFING';
    infoBtn.setAttribute('data-tip', 'BRIEFING');
    infoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    container.appendChild(infoBtn);

    const zoomContainer = document.createElement('div');
    zoomContainer.className = 'zoom-slider-container is-light';
    zoomContainer.innerHTML = `
        <button class="zoom-btn zoom-in">＋</button>
        <div class="zoom-track"><div class="zoom-thumb"></div></div>
        <button class="zoom-btn zoom-out">－</button>
    `;
    container.appendChild(zoomContainer);

    // Navigation Guide
    const guideText = document.createElement('div');
    guideText.className = 'overlay-text-guide is-light';
    armGuideFade(container);
    guideText.innerHTML = 'SCROLL TO ZOOM<br>CLICK & MOVE TO ROTATE';
    container.appendChild(guideText);

    // Create the containers for the 3-column grid
    const sidebarLeft = document.createElement('div');
    sidebarLeft.className = 'physics-sidebar left';
    
    const sidebarRight = document.createElement('div');
    sidebarRight.className = 'physics-sidebar right';

    // 1. LEFT SIDEBAR: Header Box (Top)
    const headerBox = document.createElement('div');
    headerBox.className = 'faint-text-box';
    headerBox.innerHTML = `
        <div class="doc-header">
            <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">THE STATE</span></div>
            <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">DEPARTMENT OF TRUTH</span></div>
            <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">CITIZENS</span></div>
            <div class="doc-divider"></div>
            <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value" style="color: #dc143c; font-weight: 700;">JUSTIFICATION PROTOCOLS</span></div>
            <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value">██████████</span></div>
            <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">DOC██████</span></div>
            <div class="doc-divider"></div>
        </div>
    `;
    sidebarLeft.appendChild(headerBox);

    // 2. LEFT SIDEBAR: Quote
    const paraBox = document.createElement('div');
    paraBox.className = 'faint-text-box paragraph-box';
    paraBox.innerHTML = `
        <div class="text-content" style="max-height: none; overflow: visible;">
            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"At what exact point, then, is the line crossed?"</span><br>
                To do evil a human being must first of all believe that what he's doing is good, or else that it's a well-considered act in conformity with natural law. Fortunately, it is in the nature of the human being to seek a justification for his actions.
            </div>
            
            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"Macbeth's self-justifications were feeble"</span><br>
                Ideology—that is what gives evildoing its long-sought justification and gives the evildoer the necessary steadfastness and determination. That is the social theory which helps to make his acts seem good instead of bad in his own and others' eyes.
            </div>

            <div style="margin-bottom: 0;">
                <span style="color: #dc143c; font-weight: 600;">"scale measured not in dozens, but in millions"</span><br>
                Thanks to ideology, the twentieth century was fated to experience evildoing on a scale calculated in the millions. This cannot be denied, nor passed over, nor suppressed. How, then, do we dare insist that evildoers do not exist? And who was it that destroyed these millions? Without evildoers there would have been no Archipelago.
            </div>
        </div>
    `;
    sidebarLeft.appendChild(paraBox);

    // 3. RIGHT SIDEBAR: Narrative
    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'faint-text-box';
    narrativeBox.innerHTML = `
        <div class="text-content">
            Six panels playing six different official texts at once. A sermon, a manifesto, a verdict, a press release.
            <br><br>
            The red words are the load-bearing ones: IDEOLOGY, EVIL, CORPSES, MILLIONS. They don't sit still. Each panel leaves a holographic trail because the argument is never quite finished. Justification has to keep moving.
            <br><br>
            A villain stops at a dozen corpses. You don't need an idea to murder twelve people. You need an idea to murder a million. Ideology turns the act from a private trespass into a duty.
            <br><br>
            The screens don't look at you. They read at you, and they don't stop.
        </div>
    `;
    sidebarRight.appendChild(narrativeBox);

    container.appendChild(sidebarLeft);
    container.appendChild(sidebarRight);

    document.body.appendChild(container);
    requestAnimationFrame(() => { container.style.opacity = '1'; });

    // ── Text lines for CRT screens ──
    const LINES = [
        "SHAKESPEARES VILLAINS STOPPED",
        "AT A DOZEN CORPSES BECAUSE",
        "THEY HAD NO IDEOLOGY.",
        "",
        "MACBETHS SELF-JUSTIFICATIONS",
        "WERE FEEBLE AND HIS CONSCIENCE",
        "DEVOURED HIM.",
        "",
        "BUT IDEOLOGY CHANGES EVERYTHING.",
        "",
        "IT PROVIDES THE SOCIAL THEORY",
        "THAT ALLOWS EVIL ACTS TO APPEAR",
        "GOOD IN ONES OWN EYES AND IN",
        "THE EYES OF OTHERS.",
        "",
        "THE INQUISITION INVOKED CHRISTIANITY.",
        "COLONIZERS INVOKED CIVILIZATION.",
        "NAZIS INVOKED RACE.",
        "JACOBINS INVOKED EQUALITY.",
        "",
        "EACH BELIEVED THEY WERE DOING",
        "WHAT WAS RIGHT AND NECESSARY.",
        "",
        "THIS IS WHY THE TWENTIETH CENTURY",
        "EXPERIENCED EVIL ON A SCALE",
        "MEASURED NOT IN DOZENS",
        "BUT IN MILLIONS.",
        "",
        "THE IDEOLOGICAL EVILDOER CROSSES",
        "THE PRECISE LINE THAT SHAKESPEARES",
        "VILLAINS COULD NOT",
        "",
        "AND HIS EYES REMAIN",
        "DRY AND CLEAR.",
        "",
        "ONCE CROSSED THE PERSON LEAVES",
        "HUMANITY BEHIND PERHAPS WITHOUT",
        "THE POSSIBILITY OF RETURN.",
        "",
        "",
    ];

    const KEYWORDS = new Set([
        'IDEOLOGY', 'EVIL', 'CORPSES', 'CONSCIENCE', 'DEVOURED',
        'INQUISITION', 'NAZIS', 'COLONIZERS', 'JACOBINS',
        'MILLIONS', 'EVILDOER', 'HUMANITY', 'VILLAINS'
    ]);

    (async () => {
        const THREE = await import('three');

        const w = window.innerWidth, h = window.innerHeight;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0xf4f4f4);
        container.appendChild(renderer.domElement);
        renderer.domElement.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;';

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xf4f4f4, 0.018);

        const camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 100);
        camera.position.set(0, 0, 4.0);

        // ── Generate shared text textures (tall, tiled, multiple fonts) ──
        const texW = 1024, texH = 2048;
        const fontSize = 42;
        const lineHeight = fontSize * 1.6;

        const FONTS = [
            "'JetBrains Mono', 'Courier New', monospace",
            "'Impact', sans-serif",
            "'Georgia', serif",
            "'Arial Black', sans-serif",
            "'Courier New', monospace"
        ];
        
        const textures = [];

        FONTS.forEach(fontFamily => {
            const cvs = document.createElement('canvas');
            cvs.width = texW; cvs.height = texH;
            const ctx = cvs.getContext('2d');

            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, texW, texH);
            ctx.font = '500 ' + fontSize + 'px ' + fontFamily;
            ctx.textBaseline = 'top';

            let y = 10;
            let lineIdx = 0;
            while (y < texH) {
                const line = LINES[lineIdx % LINES.length];
                const words = line.split(' ');
                let x = 12;
                words.forEach(word => {
                    const clean = word.replace(/[^A-Z]/g, '');
                    if (KEYWORDS.has(clean)) {
                        ctx.fillStyle = '#dc143c';
                        ctx.shadowColor = '#dc143c';
                        ctx.shadowBlur = 6;
                    } else {
                        ctx.fillStyle = '#d0d0d0';
                        ctx.shadowColor = 'transparent';
                        ctx.shadowBlur = 0;
                    }
                    ctx.fillText(word, x, y);
                    // Explicitly calculate word width + space width + layout safety buffer (prevents thick fonts from overlapping)
                    const spaceWidth = ctx.measureText(' ').width;
                    x += ctx.measureText(word).width + spaceWidth + 4;
                });
                y += lineHeight;
                lineIdx++;
            }

            const tex = new THREE.CanvasTexture(cvs);
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            textures.push(tex);
        });

        // ── CRT Screen Geometry (small, curved) ──
        const scrW = 0.78, scrH = 0.56;
        const scrGeo = new THREE.PlaneGeometry(scrW, scrH, 24, 24);
        // Barrel bulge
        const pos = scrGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i), y = pos.getY(i);
            const nx = x / (scrW / 2), ny = y / (scrH / 2);
            const r2 = nx * nx + ny * ny;
            pos.setZ(i, 0.035 * (1.0 - r2));
        }
        scrGeo.computeVertexNormals();

        const allMats = []; // Track all materials for mass-updates

        // ── CRT Shader (per-screen scroll offset) ──
        function makeCRTMaterial(timeOffset, speed, scale, textTexParam, isTrail, layerIdx) {
            return new THREE.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTime: { value: 0 },
                    uTimeOffset: { value: timeOffset },
                    uSpeed: { value: speed },
                    uScale: { value: scale },
                    uTextMap: { value: textTexParam },
                    uResolution: { value: new THREE.Vector2(w, h) },
                    uIsLightMode: { value: 1.0 },
                    uIsTrail: { value: isTrail ? 1.0 : 0.0 },
                    uLayerIndex: { value: layerIdx || 0.0 },
                    uCamZ: { value: 4.0 }
                },
                vertexShader: `
                    varying vec2 vUv;
                    varying vec3 vNormal, vViewDir;
                    void main() {
                        vUv = uv;
                        vNormal = normalize(normalMatrix * normal);
                        vec4 mv = modelViewMatrix * vec4(position, 1.0);
                        vViewDir = -normalize(mv.xyz);
                        gl_Position = projectionMatrix * mv;
                    }
                `,
                fragmentShader: `
                    uniform float uTime, uTimeOffset, uIsLightMode, uSpeed, uScale, uIsTrail, uLayerIndex, uCamZ;
                    uniform sampler2D uTextMap;
                    uniform vec2 uResolution;
                    varying vec2 vUv;
                    varying vec3 vNormal, vViewDir;

                    vec2 barrel(vec2 uv, float k) {
                        vec2 c = uv - 0.5;
                        return uv + c * dot(c, c) * k;
                    }

                    void main() {
                        vec2 duv = barrel(vUv, 0.2);

                        // Discard out-of-bounds (no bezel)
                        if (duv.x < 0.02 || duv.x > 0.98 || duv.y < 0.02 || duv.y > 0.98) {
                            discard;
                        }

                        // Apply random scale and speed
                        vec2 texUV = duv * uScale;
                        
                        // Center the scaled UVs horizontally
                        texUV.x += (1.0 - uScale) * 0.5;

                        // Scroll the text vertically at different speeds
                        float scroll = (uTime + uTimeOffset) * uSpeed;
                        texUV.y += scroll;

                        // Subtle chromatic aberration (reduced noise)
                        float ab = 0.0008;
                        vec3 col = vec3(
                            texture2D(uTextMap, texUV + vec2(ab, 0.0)).r,
                            texture2D(uTextMap, texUV).g,
                            texture2D(uTextMap, texUV - vec2(ab, 0.0)).b
                        );

                        // Calculate text mask
                        float textMask = max(col.r, max(col.g, col.b));
                        if(textMask < 0.1) {
                            discard;
                        }

                        // Verify redness based on the source col
                        float redness = smoothstep(0.1, 0.5, col.r - col.g);

                        // Trail exclusive logic
                        if (uIsTrail > 0.5 && (redness < 0.2 || textMask < 0.1)) {
                            // Holographic trails ONLY render the red text
                            discard;
                        }

                        // Clean scanlines
                        float sy = duv.y * 300.0;
                        float scan = sin(sy * 3.14159) * 0.5 + 0.5;
                        scan = pow(scan, 1.5) * 0.2 + 0.8;

                        // Vignette
                        vec2 vig = duv - 0.5;
                        float v = smoothstep(0.0, 0.8, 1.0 - dot(vig, vig) * 1.2);

                        // Very subtle flicker
                        float flick = 1.0 - sin((uTime + uTimeOffset * 3.7) * 4.0) * 0.008;

                        // Compose base dark CRT
                        vec3 c = col * scan * v * flick;
                        
                        if (uIsLightMode > 0.5) {
                            // Light mode: Smooth mix for red text to eliminate dark grey shadow edges
                            c = mix(vec3(0.05), vec3(0.85, 0.0, 0.1), redness) * scan * v * flick;
                        } else {
                            // Dark mode specific enhancements
                            float lum = dot(c, vec3(0.299, 0.587, 0.114));
                            c += c * lum * 0.3;
                            // Slight green/blue CRT tint
                            c *= vec3(0.92, 1.0, 0.95);

                            // Fresnel edge glow
                            float f = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 3.0);
                            c += vec3(0.04, 0.05, 0.06) * f;
                            
                            // Screen glow emission
                            c += col * 0.2;
                        }

                        // In Light mode, tighten alpha cutoff to remove the shadow blur entirely
                        float alpha = uIsLightMode > 0.5 ? smoothstep(0.4, 0.7, textMask) : smoothstep(0.1, 0.5, textMask);

                        // Apply volumetric holographic trail
                        if (uIsTrail > 0.5) {
                            // Enforce distinct red glow for trail
                            c = vec3(1.0, 0.0, 0.1) * scan * flick; 
                            if (uIsLightMode > 0.5) {
                                // Slightly darker in light mode so it doesn't wash out
                                c = vec3(0.85, 0.0, 0.1) * scan * flick; 
                            }
                            
                            // Fade opacity based on depth (layer index)
                            float layerFade = 1.0 - (uLayerIndex / 35.0);
                            
                            // Increase opacity as camera zooms OUT (camZ goes to 8.0)
                            float zoomVis = smoothstep(2.5, 7.5, uCamZ);
                            
                            alpha = textMask * layerFade * zoomVis * 0.45;
                        }

                        gl_FragColor = vec4(c, alpha);
                    }
                `
            });
        }

        // ── Create Dense Curved Wall of Screens (zero-gap) ──
        const COLS = 14, ROWS = 7;
        const wallRadius = 5;
        // Arc span calculated so screens touch edge-to-edge
        const screenAngle = scrW / wallRadius; // angular width of one screen
        const arcSpan = (COLS - 1) * screenAngle;
        const gapY = 0; // vertical: flush
        const totalH = ROWS * (scrH + gapY) - gapY;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const timeOffset = Math.random() * 1000 + (r * COLS + c) * 7;
                const speed = 0.015 + Math.random() * 0.035; // Random speed (0.015 ~ 0.05)
                const scale = 0.4 + Math.random() * 0.6; // Random scale (0.4 ~ 1.0)
                const randomTex = textures[Math.floor(Math.random() * textures.length)];
                
                const group = new THREE.Group();

                // Main front mesh
                const mainMat = makeCRTMaterial(timeOffset, speed, scale, randomTex, false, 0);
                const mainMesh = new THREE.Mesh(scrGeo, mainMat);
                group.add(mainMesh);
                allMats.push(mainMat);

                // Holographic trails pushing backwards along local -Z
                const NUM_TRAILS = 32;
                const TRAIL_Z_GAP = 0.08;
                for(let l = 1; l <= NUM_TRAILS; l++) {
                    const trailMat = makeCRTMaterial(timeOffset, speed, scale, randomTex, true, l);
                    const trailMesh = new THREE.Mesh(scrGeo, trailMat);
                    trailMesh.position.z -= l * TRAIL_Z_GAP;
                    group.add(trailMesh);
                    allMats.push(trailMat);
                }

                // Angle along the arc (centered on -Z)
                const t = c / (COLS - 1);
                const angle = (t - 0.5) * arcSpan;

                // Concave wall position (curves toward viewer)
                const px = Math.sin(angle) * wallRadius;
                const pz = -(Math.cos(angle) * wallRadius - wallRadius + 1.5);
                const py = (ROWS - 1 - r) * (scrH + gapY) - totalH / 2 + scrH / 2;

                group.position.set(px, py, pz);
                // Face outward (toward viewer)
                group.rotation.y = -angle;

                scene.add(group);
            }
        }

        // ── Ambient light ──
        scene.add(new THREE.AmbientLight(0x222222, 1));

        // ── Mouse parallax ──
        let mx = 0, my = 0;
        function onMM(e) {
            mx = (e.clientX / window.innerWidth - 0.5) * 2;
            my = (e.clientY / window.innerHeight - 0.5) * 2;
        }
        window.addEventListener('mousemove', onMM);

        // ── Mouse wheel zoom ──
        let camZ = 4.0;
        function onWheel(e) {
            e.preventDefault();
            if (container.classList.contains('info-active')) return; // Disable zoom while reading info
            camZ += e.deltaY * 0.003;
            camZ = Math.max(0.5, Math.min(8.0, camZ));
        }
        container.addEventListener('wheel', onWheel, { passive: false });

        // ── Resize ──
        function onRS() {
            const nw = window.innerWidth, nh = window.innerHeight;
            camera.aspect = nw / nh;
            camera.updateProjectionMatrix();
            renderer.setSize(nw, nh);
            allMats.forEach(m => m.uniforms.uResolution.value.set(nw, nh));
        }
        window.addEventListener('resize', onRS);

        // ── UI Interactive Logic ──
        let isLightMode = true;

        themeBtn.onclick = () => {
            isLightMode = !isLightMode;

            // Update UI classes
            themeBtn.classList.toggle('is-light', isLightMode);
            backBtn.classList.toggle('is-light', isLightMode);
            infoBtn.classList.toggle('is-light', isLightMode);
            zoomContainer.classList.toggle('is-light', isLightMode);
            guideText.classList.toggle('is-light', isLightMode);
            container.classList.toggle('is-dark', !isLightMode);
            container.classList.toggle('is-light', isLightMode);

            // Update Scene environment
            renderer.setClearColor(isLightMode ? 0xf4f4f4 : 0x050505);
            scene.fog.color.setHex(isLightMode ? 0xf4f4f4 : 0x050505);

            // Update CRT Shaders
            allMats.forEach(m => {
                m.uniforms.uIsLightMode.value = isLightMode ? 1.0 : 0.0;
            });
        };

        infoBtn.onclick = () => {
            const isInfoActive = !container.classList.contains('info-active');
            infoBtn.classList.toggle('active', isInfoActive);
            container.classList.toggle('info-active', isInfoActive);
            
            if (isInfoActive) {
                // Shrink object: Zoom out aggressively to reveal long holograms and make room for text
                camZ = 12.0; 
            } else {
                camZ = 4.0;
            }
            syncZoomSlider();
        };

        // UI Zoom Logic
        function syncZoomSlider() {
            const thumb = zoomContainer.querySelector('.zoom-thumb');
            if (thumb) {
                // Map camZ 0.5 (top) to 8.0 (bottom)
                const range = 8.0 - 0.5;
                const p = Math.max(0, Math.min(1, (camZ - 0.5) / range));
                thumb.style.top = `${p * 100}%`;
            }
        }
        
        container.addEventListener('wheel', (e) => {
            syncZoomSlider();
        }, { passive: true });

        const zInBtn = zoomContainer.querySelector('.zoom-in');
        const zOutBtn = zoomContainer.querySelector('.zoom-out');
        if (zInBtn) zInBtn.onclick = () => { camZ = Math.max(0.5, camZ - 1.5); syncZoomSlider(); };
        if (zOutBtn) zOutBtn.onclick = () => { camZ = Math.min(8.0, camZ + 1.5); syncZoomSlider(); };

        // ── Animation ──
        let animId;
        let camRotX = 0, camRotY = 0;

        function animate() {
            animId = requestAnimationFrame(animate);
            const now = performance.now();
            const t = now * 0.001;

            allMats.forEach(m => {
                m.uniforms.uTime.value = t;
                m.uniforms.uCamZ.value = camera.position.z;
            });

            // Smooth camera parallax (subtle orbit)
            const targetRotY = mx * 0.3;
            const targetRotX = -my * 0.15;
            camRotY += (targetRotY - camRotY) * 0.04;
            camRotX += (targetRotX - camRotX) * 0.04;

            camera.position.x = camRotY * 1.5;
            camera.position.y = camRotX * 0.8;
            camera.position.z += (camZ - camera.position.z) * 0.08; // smooth zoom
            camera.lookAt(0, 0, -1);

            renderer.render(scene, camera);
        }
        animate();

        // ── Cleanup ──
        backBtn.onclick = () => {
            container.style.opacity = '0';
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', onMM);
            window.removeEventListener('resize', onRS);
            container.removeEventListener('wheel', onWheel);
            allMats.forEach(m => m.dispose());
            scrGeo.dispose();
            textures.forEach(t => t.dispose());
            renderer.dispose();
            setTimeout(() => container.remove(), 600);
        };
    })();
}

/* ─── 2D PHYSICS SUBPAGE: THEME 03 — THE GULAG AND IMPRISONMENT ─── */

function openPrisonSubpage(clickedCell) {
    const container = document.createElement('div');
    container.id = 'prison-subpage';
    container.className = 'is-light'; // default to light
    container.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 2000; opacity: 0; transition: opacity 0.6s ease; overflow: hidden;
        display: grid; grid-template-columns: repeat(8, 1fr); gap: 2.5rem; padding: 0 3.5rem;
    `;

    // UI Controls
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn is-light';
    backBtn.title = 'BACK';
    backBtn.setAttribute('data-tip', 'BACK TO INDEX');
    container.appendChild(backBtn);

    const themeBtn = document.createElement('div');
    themeBtn.className = 'theme-toggle-wrapper is-light';
    themeBtn.title = 'DARK / LIGHT';
    themeBtn.setAttribute('data-tip', 'DARK MODE');
    themeBtn.innerHTML = '<div class="slider-knob"></div>';
    container.appendChild(themeBtn);

    const infoBtn = document.createElement('div');
    infoBtn.className = 'info-icon-btn is-light';
    infoBtn.title = 'BRIEFING';
    infoBtn.setAttribute('data-tip', 'BRIEFING');
    infoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    container.appendChild(infoBtn);

    const guideText = document.createElement('div');
    guideText.className = 'overlay-text-guide is-light';
    armGuideFade(container);
    guideText.innerHTML = 'DRAG MOUSE OUTWARD<br>TO EXTRACT CORE DATA';
    container.appendChild(guideText);

    // Zoom Slider UI
    const zoomContainer = document.createElement('div');
    zoomContainer.className = 'zoom-slider-container is-light';
    zoomContainer.innerHTML = `
        <button class="zoom-btn zoom-in">＋</button>
        <div class="zoom-track"><div class="zoom-thumb"></div></div>
        <button class="zoom-btn zoom-out">－</button>
    `;
    container.appendChild(zoomContainer);

    // Grid System: Left and Right Sidebars
    const sidebarLeft = document.createElement('div');
    sidebarLeft.className = 'physics-sidebar left';
    
    const sidebarRight = document.createElement('div');
    sidebarRight.className = 'physics-sidebar right';

    // LEFT SIDEBAR: Header Box
    const headerBox = document.createElement('div');
    headerBox.className = 'faint-text-box';
    headerBox.innerHTML = `
        <div class="doc-header">
            <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">CAMP ADMINISTRATION</span></div>
            <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">PRISONER NO. ██████</span></div>
            <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">GULAG DIRECTORATE</span></div>
            <div class="doc-divider"></div>
            <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value" style="color: #dc143c; font-weight: 700;">THE GULAG AND IMPRISONMENT</span></div>
            <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value">██████████</span></div>
            <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">DOC██████</span></div>
            <div class="doc-divider"></div>
        </div>
    `;
    sidebarLeft.appendChild(headerBox);

    // LEFT SIDEBAR: Quote
    const paraBox = document.createElement('div');
    paraBox.className = 'faint-text-box paragraph-box';
    paraBox.innerHTML = `
        <div class="text-content" style="max-height: none; overflow: visible;">
            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"The end of an unclouded day. Almost a happy one."</span><br>
                At the end of the day Shukhov falls asleep feeling pleased with life. He wasn't thrown in the punishment cell. He swiped extra gruel at dinner. He enjoyed his work on the wall. The blade wasn't found at the search point, and he earned a bit of tobacco.
            </div>
            
            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"just one of three thousand six hundred and fifty-three days"</span><br>
                Then the devastating arithmetic. Now consider what one year contains. Three hundred and sixty-five days marching out to roll-call in drizzle, blizzard, and bitter cold. Three hundred and sixty-five days of hateful alien work. Seven hundred and thirty bowls of gruel. There are ten years. There are twenty-five.
            </div>

            <div style="margin-bottom: 0;">
                <span style="color: #dc143c; font-weight: 600;">"What has become of it now"</span><br>
                Yet even here the prisoners' minds are not inactive. A weak spark was breathed into them once, and the question remains: what has become of it now?
            </div>
        </div>
    `;
    sidebarLeft.appendChild(paraBox);

    // RIGHT SIDEBAR: Narrative
    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'faint-text-box';
    narrativeBox.innerHTML = `
        <div class="text-content">
            Each digit is one prisoner. The red dot at the center is the file room.
            <br><br>
            Faint lines run from every digit back to the core — the connection between a body in a barracks and the index card that records it. The whole structure breathes. Even reduced to numbers, the population has a pulse.
            <br><br>
            Solzhenitsyn counts the camp in days. 365 marches to roll-call. 730 bowls of gruel. Then ten years. Then twenty-five. The system wins by making a life addable.
            <br><br>
            Drag outward and you can pull a digit away from the core. Let go and elastic snaps it back. The system reclaims whatever you extract.
        </div>
    `;
    sidebarRight.appendChild(narrativeBox);

    container.appendChild(sidebarLeft);
    container.appendChild(sidebarRight);
    document.body.appendChild(container);
    
    requestAnimationFrame(() => { container.style.opacity = '1'; });

    // ── Inject the CSS from the CodePen ──
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        /* Info UI System logic */
        #prison-subpage.info-active .physics-sidebar { opacity: 1; pointer-events: auto; }
        #prison-subpage .physics-sidebar { pointer-events: none; opacity: 0; padding: 3.5rem 0; height: 100vh; display: flex; flex-direction: column; z-index: 5; transition: opacity 0.5s ease; }
        #prison-subpage.info-active .faint-text-box { pointer-events: auto; opacity: 1; }
        #prison-subpage .physics-sidebar.left { grid-column: 1 / 3; justify-content: flex-start; align-items: flex-start; padding-left: 150px; }
        #prison-subpage .physics-sidebar.right { grid-column: 7 / 9; justify-content: flex-start; align-items: flex-end; padding-right: 150px; }
        
        /* ── CodePen Reproduction Styles ── */
        @keyframes ambientBlink {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.45; }
        }
        #prison-subpage .stage-wrapper {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            perspective: 800px; /* Base perspective */
            transition: all 0.6s ease;
            transform: scale(1);
            z-index: 0; /* Ensures it stays behind the text UI */
        }

        #prison-subpage.info-active .stage-wrapper {
            transform: scale(0.7); /* gentler zoom out when Info is toggled */
        }

        #prison-subpage .egg-mover {
            position: absolute;
            top: 50%; left: 50%;
            width: 0; height: 0;
            transform-style: preserve-3d;
            z-index: 1;
        }

        #prison-subpage .egg {
            position: absolute;
            width: 0; height: 0;
            transform-style: preserve-3d;
            transform: rotateX(0deg) rotateY(0deg);
        }

        #prison-subpage .stage {
            position: absolute;
            transform-style: preserve-3d;
        }

        #prison-subpage .circle {
            position: absolute;
            transform-style: preserve-3d;
        }

        #prison-subpage .x {
            transform-style: preserve-3d;
            /* Animation dynamically injected */
        }

        #prison-subpage .y {
            transform-style: preserve-3d;
            /* Animation dynamically injected */
        }

        #prison-subpage .inner {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 300;
            transform-style: preserve-3d;
            text-shadow: 0 0 10px rgba(255,255,255,0.2);
            /* Font size and color injected dynamically per particle */
        }
        
        /* The Light Mode specific overrides will be toggled by a container class */
        #prison-subpage.is-light {
            background-color: #f4f4f4;
        }
        
        #prison-subpage.is-dark {
            background-color: #050505;
        }

        #prison-subpage.is-light .inner {
            text-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        @keyframes rotateX {
            0% { transform: rotateX(0deg); }
            100% { transform: rotateX(360deg); }
        }

        @keyframes rotateY {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }

        @keyframes hologramFlow {
            0% { transform: translateZ(0px) scale(1); opacity: 0.9; filter: blur(0px); }
            60% { transform: translateZ(-120px) scale(0.4); opacity: 0.6; filter: blur(1.5px); }
            100% { transform: translateZ(-200px) scale(0.05); opacity: 0; filter: blur(4px); }
        }
    `;
    container.appendChild(styleTag);

    // ── Build the DOM Structure per CodePen (3 Stages x 100 Particles) ──
    const stageWrapper = document.createElement('div');
    stageWrapper.className = 'stage-wrapper';
    
    const egg = document.createElement('div');
    egg.className = 'egg';
    stageWrapper.appendChild(egg);

    // Reproduce the SCSS Loops in JS
    // 7 shells × 85 particles = 595 — denser than original (390) but lighter than the 880 spike
    for (let i = -2; i <= 4; i++) {
        const stage = document.createElement('div');
        stage.className = 'stage';
        egg.appendChild(stage);

        for (let j = 1; j <= 85; j++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            
            const xNode = document.createElement('div');
            xNode.className = 'x';
            
            const yNode = document.createElement('div');
            yNode.className = 'y';
            
            const innerNode = document.createElement('div');
            innerNode.className = 'inner';
            
            // Optimized particle count per shell while preserving deep dense layers
            const size = Math.floor(Math.pow(Math.random(), 3) * 20) + 6;
            
            // Inner base transform tied to CSS variables for ultra-performant sync throbbing
            const originalRadius = i * 60 + 140;
            const randomizedBeatScaleAmp = (Math.random() * 15 + 5).toFixed(2); // unique pulse amplitudes
            innerNode.style.setProperty('--beatAmp', randomizedBeatScaleAmp);
            // Default load state includes the calc() CSS function relying on Javascript provided --beat variable
            innerNode.style.transform = `translate(-50%, -50%) translateZ(${originalRadius}px) scale(calc(1 + var(--beat, 0) * var(--beatAmp)))`;
            innerNode.style.fontSize = `${size}px`; 
            innerNode.dataset.origZ = originalRadius;
            innerNode.dataset.pullMult = 0.5 + Math.random() * 0.5;
            
            // X and Y Animations
            const durX = Math.floor(Math.random() * 20000) + 10000;
            const delX = -(Math.floor(Math.random() * 3000));
            xNode.style.animation = `rotateX ${durX}ms ${delX}ms linear infinite`;

            const durY = Math.floor(Math.random() * 20000) + 10000;
            const delY = -(Math.floor(Math.random() * 3000));
            yNode.style.animation = `rotateY ${durY}ms ${delY}ms linear infinite`;

            // "0" and "1" logic
            const particleValue = Math.random() > 0.5 ? "0" : "1";
            innerNode.textContent = particleValue;

            const isCore = (i <= 0);
            const isAmbient = (j > 45); // Everything after 45 is extra faint noise layer
            const isRed = !isAmbient && (isCore ? (Math.random() > 0.3) : (Math.random() > 0.8));
            
            if (isRed) {
                innerNode.classList.add('red-particle'); // For elastic tension tracking
                if (isCore) {
                    innerNode.style.color = `rgba(220, 20, 60, 0.45)`;
                    innerNode.style.textShadow = `0 0 3px rgba(220, 20, 60, 0.2)`;
                } else {
                    innerNode.style.color = `rgba(220, 20, 60, 0.9)`;
                    innerNode.style.textShadow = `0 0 5px rgba(220, 20, 60, 0.4)`;
                }
                
                // --- CORE CONVERGENCE LASER BEAM ---
                const ray = document.createElement('div');
                ray.className = 'center-ray';
                ray.style.position = 'absolute';
                ray.style.width = '1px';
                ray.style.height = `${Math.min(120, originalRadius)}px`; 
                ray.style.bottom = '50%';
                ray.style.left = '50%';
                ray.style.transformOrigin = 'bottom center';
                ray.style.transform = `translate(-50%, 0) rotateX(90deg)`;
                ray.style.background = isCore ?
                    'linear-gradient(to top, rgba(220, 20, 60, 0.2), rgba(220, 20, 60, 0) 60%)' :
                    'linear-gradient(to top, rgba(220, 20, 60, 0.4), rgba(220, 20, 60, 0) 60%)';
                innerNode.appendChild(ray);
                
                // Trails only on outer shells; 2 per particle (was 4) for performance
                if (!isCore) {
                    for (let t = 1; t <= 2; t++) {
                        const trail = document.createElement('div');
                        trail.textContent = particleValue;
                        trail.style.position = 'absolute';
                        trail.style.color = `rgba(220, 20, 60, 0.8)`;
                        trail.style.animation = `hologramFlow 2.5s infinite ease-in`;
                        trail.style.animationDelay = `-${Math.random() * 2.5}s`;
                        innerNode.appendChild(trail);
                    }
                }
            } else if (isAmbient) {
                innerNode.classList.add('ambient-particle');
                innerNode.style.fontSize = `${Math.floor(Math.random() * 4) + 6}px`; // Extremely small (6-9px)
                innerNode.style.color = `rgba(255, 255, 255, 0.2)`;
                innerNode.style.textShadow = 'none';
                innerNode.style.animation = `ambientBlink ${Math.random() * 3 + 1.5}s infinite alternate ease-in-out`;
            } else {
                innerNode.style.color = `rgba(255, 255, 255, 0.9)`; // Default white for dark UI
                innerNode.style.textShadow = `0 0 4px rgba(255, 255, 255, 0.3)`; // Subtle baseline glow
            }

            // (Particle mitosis removed in favor of global sphere split)

            yNode.appendChild(innerNode);
            xNode.appendChild(yNode);
            circle.appendChild(xNode);
            stage.appendChild(circle);
        }
    }
    
    // Insert behind everything
    container.insertBefore(stageWrapper, container.firstChild);
    
    // Prevent disruptive native text selection and native ghost dragging
    container.style.userSelect = 'none';
    container.style.webkitUserSelect = 'none';

    // Variables for interaction tracking
    let isLightMode = false;
    let isInfoActive = false;
    
    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;

    // Mouse Parallax & Elastic Tension Logic
    let isDragging = false;
    let dragStartX = 0, dragStartY = 0;
    let targetPull = 0;
    let curPull = 0;

    container.addEventListener('mousedown', (e) => {
        if (isInfoActive) return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        e.preventDefault(); // Nullify any rogue browser dragging behaviors
    });

    container.addEventListener('mousemove', (e) => {
        if (isInfoActive) return;
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        // Soft parallax effect restored
        targetRotX = -y * 30; 
        targetRotY = x * 30;  
        
        if (isDragging) {
            let dx = e.clientX - dragStartX;
            let dy = e.clientY - dragStartY;
            let dist = Math.sqrt(dx*dx + dy*dy);
            targetPull = Math.min(dist * 2.0, 600); // Exaggerated outward pulling limit
        }
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        targetPull = 0; // Snap back due to tension
    });
    
    container.addEventListener('mouseleave', () => {
        isDragging = false;
        targetPull = 0;
    });

    // Theme & Info Toggles
    themeBtn.onclick = () => {
        isLightMode = !isLightMode;
        themeBtn.classList.toggle('is-light', isLightMode);
        backBtn.classList.toggle('is-light', isLightMode);
        infoBtn.classList.toggle('is-light', isLightMode);
        guideText.classList.toggle('is-light', isLightMode);
        zoomContainer.classList.toggle('is-light', isLightMode);
        container.classList.toggle('is-dark', !isLightMode);
        container.classList.toggle('is-light', isLightMode);
        
        // When clicking Theme toggle, change the color brightness of the data text
        const inners = document.querySelectorAll('#prison-subpage .inner');
        inners.forEach(el => {
            if(el.style.color.includes('220')) return; // skip red ones
            
            if (el.classList.contains('ambient-particle')) {
                el.style.color = isLightMode ? `rgba(17, 17, 17, 0.25)` : `rgba(255, 255, 255, 0.2)`;
                return;
            }

            if (isLightMode) {
                el.style.color = `rgba(17, 17, 17, 0.9)`; // Black for light theme backdrops
                el.style.textShadow = `none`; 
            } else {
                el.style.color = `rgba(255, 255, 255, 0.9)`; // White for dark theme backdrops
                el.style.textShadow = `0 0 4px rgba(255, 255, 255, 0.3)`; 
            }
        });
    };

    infoBtn.onclick = () => {
        isInfoActive = !isInfoActive;
        infoBtn.classList.toggle('active', isInfoActive);
        container.classList.toggle('info-active', isInfoActive);
        guideText.style.opacity = isInfoActive ? '0' : '0.4';
        zoomContainer.style.opacity = isInfoActive ? '0' : '1';
        zoomContainer.style.pointerEvents = isInfoActive ? 'none' : 'auto';

        if (isInfoActive) {
            targetRotX = 0;
            targetRotY = 0;
        }
    };

    // Zoom logic
    let targetZoom = 1.0;
    let baseZoom = 1.0;

    container.addEventListener('wheel', (e) => {
        if (isInfoActive) return;
        targetZoom -= e.deltaY * 0.001;
        targetZoom = Math.max(0.3, Math.min(targetZoom, 2.5));
        updateZoomUI();
    });

    function updateZoomUI() {
        if (!zoomContainer) return;
        const thumb = zoomContainer.querySelector('.zoom-thumb');
        if (thumb) {
            const percent = 100 - ((targetZoom - 0.3) / (2.5 - 0.3) * 100);
            thumb.style.top = `${percent}%`;
        }
    }
    
    // Zoom Buttons event listeners
    const zInBtn = zoomContainer.querySelector('.zoom-in');
    const zOutBtn = zoomContainer.querySelector('.zoom-out');
    const zTrack = zoomContainer.querySelector('.zoom-track');
    
    if (zInBtn && zOutBtn && zTrack) {
        zInBtn.onclick = () => { targetZoom = Math.min(2.5, targetZoom + 0.3); updateZoomUI(); };
        zOutBtn.onclick = () => { targetZoom = Math.max(0.3, targetZoom - 0.3); updateZoomUI(); };
        zTrack.onclick = (e) => {
            const rect = zTrack.getBoundingClientRect();
            const pct = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
            targetZoom = 0.3 + (1 - pct) * (2.5 - 0.3);
            updateZoomUI();
        };
    }
    updateZoomUI();
    
    // Auto-bootstrap into Light Mode Default AFTER ALL PARTICLES EXIST
    themeBtn.click();

    let animFrame;
    function animate() {
        animFrame = requestAnimationFrame(animate);

        // Smooth parallax easing
        curRotX += (targetRotX - curRotX) * 0.05;
        curRotY += (targetRotY - curRotY) * 0.05;
        const time = Date.now();
        
        // Elastic drag tension easing
        curPull += (targetPull - curPull) * 0.1;
        
        // Target the single egg layer
        if (egg) {
            // Heartbeat pulse calculation - heavily reduced amplitude (0.06) and speed (0.0008)
            const beat = Math.pow(Math.sin(time * 0.0008), 32) * 0.06;
            baseZoom += (targetZoom - baseZoom) * 0.1;
            const pulseScale = (1.45 + beat) * baseZoom; // 45% mass + interactive zoom footprint
            
            // Feed the heartbeat value directly to a CSS Variable on the container!
            // All 240+ inner data particles will automatically recalculate their scale using GPU offloading (`calc(1 + var(--beat) * var(--beatAmp))`)
            egg.style.setProperty('--beat', beat);
            egg.style.transform = `scale(${pulseScale}) rotateX(${curRotX}deg) rotateY(${curRotY}deg)`;
            
            // Only update DOM if there's an actual interactive string pull happening
            if (curPull > 0.5 || targetPull > 0) {
                document.querySelectorAll('#prison-subpage .red-particle').forEach(rp => {
                    const origZ = parseFloat(rp.dataset.origZ);
                    const mult = parseFloat(rp.dataset.pullMult);
                    const stretch = curPull * mult;
                    
                    const dynamicScaleBoost = 1 + (stretch / 180);
                    
                    rp.style.transform = `translate(-50%, -50%) translateZ(${origZ + stretch}px) scale(calc((1 + var(--beat) * var(--beatAmp)) * ${dynamicScaleBoost}))`;
                    
                    // Dynamically stretch the ray back to the core
                    const ray = rp.querySelector('.center-ray');
                    if (ray) {
                        const baseH = Math.min(120, origZ);
                        ray.style.height = `${baseH + stretch}px`;
                    }
                });
            } else if (Math.abs(curPull) <= 0.5 && curPull !== 0) {
                curPull = 0;
                document.querySelectorAll('#prison-subpage .red-particle').forEach(rp => {
                    const origZ = parseFloat(rp.dataset.origZ);
                    rp.style.transform = `translate(-50%, -50%) translateZ(${origZ}px) scale(calc(1 + var(--beat) * var(--beatAmp)))`;
                    
                    const ray = rp.querySelector('.center-ray');
                    if (ray) {
                        const baseH = Math.min(120, origZ);
                        ray.style.height = `${baseH}px`;
                    }
                });
            }
        }
    }
    animate();

    backBtn.onclick = () => {
        container.style.opacity = '0';
        cancelAnimationFrame(animFrame);
        setTimeout(() => {
            container.remove();
        }, 600);
    };
}


/* ─── 3D PHYSICS SUBPAGE: THEME 04 — CONSCIENCE (Magnetic Field) ─── */

async function openConscienceSubpage(clickedCell) {
    const mods = await loadThreeModules();
    const THREE = mods.THREE;

    const container = document.createElement('div');
    container.id = 'conscience-subpage';
    container.className = 'is-light';
    // Match the layout rules of #physics-subpage exactly (theme 1, 2, 3 grid)
    container.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 2000; opacity: 0; transition: opacity 0.5s ease; overflow: hidden;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 100%;
        gap: 2.5rem;
        padding: 0 3.5rem;
    `;

    // UI Controls
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn is-light';
    backBtn.title = 'BACK';
    backBtn.setAttribute('data-tip', 'BACK TO INDEX');
    container.appendChild(backBtn);

    const themeBtn = document.createElement('div');
    themeBtn.className = 'theme-toggle-wrapper is-light';
    themeBtn.title = 'DARK / LIGHT';
    themeBtn.setAttribute('data-tip', 'DARK MODE');
    themeBtn.innerHTML = '<div class="slider-knob"></div>';
    container.appendChild(themeBtn);

    const infoBtn = document.createElement('div');
    infoBtn.className = 'info-icon-btn is-light';
    infoBtn.title = 'BRIEFING';
    infoBtn.setAttribute('data-tip', 'BRIEFING');
    infoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    container.appendChild(infoBtn);

    const guideText = document.createElement('div');
    guideText.className = 'overlay-text-guide is-light';
    armGuideFade(container);
    guideText.innerHTML = 'SCROLL TO ZOOM<br>DRAG TO ROTATE';
    container.appendChild(guideText);

    // Zoom slider UI (matches the pattern from other physics subpages)
    const zoomContainer = document.createElement('div');
    zoomContainer.className = 'zoom-slider-container is-light';
    zoomContainer.innerHTML = `
        <button class="zoom-btn zoom-in">＋</button>
        <div class="zoom-track"><div class="zoom-thumb"></div></div>
        <button class="zoom-btn zoom-out">－</button>
    `;
    container.appendChild(zoomContainer);

    // Grid System: Left and Right Sidebars
    const sidebarLeft = document.createElement('div');
    sidebarLeft.className = 'physics-sidebar left';
    const sidebarRight = document.createElement('div');
    sidebarRight.className = 'physics-sidebar right';

    const headerBox = document.createElement('div');
    headerBox.className = 'faint-text-box';
    headerBox.innerHTML = `
        <div class="doc-header">
            <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">A HUMAN BEING</span></div>
            <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">HIS OWN CONSCIENCE</span></div>
            <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">MEMORY</span></div>
            <div class="doc-divider"></div>
            <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value" style="color: #dc143c; font-weight: 700;">CONSCIENCE</span></div>
            <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value">██████████</span></div>
            <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">DOC██████</span></div>
            <div class="doc-divider"></div>
        </div>
    `;
    sidebarLeft.appendChild(headerBox);

    const paraBox = document.createElement('div');
    paraBox.className = 'faint-text-box paragraph-box';
    paraBox.innerHTML = `
        <div class="text-content" style="max-height: none; overflow: visible;">
            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"the line dividing good and evil cuts through the heart"</span><br>
                If only the answer were simple. If only evil people existed somewhere insidiously committing their deeds, and it were only necessary to separate and destroy them. But the line dividing good and evil cuts through the heart of every human being without exception. And who is willing to destroy a piece of his own heart?
            </div>

            <div style="margin-bottom: 24px;">
                <span style="color: #dc143c; font-weight: 600;">"during a lifetime this line shifts"</span><br>
                During a lifetime this line shifts. The same person stands at various ages near sainthood and near the devil. The name does not change, and to that name we ascribe everything.
            </div>

            <div style="margin-bottom: 0;">
                <span style="color: #dc143c; font-weight: 600;">"know thyself has never been more urgent"</span><br>
                Is it permissible merely to carry out orders and commit one's conscience to someone else's keeping? Can a person live without his own ideas about good and evil — deriving them only from printed instructions and the verbal commands of superiors? Socrates' command "know thyself" has never been more urgent than now.
            </div>
        </div>
    `;
    sidebarLeft.appendChild(paraBox);

    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'faint-text-box';
    narrativeBox.innerHTML = `
        <div class="text-content">
            This is what conscience looks like — the self watching the self.
            <br><br>
            The word means "knowing-with": Greek <span style="color:#dc143c; font-weight:600;">συν + εἶδος</span>, Latin <span style="color:#dc143c; font-weight:600;">con-scientia</span>. Each particle in the vortex is a small recognition: witness, mirror, inner, other. One particle alone is barely a thought. The rings make it knowable.
            <br><br>
            Solzhenitsyn says the line between good and evil runs through every heart, and that line moves over a lifetime. The same person stands closer to the saint at one age, closer to the devil at another. Conscience is what redraws the line each day.
            <br><br>
            The rings here turn at different speeds, in opposite directions. They never line up. They aren't supposed to. The waist of the hourglass is where the layers briefly meet before pulling apart again.
        </div>
    `;
    sidebarRight.appendChild(narrativeBox);

    container.appendChild(sidebarLeft);
    container.appendChild(sidebarRight);
    document.body.appendChild(container);

    // ─── Three.js Scene: συν-εἶδος vortex ───────────────────────────────
    // A 3D hourglass of word-meshes arranged in concentric rings; each ring
    // (layer) rotates independently around the vertical axis — "knowing-with".
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 1.4, 4.6);
    camera.lookAt(0, 0.0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf4f4f4, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'position:absolute; inset:0; width:100%; height:100%; z-index:1;';

    // Distance fog: faraway words fade into the background → "blur/optimisation" feel
    scene.fog = new THREE.Fog(0x050505, 5.0, 11.0);

    // ─── Build the word field ──────────────────────────────────────────
    // Each "particle" is a Sprite displaying a word in a varied font/size.
    // The vortex is sliced into LAYER_COUNT bands, each band a Group with its
    // own random rotation speed — so individual coils of the spiral spin at
    // different rates, independent of each other.
    const vortex = new THREE.Group();
    scene.add(vortex);

    const LAYER_COUNT = 24;
    const layers = [];
    const layerSpeeds = [];
    for (let i = 0; i < LAYER_COUNT; i++) {
        const g = new THREE.Group();
        vortex.add(g);
        layers.push(g);
        // Random direction + magnitude per layer, occasionally reversed
        const dir = Math.random() < 0.5 ? -1 : +1;
        const mag = 0.012 + Math.random() * 0.13;       // 0.012..0.142 rad/s — slow, varied
        layerSpeeds.push(dir * mag);
    }

    const VOCAB = [
        // Greek
        'συν', 'εἶδος', 'οἶδα', 'γνῶθι', 'σεαυτόν', 'συνείδησις', 'εἰδέναι',
        'γιγνώσκω', 'γνῶσις', 'ψυχή', 'νοῦς', 'σύν-εἶδος', 'γνῶθι σεαυτόν',
        // Latin & Romance roots
        'conscientia', 'con-scientia', 'scire', 'cum', 'co-scire',
        'cognoscere', 'cognoscere se', 'sciens', 'noscere',
        // English cognates
        'conscience', 'knowing', 'witness', 'awareness', 'co-witness',
        'self-knowing', 'shared knowing', 'co-knowing', 'knowing-with',
        'inward', 'inner', 'other', 'watcher', 'mirror', 'remember',
        'reckoning', 'attest', 'recall', 'observe', 'reflect',
        'recognize', 'introspect', 'noësis', 'noetic',
        // Solzhenitsyn-leaning vocabulary
        'silent', 'voice', 'tremor', 'oath', 'name', 'soul', 'spirit',
        'truth', 'falsehood', 'shadow', 'thought', 'light',
        'guard', 'dignity', 'duty', 'shame', 'choice', 'judge',
        'urgent', 'urgent than now', 'know thyself',
        'this line shifts', 'cuts through', 'every heart',
        'a name we ascribe', 'what becomes of it',
        // Multilingual
        '함께앎', '양심', '의식', '자기인식',
        'mit-wissen', 'wissen-mit', 'savoir-avec',
        // Composite concepts
        'self', 'inner voice', 'shared sight',
        'private knowing', 'know-within',
        'remember within', 'self-attest', 'fellow-knowledge', 'co-presence',
        'knowing together',
    ];

    const FONTS = [
        // Mono
        { family: "'JetBrains Mono', monospace", weight: 400, style: 'normal'  },
        { family: "'JetBrains Mono', monospace", weight: 700, style: 'normal'  },
        { family: "'JetBrains Mono', monospace", weight: 400, style: 'italic'  },
        { family: "'Courier New', monospace",     weight: 400, style: 'normal' },
        { family: "'Courier New', monospace",     weight: 700, style: 'italic' },
        // Sans
        { family: "'Inter', sans-serif", weight: 400, style: 'normal' },
        { family: "'Inter', sans-serif", weight: 400, style: 'italic' },
        { family: "'Inter', sans-serif", weight: 600, style: 'normal' },
        { family: "'Inter', sans-serif", weight: 700, style: 'normal' },
        { family: "'Inter', sans-serif", weight: 700, style: 'italic' },
        { family: "'Noto Sans', sans-serif", weight: 400, style: 'normal' },
        { family: "'Noto Sans', sans-serif", weight: 900, style: 'normal' },
        { family: "'Helvetica Neue', sans-serif", weight: 300, style: 'normal' },
        { family: "Arial, sans-serif", weight: 400, style: 'normal' },
        { family: "Arial, sans-serif", weight: 700, style: 'italic' },
        { family: "'Trebuchet MS', sans-serif", weight: 400, style: 'normal' },
        // Serif
        { family: "Georgia, serif",          weight: 400, style: 'normal' },
        { family: "Georgia, serif",          weight: 400, style: 'italic' },
        { family: "Georgia, serif",          weight: 700, style: 'normal' },
        { family: "'Times New Roman', serif", weight: 400, style: 'normal' },
        { family: "'Times New Roman', serif", weight: 700, style: 'italic' },
        { family: "'Palatino', serif",        weight: 400, style: 'normal' },
        { family: "'Garamond', serif",        weight: 400, style: 'italic' },
        // Display
        { family: "Impact, sans-serif",                weight: 400, style: 'normal' },
        { family: "'Brush Script MT', cursive",        weight: 400, style: 'italic' },
        { family: "'Lucida Console', monospace",       weight: 400, style: 'normal' },
        { family: "'Copperplate', serif",              weight: 400, style: 'normal' },
    ];
    const SIZE_BUCKETS = [7, 10, 14, 20, 28];    // canvas px (small → big)

    // Texture cache: key = word|family|weight|size
    const texCache = new Map();
    function makeWordTexture(word, font, sizePx) {
        const style = font.style || 'normal';
        const key = `${word}|${font.family}|${font.weight}|${style}|${sizePx}`;
        if (texCache.has(key)) return texCache.get(key);
        const padX = Math.max(8, sizePx * 0.25);
        const padY = Math.max(6, sizePx * 0.30);
        const tmp = document.createElement('canvas');
        const tctx = tmp.getContext('2d');
        const fontStr = `${style} ${font.weight} ${sizePx}px ${font.family}`;
        tctx.font = fontStr;
        const m = tctx.measureText(word);
        const w = Math.max(8, Math.ceil(m.width) + padX * 2);
        const h = Math.ceil(sizePx * 1.4) + padY;
        tmp.width = w; tmp.height = h;
        const ctx = tmp.getContext('2d');
        ctx.font = fontStr;
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(word, w / 2, h / 2);
        const tex = new THREE.CanvasTexture(tmp);
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        const result = { tex, w, h };
        texCache.set(key, result);
        return result;
    }

    // ─── Spiral parameters (same hourglass shape as before) ───────────
    const yMax = 2.3;
    const rMax = 2.70;
    const rMin = 0.08;          // very tight pinch
    const turns = 26;
    const radialPow = 2.8;      // strong bell curve — words clamp hard toward centre

    function coilStrength(absU) {
        const lo = 0.18, hi = 0.55;
        const t = Math.max(0, Math.min(1, (absU - lo) / (hi - lo)));
        return t * t * (3 - 2 * t);
    }

    // ─── Word particles ────────────────────────────────────────────────
    const particleCount = 2200;
    const particles = [];
    const px2world = 0.0022;
    const flatPlaneGeo = new THREE.PlaneGeometry(1, 1);

    // Shared fog + zoom + global-alpha uniforms — single reference for all word materials
    const _holoFogColor    = new THREE.Color(0x050505);
    const _holoFogNear     = { value: 3.5 };
    const _holoFogFar      = { value: 11.5 };
    const _holoZoom        = { value: 0 };
    const _holoGlobalAlpha = { value: 0.7 };

    // Hologram shader (chromatic aberration + scanline + red ghost + distance fade)
    const HOLO_VERT = `
        varying vec2 vUv;
        varying float vCamDist;
        void main() {
            vUv = uv;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vCamDist = -mv.z;
            gl_Position = projectionMatrix * mv;
        }
    `;
    const HOLO_FRAG = `
        uniform sampler2D uMap;
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uGlow;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform float uZoom;        // 0 = home, 1+ = stronger CRT/hologram intensity
        uniform float uGlobalAlpha; // overall translucency clamp
        varying vec2 vUv;
        varying float vCamDist;
        void main() {
            // Chromatic aberration grows with zoom + glow
            float ab = 0.0035 + uGlow * 0.020 + uZoom * 0.012;
            float ar  = texture2D(uMap, vUv + vec2(ab, 0.0)).a;
            float ag  = texture2D(uMap, vUv).a;
            float ab2 = texture2D(uMap, vUv - vec2(ab, 0.0)).a;
            vec3 col = uColor * ag;
            col.r += (ar  - ag) * (0.6 + uZoom * 0.5);
            col.b += (ab2 - ag) * (0.6 + uZoom * 0.5);
            // Scanlines — denser & stronger when zoomed
            float scanFreq  = 60.0 + uZoom * 80.0;
            float scanDepth = 0.06 + uZoom * 0.10;
            float scan = sin(vUv.y * scanFreq) * scanDepth + (1.0 - scanDepth * 0.5);
            col *= scan;
            // Red ghost trail (vertical offset)
            float ghostStr = uGlow * 0.7 + uZoom * 0.20;
            if (ghostStr > 0.01) {
                float ghostA = texture2D(uMap, vUv - vec2(0.0, 0.025 * uGlow + 0.012 * uZoom)).a;
                col += vec3(1.0, 0.08, 0.18) * ghostA * ghostStr;
            }
            float alpha = max(ar, max(ag, ab2));
            if (alpha < 0.04) discard;
            // Distance fade
            float fogF = smoothstep(uFogNear, uFogFar, vCamDist);
            col = mix(col, uFogColor, fogF);
            alpha *= (1.0 - fogF * 0.85);
            gl_FragColor = vec4(col, alpha * uOpacity * uGlobalAlpha);
        }
    `;

    // Scratch math
    const _T = new THREE.Vector3();
    const _N = new THREE.Vector3();
    const _B = new THREE.Vector3();
    const _basisMat = new THREE.Matrix4();

    for (let i = 0; i < particleCount; i++) {
        const tBase = i / (particleCount - 1);
        const tJit  = (Math.random() - 0.5) * (1 / particleCount) * 1.4;
        const t = Math.min(1, Math.max(0, tBase + tJit));
        const u = 1 - 2 * t;
        const absU = Math.abs(u);

        const bell = rMax * Math.pow(absU, radialPow);
        const r    = Math.sqrt(bell * bell + rMin * rMin);
        const y    = yMax * u;
        const thetaSpring = t * turns * Math.PI * 2;
        const onCoil = Math.random() < coilStrength(absU);
        const rJ  = (Math.random() - 0.5) * (0.02 + r * 0.04);
        const yJ  = (Math.random() - 0.5) * 0.025;
        const thJ = (Math.random() - 0.5) * 0.018;
        const th  = onCoil ? (thetaSpring + thJ) : (Math.random() * Math.PI * 2);
        const rr  = r + rJ;

        const px = rr * Math.cos(th);
        const pz = rr * Math.sin(th);
        const py = y + yJ;

        // Tangent direction (helix or rotational tangent)
        let Tx, Ty, Tz;
        if (onCoil) {
            const dbell = -2 * rMax * radialPow * Math.pow(absU + 1e-6, radialPow - 1) * Math.sign(u);
            const dr  = (bell * dbell) / r;
            const dy  = -2 * yMax;
            const dth = turns * Math.PI * 2;
            Tx = dr * Math.cos(th) - rr * dth * Math.sin(th);
            Ty = dy;
            Tz = dr * Math.sin(th) + rr * dth * Math.cos(th);
        } else {
            Tx = -Math.sin(th); Ty = 0; Tz = Math.cos(th);
        }
        const tmag = Math.sqrt(Tx*Tx + Ty*Ty + Tz*Tz) || 1;
        Tx /= tmag; Ty /= tmag; Tz /= tmag;

        // Radial outward normal (from helix axis to particle, in XZ plane)
        const axisR = Math.sqrt(px*px + pz*pz) || 1;
        const Nx = px / axisR, Ny = 0, Nz = pz / axisR;

        // Binormal B = T × N (perpendicular to both, gives plane "up")
        const Bx = Ty * Nz - Tz * Ny;
        const By = Tz * Nx - Tx * Nz;
        const Bz = Tx * Ny - Ty * Nx;
        const bmag = Math.sqrt(Bx*Bx + By*By + Bz*Bz) || 1;
        const bx = Bx / bmag, by = By / bmag, bz = Bz / bmag;

        // Pick word, font, size — strongly bias toward smaller text near the pinch
        const word = VOCAB[Math.floor(Math.random() * VOCAB.length)];
        const font = FONTS[Math.floor(Math.random() * FONTS.length)];
        const sizeFactor = Math.pow(absU, 0.7) * (0.65 + Math.random() * 0.55);
        const sizeIdx = Math.min(SIZE_BUCKETS.length - 1, Math.floor(sizeFactor * SIZE_BUCKETS.length));
        const sizePx = SIZE_BUCKETS[sizeIdx];
        const tex = makeWordTexture(word, font, sizePx);

        const widthWorld  = tex.w * px2world;
        const heightWorld = tex.h * px2world;

        const baseOpacity = 0.32 + absU * 0.55 + Math.random() * 0.2;
        const mat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
            uniforms: {
                uMap: { value: tex.tex },
                uColor: { value: new THREE.Color(0xffffff) },
                uOpacity: { value: baseOpacity },
                uGlow: { value: 0 },
                uFogColor: { value: _holoFogColor },   // shared reference
                uFogNear:  _holoFogNear,
                uFogFar:   _holoFogFar,
                uZoom:     _holoZoom,
                uGlobalAlpha: _holoGlobalAlpha,
            },
            vertexShader: HOLO_VERT,
            fragmentShader: HOLO_FRAG,
        });
        const mesh = new THREE.Mesh(flatPlaneGeo, mat);
        // Larger z-jitter + small radial jitter so overlapping words feel
        // dispersed in depth rather than stacking on the same plane.
        const layerJitter = (Math.random() - 0.5) * 0.18;
        const radialNudge = (Math.random() - 0.5) * 0.08;
        mesh.position.set(
            px + (-Nx) * radialNudge,
            py + (Math.random() - 0.5) * 0.04,
            pz + (-Nz) * radialNudge + layerJitter,
        );

        // Orient: word's reading direction (local +X) points INWARD (toward axis)
        // so the END of the text faces the central axis. Local +Y stays world up.
        // Local +Z = +X × +Y, the in-plane normal direction.
        const inwardX = -Nx, inwardY = 0, inwardZ = -Nz;     // text reading direction
        const upX = 0, upY = 1, upZ = 0;
        // Z = X × Y
        const zX = inwardY * upZ - inwardZ * upY;
        const zY = inwardZ * upX - inwardX * upZ;
        const zZ = inwardX * upY - inwardY * upX;
        _T.set(inwardX, inwardY, inwardZ);
        _B.set(upX, upY, upZ);
        _N.set(zX, zY, zZ).normalize();
        _basisMat.makeBasis(_T, _B, _N);
        mesh.quaternion.setFromRotationMatrix(_basisMat);
        mesh.scale.set(widthWorld, heightWorld, 1);
        // Assign to a layer band based on t (the spiral parameter)
        const layerIdx = Math.min(LAYER_COUNT - 1, Math.floor(t * LAYER_COUNT));
        layers[layerIdx].add(mesh);

        particles.push({
            sprite: mesh,
            basePos: mesh.position.clone(),
            baseScale: new THREE.Vector3(widthWorld, heightWorld, 1),
            baseOpacity: baseOpacity,
            glow: 0,
            targetGlow: 0,
            layerIdx,
        });
    }

    // ─── Cascade: a few slow sparks spawn from the two ends of the spiral
    // and creep toward the centre. Connection threads sprout from the corners
    // of glowing letters, like mycelial filaments.
    const SPARK_TRAIL_LEN = 5;
    const MAX_SPARKS = 8;
    const SPAWN_INTERVAL_MIN = 0.7;
    const SPAWN_INTERVAL_MAX = 2.6;
    const FILAMENT_SETTLE_TIME = 0.55;   // seconds to fully extend (inertia / viscosity)
    let sparks = [];
    let nextSpawnIn = 0.4;

    function spawnSpark() {
        const fromTop = Math.random() < 0.5;
        const center = Math.floor(particleCount / 2);
        const targetJitter = Math.floor((Math.random() - 0.5) * particleCount * 0.08);
        sparks.push({
            position: fromTop ? 0 : particleCount - 1,
            direction: fromTop ? +1 : -1,
            target: center + targetJitter,
            timer: 0,
            trail: [],
            stepSize: 1 + Math.floor(Math.random() * 2),
            stepInterval: 0.10 + Math.random() * 0.40,
            dead: false,
            fadeOut: 1.0,        // when dying, lerps 1 → 0 for smooth disappearance
        });
    }

    function pickTwoCorners() {
        const a = Math.floor(Math.random() * 4);
        let b = Math.floor(Math.random() * 4);
        while (b === a) b = Math.floor(Math.random() * 4);
        return [a, b];
    }

    // ─── Pre-compute each particle's 4 corners in vortex-local space ──
    // Corners never move (mesh fixed in vortex local frame), so we cache them
    // and just read per frame. Order: TL, TR, BR, BL (signs +/− on x,y).
    const cornerScratch = new THREE.Vector3();
    function precomputeCorners(particle) {
        const halfW = particle.baseScale.x / 2;
        const halfH = particle.baseScale.y / 2;
        const signs = [[-1, +1], [+1, +1], [+1, -1], [-1, -1]];
        const out = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
        for (let c = 0; c < 4; c++) {
            out[c].set(signs[c][0] * halfW, signs[c][1] * halfH, 0);
            out[c].applyQuaternion(particle.sprite.quaternion);
            out[c].add(particle.basePos);
        }
        return out;
    }
    // ── Align particles within each layer to evenly-spaced angles + shared baseline ──
    const particlesByLayer = Array.from({ length: LAYER_COUNT }, () => []);
    for (const p of particles) particlesByLayer[p.layerIdx].push(p);
    for (let li = 0; li < LAYER_COUNT; li++) {
        const lp = particlesByLayer[li];
        const N = lp.length;
        if (N === 0) continue;
        let sumY = 0, sumR = 0;
        for (const p of lp) {
            sumY += p.basePos.y;
            sumR += Math.sqrt(p.basePos.x * p.basePos.x + p.basePos.z * p.basePos.z);
        }
        const cY = sumY / N;
        const cR = Math.max(0.05, sumR / N);
        const phaseOffset = Math.random() * Math.PI * 2;   // each layer starts at a different angle
        for (let i = 0; i < N; i++) {
            const p = lp[i];
            const theta = phaseOffset + (i / N) * Math.PI * 2;
            const px = Math.cos(theta) * cR;
            const pz = Math.sin(theta) * cR;
            const py = cY + (Math.random() - 0.5) * 0.04;
            p.basePos.set(px, py, pz);
            p.sprite.position.set(px, py, pz);
            // Inward orientation: word's reading direction → axis
            const Nx = px / cR, Nz = pz / cR;
            const inwardX = -Nx, inwardZ = -Nz;
            const zX = -inwardZ;       // = (inwardY * upZ − inwardZ * upY) with up=(0,1,0)
            const zZ =  inwardX;
            _T.set(inwardX, 0, inwardZ);
            _B.set(0, 1, 0);
            _N.set(zX, 0, zZ).normalize();
            _basisMat.makeBasis(_T, _B, _N);
            p.sprite.quaternion.setFromRotationMatrix(_basisMat);
        }
    }
    // Now corners are correct relative to the new (aligned) positions/orientations
    for (const p of particles) p.corners = precomputeCorners(p);

    // ── Zoom state ──
    // Cache each particle's base radial info so we can spread them outward
    // along their (radial) axis when the user zooms in.
    for (const p of particles) {
        p.baseR = Math.sqrt(p.basePos.x * p.basePos.x + p.basePos.z * p.basePos.z);
        p.baseAngle = Math.atan2(p.basePos.z, p.basePos.x);
        p.baseY = p.basePos.y;
    }
    let targetZoom = 0;          // 0 = home; > 1 allowed for extra spread
    let zoomLevel  = 0;
    let lastZoomApplied = -1;
    const ZOOM_MAX    = 1.6;
    const ZOOM_RADIAL = 2.4;     // radial spread per unit zoom
    const ZOOM_DOLLY  = 2.6;     // camera dolly per unit zoom (toward target)

    // Orbit + pan state — derived from the initial camera position
    const _zoomBaseCam = camera.position.clone();
    const _zoomCamDist = _zoomBaseCam.length();
    const HOME_THETA = Math.atan2(_zoomBaseCam.x, _zoomBaseCam.z);
    const HOME_PHI   = Math.acos(Math.min(1, Math.max(-1, _zoomBaseCam.y / _zoomCamDist)));
    let orbitTheta = HOME_THETA;
    let orbitPhi   = HOME_PHI;
    const panOffset = new THREE.Vector3();
    const _orbitSpherical = new THREE.Spherical();
    const _orbitRight = new THREE.Vector3();
    const _orbitUp    = new THREE.Vector3();
    const _orbitFwd   = new THREE.Vector3();

    function applyZoom(z) {
        const rScale = 1.0 + z * ZOOM_RADIAL;
        for (const p of particles) {
            const r = p.baseR * rScale;
            const x = Math.cos(p.baseAngle) * r;
            const zz = Math.sin(p.baseAngle) * r;
            p.basePos.set(x, p.baseY, zz);
            p.sprite.position.set(x, p.baseY, zz);
            // Recompute corners (positions changed; orientation unchanged)
            const halfW = p.baseScale.x / 2;
            const halfH = p.baseScale.y / 2;
            const signs = [[-1, +1], [+1, +1], [+1, -1], [-1, -1]];
            for (let c = 0; c < 4; c++) {
                p.corners[c].set(signs[c][0] * halfW, signs[c][1] * halfH, 0);
                p.corners[c].applyQuaternion(p.sprite.quaternion);
                p.corners[c].add(p.basePos);
            }
        }
        // (Camera position handled per-frame by updateCamera() below — combines
        // zoom-dolly with the orbit/pan state.)
    }

    function updateCamera() {
        const r = Math.max(0.5, _zoomCamDist - zoomLevel * ZOOM_DOLLY);
        _orbitSpherical.set(r, orbitPhi, orbitTheta);
        camera.position.setFromSpherical(_orbitSpherical).add(panOffset);
        camera.lookAt(panOffset);
    }

    // Wire zoom UI
    const zoomThumb = zoomContainer.querySelector('.zoom-thumb');
    const zoomTrack = zoomContainer.querySelector('.zoom-track');
    function syncZoomThumb() {
        if (zoomThumb) zoomThumb.style.top = `${(1 - targetZoom / ZOOM_MAX) * 100}%`;
    }
    syncZoomThumb();
    zoomContainer.querySelector('.zoom-in').onclick  = () => { targetZoom = Math.min(ZOOM_MAX, targetZoom + 0.20); syncZoomThumb(); };
    zoomContainer.querySelector('.zoom-out').onclick = () => { targetZoom = Math.max(0, targetZoom - 0.20); syncZoomThumb(); };

    // Mouse-wheel zoom — scrolling up zooms in, down zooms out
    function onConscienceWheel(e) {
        if (container.classList.contains('info-active')) return;
        e.preventDefault();
        targetZoom = Math.max(0, Math.min(ZOOM_MAX, targetZoom - e.deltaY * 0.0014));
        syncZoomThumb();
    }
    container.addEventListener('wheel', onConscienceWheel, { passive: false });

    // ── Mouse orbit + pan ──
    // Left-drag = orbit around the centre; right-drag (or Shift+drag) = pan.
    let isDragging = false;
    let dragMode = 'orbit';
    let dragLastX = 0, dragLastY = 0;
    function onCanvasDown(e) {
        if (container.classList.contains('info-active')) return;
        if (e.target !== renderer.domElement) return;
        isDragging = true;
        dragMode = (e.button === 2 || e.shiftKey) ? 'pan' : 'orbit';
        dragLastX = e.clientX;
        dragLastY = e.clientY;
        try { renderer.domElement.setPointerCapture(e.pointerId); } catch {}
    }
    function onCanvasMove(e) {
        if (!isDragging) return;
        const dx = e.clientX - dragLastX;
        const dy = e.clientY - dragLastY;
        dragLastX = e.clientX;
        dragLastY = e.clientY;
        if (dragMode === 'orbit') {
            orbitTheta -= dx * 0.0055;
            orbitPhi   -= dy * 0.0055;
            orbitPhi = Math.max(0.08, Math.min(Math.PI - 0.08, orbitPhi));
        } else {
            // Pan: convert pixel delta to world units along camera-right / camera-up
            const r = Math.max(0.5, _zoomCamDist - zoomLevel * ZOOM_DOLLY);
            const panSpeed = r * 0.0024;
            camera.matrix.extractBasis(_orbitRight, _orbitUp, _orbitFwd);
            panOffset.addScaledVector(_orbitRight, -dx * panSpeed);
            panOffset.addScaledVector(_orbitUp,     dy * panSpeed);
        }
    }
    function onCanvasUp(e) {
        isDragging = false;
        try { renderer.domElement.releasePointerCapture(e.pointerId); } catch {}
    }
    renderer.domElement.addEventListener('pointerdown', onCanvasDown);
    renderer.domElement.addEventListener('pointermove', onCanvasMove);
    renderer.domElement.addEventListener('pointerup',   onCanvasUp);
    renderer.domElement.addEventListener('pointercancel', onCanvasUp);
    renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

    let zoomDragging = false;
    function setFromPointer(clientY) {
        const r = zoomTrack.getBoundingClientRect();
        const t = Math.max(0, Math.min(1, (clientY - r.top) / r.height));
        targetZoom = 1 - t;
        syncZoomThumb();
    }
    zoomTrack.addEventListener('pointerdown', (e) => {
        zoomDragging = true;
        zoomTrack.setPointerCapture(e.pointerId);
        setFromPointer(e.clientY);
    });
    zoomTrack.addEventListener('pointermove', (e) => {
        if (zoomDragging) setFromPointer(e.clientY);
    });
    zoomTrack.addEventListener('pointerup', (e) => {
        zoomDragging = false;
        try { zoomTrack.releasePointerCapture(e.pointerId); } catch {}
    });

    // ─── Connection-thread capacity ──
    // 2 threads per connection (top corners + bottom corners), 8 segs each.
    const CURVE_SEGS = 8;
    const THREADS_PER_CONN = 2;
    const MAX_CONNS = MAX_SPARKS * (SPARK_TRAIL_LEN - 1);
    const MAX_LINE_SEGMENTS = MAX_CONNS * THREADS_PER_CONN * CURVE_SEGS;
    const linePosArr = new Float32Array(MAX_LINE_SEGMENTS * 2 * 3);
    const lineColArr = new Float32Array(MAX_LINE_SEGMENTS * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePosArr, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color',    new THREE.BufferAttribute(lineColArr, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });
    const trailLine = new THREE.LineSegments(lineGeo, lineMat);
    vortex.add(trailLine);

    // Reusable scratch
    const _curveA = new THREE.Vector3();
    const _curveB = new THREE.Vector3();
    const _curveMid = new THREE.Vector3();
    const _curveAB = new THREE.Vector3();
    const _curvePerp = new THREE.Vector3();
    const _curveUp = new THREE.Vector3(0, 1, 0);
    const _curvePrev = new THREE.Vector3();
    const _curveCur = new THREE.Vector3();

    // Draw a thin curved thread from corner A → corner B.
    // `bowFactor` is a stable per-filament value (no per-frame flicker), and
    // `seed` deterministically jitters vertices (so the curve doesn't wiggle).
    function drawThread(ax, ay, az, bx, by, bz, vIdxStart, alpha, bowFactor, seed) {
        _curveA.set(ax, ay, az);
        _curveB.set(bx, by, bz);
        _curveAB.subVectors(_curveB, _curveA);
        _curvePerp.crossVectors(_curveAB, _curveUp);
        if (_curvePerp.lengthSq() < 1e-6) _curvePerp.set(1, 0, 0);
        else _curvePerp.normalize();
        const len = _curveAB.length();
        const offset = bowFactor * len;
        _curveMid.addVectors(_curveA, _curveB).multiplyScalar(0.5).addScaledVector(_curvePerp, offset);

        // Deterministic noise from seed → stable jitter pattern
        const hash = (n) => {
            const x = Math.sin(n * 12.9898 + seed * 78.233) * 43758.5453;
            return (x - Math.floor(x)) - 0.5;
        };

        let vIdx = vIdxStart;
        _curvePrev.copy(_curveA);
        const segs = CURVE_SEGS;
        const rC = alpha * 1.0, gC = alpha * 0.16, bC = alpha * 0.24;
        for (let s = 1; s <= segs; s++) {
            const u = s / segs;
            const om = 1 - u;
            _curveCur.set(0, 0, 0)
                .addScaledVector(_curveA, om * om)
                .addScaledVector(_curveMid, 2 * om * u)
                .addScaledVector(_curveB, u * u);
            // Tiny stable mycelial jitter — biggest near middle, tiny at ends
            const jw = Math.sin(u * Math.PI) * 0.012;
            _curveCur.x += hash(s * 1.0) * jw;
            _curveCur.y += hash(s * 2.7) * jw;
            _curveCur.z += hash(s * 5.1) * jw;
            linePosArr[vIdx * 3]         = _curvePrev.x;
            linePosArr[vIdx * 3 + 1]     = _curvePrev.y;
            linePosArr[vIdx * 3 + 2]     = _curvePrev.z;
            linePosArr[(vIdx + 1) * 3]     = _curveCur.x;
            linePosArr[(vIdx + 1) * 3 + 1] = _curveCur.y;
            linePosArr[(vIdx + 1) * 3 + 2] = _curveCur.z;
            lineColArr[vIdx * 3]         = rC;
            lineColArr[vIdx * 3 + 1]     = gC;
            lineColArr[vIdx * 3 + 2]     = bC;
            lineColArr[(vIdx + 1) * 3]     = rC;
            lineColArr[(vIdx + 1) * 3 + 1] = gC;
            lineColArr[(vIdx + 1) * 3 + 2] = bC;
            vIdx += 2;
            _curvePrev.copy(_curveCur);
        }
        return vIdx;
    }

    const _stickyA = new THREE.Vector3();

    // Find the corner of `bCorners` closest to point `aPt` — gives the "filament jumps to nearest edge" feel.
    function nearestCornerIdx(aPt, bCorners) {
        let best = 0, bestD = Infinity;
        for (let i = 0; i < 4; i++) {
            const d = aPt.distanceToSquared(bCorners[i]);
            if (d < bestD) { bestD = d; best = i; }
        }
        return best;
    }

    // (Background haze dots removed.)
    const haloGeo = new THREE.BufferGeometry();
    const haloMat = new THREE.PointsMaterial({ size: 0, opacity: 0, transparent: true });
    const halo = new THREE.Points(haloGeo, haloMat);
    halo.visible = false;
    scene.add(halo);

    let isLightMode = true;
    const _baseColor = new THREE.Color(0xffffff);
    const _redColor  = new THREE.Color(0xdc143c);
    const _tmpColor  = new THREE.Color();

    function applyTheme() {
        const bgHex = isLightMode ? 0xf4f4f4 : 0x050505;
        renderer.setClearColor(bgHex, 1);
        scene.fog.color.setHex(bgHex);
        _holoFogColor.setHex(bgHex);                 // shared across all word materials
        _baseColor.setHex(isLightMode ? 0x141416 : 0xffffff);
        haloMat.color.setHex(isLightMode ? 0x222222 : 0xffffff);
        haloMat.opacity   = isLightMode ? 0.20 : 0.25;
        haloMat.blending  = isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
        haloMat.needsUpdate = true;
        lineMat.blending  = isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
        lineMat.needsUpdate = true;
    }

    applyTheme();

    themeBtn.onclick = () => {
        isLightMode = !isLightMode;
        container.classList.toggle('is-light', isLightMode);
        container.classList.toggle('is-dark', !isLightMode);
        applyTheme();
    };

    let targetVortexScale  = 1.0;
    let currentVortexScale = 1.0;

    infoBtn.onclick = () => {
        const isActive = !container.classList.contains('info-active');
        container.classList.toggle('info-active', isActive);
        infoBtn.classList.toggle('active', isActive);
        if (isActive) {
            // Auto pull-back so the sidebar text has room to breathe.
            targetZoom = 0;
            targetVortexScale = 0.5;     // shrink the whole vortex too
            orbitTheta = HOME_THETA;
            orbitPhi   = HOME_PHI;
            panOffset.set(0, 0, 0);
            syncZoomThumb();
        } else {
            targetVortexScale = 1.0;
        }
    };

    let rafId;
    let lastTime = performance.now();
    // Cached vortex-local corner (after applying layer rotation)
    const _vortexCorner = new THREE.Vector3();
    function vortexCorner(p, cornerIdx) {
        const c = p.corners[cornerIdx];
        const ry = layers[p.layerIdx].rotation.y;
        const cs = Math.cos(ry), sn = Math.sin(ry);
        _vortexCorner.set(
            c.x * cs + c.z * sn,
            c.y,
            -c.x * sn + c.z * cs,
        );
        return _vortexCorner;
    }
    function animate(now) {
        rafId = requestAnimationFrame(animate);
        const dt = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;
        // Smooth zoom toward target; re-layout when changed; uniform always synced
        zoomLevel += (targetZoom - zoomLevel) * Math.min(1, dt * 4.5);
        if (Math.abs(zoomLevel - lastZoomApplied) > 0.0008) {
            applyZoom(zoomLevel);
            lastZoomApplied = zoomLevel;
        }
        _holoZoom.value = zoomLevel;
        // Smoothly lerp the vortex scale (info mode shrinks the whole field)
        currentVortexScale += (targetVortexScale - currentVortexScale) * Math.min(1, dt * 4);
        vortex.scale.setScalar(currentVortexScale);
        updateCamera();
        // Each layer ring rotates at its own random speed (set at init)
        for (let i = 0; i < LAYER_COUNT; i++) {
            layers[i].rotation.y += layerSpeeds[i] * dt;
        }

        // Reset all targets
        for (let i = 0; i < particles.length; i++) particles[i].targetGlow = 0;
        const trailGlows = [1.0, 0.6, 0.3, 0.1];

        // Random spawns: every nextSpawnIn seconds add a new spark from a random end
        nextSpawnIn -= dt;
        while (nextSpawnIn <= 0 && sparks.length < MAX_SPARKS) {
            spawnSpark();
            nextSpawnIn += SPAWN_INTERVAL_MIN + Math.random() * (SPAWN_INTERVAL_MAX - SPAWN_INTERVAL_MIN);
        }

        // Advance every spark toward its target (the spiral centre); assign trail glows.
        // The effective step interval is modulated by the current layer's rotation
        // speed — faster-spinning bands let the spark pass through more quickly.
        for (const spark of sparks) {
            // Smoothly fade dying sparks
            if (spark.dead) {
                spark.fadeOut = Math.max(0, spark.fadeOut - dt * 1.4);   // ~0.7s fade
            } else {
                const curIdx = Math.max(0, Math.min(particleCount - 1, spark.position));
                const layerIdx = particles[curIdx]?.layerIdx ?? 0;
                const layerMag = Math.abs(layerSpeeds[layerIdx]);
                const effInterval = spark.stepInterval / (1 + layerMag * 4.5);
                spark.timer += dt;
                while (spark.timer >= effInterval) {
                    spark.timer -= effInterval;
                    spark.position += spark.direction * spark.stepSize;
                    if ((spark.direction > 0 && spark.position >= spark.target) ||
                        (spark.direction < 0 && spark.position <= spark.target)) {
                        spark.position = spark.target;
                        spark.dead = true;
                    }
                    spark.trail.unshift({
                        idx: spark.position,
                        picks: pickTwoCorners(),
                        bow: (Math.random() - 0.5) * 0.55,
                        age: 0,
                    });
                    while (spark.trail.length > SPARK_TRAIL_LEN) spark.trail.pop();
                    if (spark.dead) break;
                }
            }
            for (const item of spark.trail) item.age += dt;
            for (let k = 0; k < spark.trail.length; k++) {
                const item = spark.trail[k];
                if (item.idx >= 0 && item.idx < particleCount) {
                    const g = (trailGlows[k] || 0) * spark.fadeOut;
                    if (g > particles[item.idx].targetGlow) particles[item.idx].targetGlow = g;
                }
            }
        }
        // Reap fully-faded sparks
        sparks = sparks.filter(s => s.fadeOut > 0.001);

        // Per-particle update: lerp glow, derive color & scale & opacity
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.glow += (p.targetGlow - p.glow) * Math.min(1, dt * 6.5);
            const g = p.glow;
            // Color: lerp white (or dark in light mode) → crimson
            _tmpColor.copy(_baseColor).lerp(_redColor, g);
            p.sprite.material.uniforms.uColor.value.copy(_tmpColor);
            // Opacity: stronger when glowing; bump for light mode legibility
            const opBoost = isLightMode ? 1.45 : 1.0;
            p.sprite.material.uniforms.uOpacity.value =
                Math.min(1, opBoost * (p.baseOpacity * (1 - g * 0.2) + g * 0.7));
            p.sprite.material.uniforms.uGlow.value = g;
            // Scale: subtle pulse on glow
            const sc = 1 + g * 0.6;
            p.sprite.scale.set(p.baseScale.x * sc, p.baseScale.y * sc, 1);
        }

        // (Cascade connection threads removed — sparks now manifest only as
        // glowing/fading word highlights without any drawn filaments.)
        lineGeo.setDrawRange(0, 0);

        renderer.render(scene, camera);
    }
    rafId = requestAnimationFrame(animate);

    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    backBtn.onclick = () => {
        container.style.opacity = '0';
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', onResize);
        setTimeout(() => {
            container.remove();
            renderer.dispose();
            for (const p of particles) p.sprite.material.dispose();
            for (const v of texCache.values()) v.tex.dispose();
            flatPlaneGeo.dispose();
            lineGeo.dispose(); lineMat.dispose();
            haloGeo.dispose(); haloMat.dispose();
        }, 600);
    };

    requestAnimationFrame(() => container.style.opacity = '1');
}

// ─────────────────────────────────────────────────────────────────────
// THEME 5 — RESISTANCE
// "한 사람의 침묵이 거짓의 합창을 가른다"
// A scrolling field of propaganda phrases. The user clicks anywhere; a
// silent ripple expands and redacts every phrase it touches. The chorus
// always returns — but each refusal leaves a circle that was real.
// ─────────────────────────────────────────────────────────────────────
function openResistanceSubpage(clickedCell) {
    const PROPAGANDA = [
        // Single words — pure command
        'OBEY','PRODUCE','BELIEVE','REJOICE','SUBMIT','CONFORM',
        'COMPLY','REPORT','DENOUNCE','APPLAUD','CONSENT',
        // Short slogans
        'GLORY TO THE PARTY','THE PLAN IS THE LAW','THE LEADER IS WISE',
        'ALL IS WELL','DO NOT THINK','DOUBT IS BETRAYAL',
        'ENEMIES ARE EVERYWHERE','SILENCE IS CONSENT','WORK IS HONOR',
        'LIES = TRUTH','HISTORY IS WRITTEN','THE FUTURE IS DECIDED',
        'TWO PLUS TWO IS FIVE','OBEDIENCE IS FREEDOM','REJOICE COMRADE',
        'PRAISE THE LEADER','THE ARCHIVE IS CLOSED','WE HAVE ALWAYS WON',
        'THE STATE PROTECTS YOU','THE COLLECTIVE IS ABOVE YOU',
        'DENUNCIATION IS DUTY','THE PARTY IS NEVER WRONG',
        'COMRADE, REPORT YOURSELF','THE PEOPLE ARE GRATEFUL',
        'YOUR NEIGHBOUR IS LISTENING','SLEEP WELL, COMRADE',
        // Mid-length propaganda
        'THE PLAN HAS ALREADY BEEN OVERFULFILLED',
        'HARVESTS ARE ABUNDANT EVERY YEAR',
        'THE WORKERS REJOICE IN THEIR DUTY',
        'LIFE HAS BECOME BETTER, LIFE HAS BECOME MORE JOYFUL',
        'EVERY CITIZEN IS A SOLDIER OF TRUTH',
        'WE OWE EVERYTHING TO THE WISDOM OF THE LEADER',
        'TO DOUBT THE STATE IS TO DOUBT YOUR OWN MOTHER',
        'THE PARTY IS THE CONSCIENCE OF OUR EPOCH',
        'NO ENEMY HAS EVER ENTERED THESE BORDERS',
        'THE FIVE-YEAR PLAN COMPLETED IN FOUR YEARS',
        'THE INTELLIGENTSIA SERVES THE WORKING CLASS',
        'NOTHING IS IMPOSSIBLE FOR THE SOVIET PEOPLE',
        // Long sentences — official speech fragments
        'THERE HAS NEVER BEEN A FAMINE; THERE WILL NEVER BE A FAMINE; ANY REPORT SUGGESTING OTHERWISE IS ENEMY DISINFORMATION.',
        'OUR GLORIOUS NATION ADVANCES WITHOUT PAUSE FROM VICTORY TO VICTORY ALONG THE PATH ILLUMINATED BY THE TEACHINGS OF OUR LEADER.',
        'ANY CITIZEN WHO HEARS WHISPERS OF DOUBT IS HEREBY OBLIGED TO REPORT THEM AT ONCE TO THE NEAREST ORGAN OF STATE SECURITY.',
        'UNHAPPINESS IS A SYMPTOM OF IDEOLOGICAL INFECTION; SEEK TREATMENT; THE STATE PROVIDES TREATMENT; TREATMENT IS COMPULSORY.',
        'HE WHO REMEMBERS THE OLD WAY IS THE OLD WAY; LET MEMORY BE TRIMMED LIKE FINGERNAILS, WEEKLY, WITHOUT REGRET.',
        'STATISTICS HAVE BEEN UPDATED IN ACCORDANCE WITH HISTORICAL TRUTH; PRIOR EDITIONS ARE WITHDRAWN AND POSSESSION IS A CRIME.',
        'THE CHORUS OF MILLIONS PROVES WHAT NO INDIVIDUAL CAN PROVE; A SOLITARY VOICE THAT DISAGREES IS, BY DEFINITION, INSANE.',
        'PRODUCTION TARGETS HAVE BEEN EXCEEDED IN EVERY SECTOR EVERY QUARTER; ANY EVIDENCE TO THE CONTRARY HAS ALREADY BEEN ARCHIVED.',
        'THE PROBLEM YOU ARE EXPERIENCING DOES NOT EXIST; IF IT EXISTED IT WOULD BE BEING SOLVED; IT IS NOT BEING SOLVED BECAUSE IT DOES NOT EXIST.',
        'THERE ARE NO POLITICAL PRISONERS; THERE ARE ONLY CITIZENS UNDERGOING PERSONAL CORRECTION FOR THEIR OWN GOOD AND THE GOOD OF ALL.',
    ];

    const container = document.createElement('div');
    container.id = 'resistance-subpage';
    container.className = 'is-light';
    container.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 2000; opacity: 0; transition: opacity 0.5s ease; overflow: hidden;
        display: grid; grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 100%; gap: 2.5rem; padding: 0 3.5rem;
    `;

    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn is-light';
    backBtn.title = 'BACK';
    backBtn.setAttribute('data-tip', 'BACK TO INDEX');
    container.appendChild(backBtn);

    const themeBtn = document.createElement('div');
    themeBtn.className = 'theme-toggle-wrapper is-light';
    themeBtn.title = 'DARK / LIGHT';
    themeBtn.setAttribute('data-tip', 'DARK MODE');
    themeBtn.innerHTML = '<div class="slider-knob"></div>';
    container.appendChild(themeBtn);

    const infoBtn = document.createElement('div');
    infoBtn.className = 'info-icon-btn is-light';
    infoBtn.title = 'BRIEFING';
    infoBtn.setAttribute('data-tip', 'BRIEFING');
    infoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    container.appendChild(infoBtn);

    const guideText = document.createElement('div');
    guideText.className = 'overlay-text-guide is-light';
    armGuideFade(container);
    guideText.innerHTML = 'CLICK / HOLD ANYWHERE<br>TO REFUSE THE LIE';
    container.appendChild(guideText);

    // Sidebars (info mode)
    const sidebarLeft = document.createElement('div');
    sidebarLeft.className = 'physics-sidebar left';
    const sidebarRight = document.createElement('div');
    sidebarRight.className = 'physics-sidebar right';

    const headerBox = document.createElement('div');
    headerBox.className = 'faint-text-box';
    headerBox.innerHTML = `
        <div class="doc-header">
            <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">AN ORDINARY PERSON</span></div>
            <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">THE SYSTEM</span></div>
            <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">BYSTANDERS</span></div>
            <div class="doc-divider"></div>
            <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value" style="color:#dc143c; font-weight:700;">RESISTANCE</span></div>
            <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value">██████████</span></div>
            <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">DOC██████</span></div>
            <div class="doc-divider"></div>
        </div>
    `;
    sidebarLeft.appendChild(headerBox);

    const paraBox = document.createElement('div');
    paraBox.className = 'faint-text-box paragraph-box';
    paraBox.innerHTML = `
        <div class="text-content" style="max-height:none; overflow:visible;">
            <div style="margin-bottom:24px;">
                <span style="color:#dc143c; font-weight:600;">"Let the lie come into the world, but not through me."</span><br>
                And it is not every day and not on every shoulder that violence brings down its paw. It demands of us only a submission to lies, a daily participation in deceit — and this suffices as our fealty.
            </div>
            <div style="margin-bottom:24px;">
                <span style="color:#dc143c; font-weight:600;">"One word of truth outweighs the world."</span><br>
                The simplest, the most accessible key to our liberation: a personal nonparticipation in lies. Even if all is covered by lies, even if all is under their rule, let us resist in the smallest way: let it not rule through me.
            </div>
            <div style="margin-bottom:0;">
                <span style="color:#dc143c; font-weight:600;">"The simplest, most accessible key."</span><br>
                We do not have to be brave. We do not have to march. We have only to refuse to repeat what we know is false. The lie's whole strength rests on our voices. Withdraw the voice, and a hole opens in the air.
            </div>
        </div>
    `;
    sidebarLeft.appendChild(paraBox);

    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'faint-text-box';
    narrativeBox.innerHTML = `
        <div class="text-content">
            The chorus doesn't stop. Slogans run across the page in every direction, the same phrases repeating until the repetition starts to feel like the truth.
            <br><br>
            That's how a regime sounds. Not one voice. A field dense enough that any quiet thought has to push against ambient noise just to be heard.
            <br><br>
            Solzhenitsyn doesn't ask anyone to overturn it. He asks one thing: don't repeat what you know is false. The whole structure runs on borrowed voices. Take your voice back and a hole opens.
            <br><br>
            A click here is that hole. The slogans inside the circle go silent. The circle expands and the chorus refills — it always does. But the silence happened. It can't be undone.
        </div>
    `;
    sidebarRight.appendChild(narrativeBox);

    container.appendChild(sidebarLeft);
    container.appendChild(sidebarRight);
    document.body.appendChild(container);

    // Canvas2D field
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute; inset:0; width:100vw; height:100vh; z-index:1;';
    container.insertBefore(canvas, container.firstChild);
    const ctx = canvas.getContext('2d');

    let dpr = Math.min(2, window.devicePixelRatio || 1);
    function sizeCanvas() {
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    sizeCanvas();

    // Build rows of marching propaganda — vertical spacing tuned so the
    // tallest font (16px) never bleeds into the row above or below.
    const ROW_COUNT = 9;
    const FONTS = [
        '600 12px "Inter", sans-serif',
        '700 13px "Inter", sans-serif',
        '500 11px "JetBrains Mono", monospace',
        '800 14px "Noto Sans", sans-serif',
        '400 11px "JetBrains Mono", monospace',
        '700 13px "Inter", sans-serif',
        'italic 500 12px "Inter", sans-serif',
        '900 15px "Noto Sans", sans-serif',
        '400 12px "Inter", sans-serif',
        'italic 600 11px "JetBrains Mono", monospace',
        '500 12px "Inter", sans-serif',
        '600 14px "Inter", sans-serif',
    ];

    // Per-phrase font picker — each phrase can have its own font for max variety
    function pickPhraseFont() { return FONTS[Math.floor(Math.random() * FONTS.length)]; }
    let isLightMode = true;
    function bgColor()    { return isLightMode ? '#f4f4f4' : '#050505'; }
    function textColor()  { return isLightMode ? 'rgba(15,15,15,0.92)' : 'rgba(245,245,245,0.92)'; }
    function silentColor(){ return isLightMode ? 'rgba(15,15,15,0.10)' : 'rgba(245,245,245,0.10)'; }

    const rows = [];
    function makePhraseAt(x, rowH) {
        const text = PROPAGANDA[Math.floor(Math.random() * PROPAGANDA.length)];
        const font = pickPhraseFont();
        ctx.font = font;
        const w = ctx.measureText(text).width;
        const yJitter = (Math.random() - 0.5) * (rowH * 0.85);
        // depth: 0 = far/faint, 1 = near/dense — gives the chorus visual layers
        const depth = Math.random();
        return { text, font, x, w, yJitter, depth, silenceT: -1 };
    }
    function buildRows() {
        rows.length = 0;
        const H = window.innerHeight;
        const rowH = H / ROW_COUNT;
        for (let i = 0; i < ROW_COUNT; i++) {
            const dir = (i % 2 === 0) ? 1 : -1;
            const speed = (15 + Math.random() * 30) * dir;
            const y = rowH * (i + 0.5);
            const phrases = [];
            // Pack densely — phrases bleed into each other (chorus = saturation)
            let x = (dir > 0 ? -window.innerWidth * 0.7 : window.innerWidth * 0.7);
            const limit = window.innerWidth * 2.5;
            let safety = 0;
            while (Math.abs(x) < limit && safety++ < 320) {
                const p = makePhraseAt(x, rowH);
                phrases.push(p);
                // Negative gap means deliberate overlap; phrases pile up
                const step = (p.w * 0.45 + 20 + Math.random() * 60);
                x += step * (dir > 0 ? 1 : -1);
            }
            rows.push({ y, dir, speed, phrases, rowH });
        }
    }
    buildRows();

    // Ripples
    const ripples = [];
    function spawnRipple(cx, cy) {
        ripples.push({
            x: cx, y: cy,
            r: 0,
            maxR: Math.hypot(window.innerWidth, window.innerHeight) * 0.65,
            speed: 320 + Math.random() * 80,   // px/s
            t: 0,
            seen: new Set(),    // phrase keys already silenced
        });
    }

    // Pointer interaction
    let pointerDown = false;
    let lastEmit = 0;
    let cursorX = -9999, cursorY = -9999;
    container.addEventListener('pointermove', (e) => {
        cursorX = e.clientX; cursorY = e.clientY;
    });
    container.addEventListener('pointerdown', (e) => {
        if (container.classList.contains('info-active')) return;
        pointerDown = true;
        spawnRipple(e.clientX, e.clientY);
        lastEmit = performance.now();
    });
    window.addEventListener('pointerup', () => { pointerDown = false; });
    container.addEventListener('pointerleave', () => { cursorX = cursorY = -9999; });

    // Auto idle ripples — other quiet refusals elsewhere
    let nextIdle = 1.5 + Math.random() * 2;

    let last = performance.now();
    let rafId;
    function frame(now) {
        rafId = requestAnimationFrame(frame);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;

        // Continuous emission while held
        if (pointerDown && now - lastEmit > 380) {
            spawnRipple(cursorX, cursorY);
            lastEmit = now;
        }
        // Idle "other people" ripples — paused while reading info
        if (!container.classList.contains('info-active')) {
            nextIdle -= dt;
            if (nextIdle <= 0) {
                spawnRipple(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
                nextIdle = 2.5 + Math.random() * 4.0;
            }
        }

        // Background
        ctx.fillStyle = bgColor();
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // Update + draw rows
        const W = window.innerWidth;
        for (const row of rows) {
            // March
            for (const p of row.phrases) p.x += row.speed * dt;
            // Wrap: phrases off-screen on the trailing side respawn at the leading edge as fresh slogans
            if (row.dir > 0) {
                let maxX = -Infinity;
                for (const p of row.phrases) maxX = Math.max(maxX, p.x + p.w);
                for (const p of row.phrases) {
                    if (p.x > W + 20) {
                        p.text = PROPAGANDA[Math.floor(Math.random() * PROPAGANDA.length)];
                        p.font = pickPhraseFont();
                        ctx.font = p.font;
                        p.w = ctx.measureText(p.text).width;
                        p.x = maxX + 80;
                        maxX = p.x + p.w;
                        p.silenceT = -1;
                    }
                }
            } else {
                let minX = Infinity;
                for (const p of row.phrases) minX = Math.min(minX, p.x);
                for (const p of row.phrases) {
                    if (p.x + p.w < -20) {
                        p.text = PROPAGANDA[Math.floor(Math.random() * PROPAGANDA.length)];
                        p.font = pickPhraseFont();
                        ctx.font = p.font;
                        p.w = ctx.measureText(p.text).width;
                        p.x = minX - p.w - 80;
                        minX = p.x;
                        p.silenceT = -1;
                    }
                }
            }
            // Update silence timers
            for (const p of row.phrases) if (p.silenceT >= 0) p.silenceT += dt;
        }

        // Update ripples and silence collisions
        for (const rp of ripples) {
            const prevR = rp.r;
            rp.r += rp.speed * dt;
            rp.t += dt;
            // Check phrases inside expanding band
            for (const row of rows) {
                for (const p of row.phrases) {
                    if (p.silenceT >= 0) continue;
                    const cx = p.x + p.w * 0.5;
                    const dx = cx - rp.x;
                    const dy = row.y - rp.y;
                    const d  = Math.hypot(dx, dy);
                    if (d <= rp.r && d >= prevR - 30) p.silenceT = 0;
                }
            }
        }
        // Cull dead ripples
        for (let i = ripples.length - 1; i >= 0; i--) {
            if (ripples[i].r > ripples[i].maxR) ripples.splice(i, 1);
        }

        // ── Render in two passes so the user can always read which phrase
        //    the ripple just touched, even in a dense overlapping field.
        // Pass 1: living chorus — depth-varied opacity, drawn behind.
        ctx.textBaseline = 'middle';
        for (const row of rows) {
            for (const p of row.phrases) {
                if (p.silenceT >= 0) continue;
                if (p.x + p.w < 0 || p.x > W) continue;
                ctx.font = p.font;
                // Depth-based opacity: far=0.28 → near=0.95
                ctx.globalAlpha = 0.28 + p.depth * 0.67;
                ctx.fillStyle = textColor();
                ctx.fillText(p.text, p.x, row.y + (p.yJitter || 0));
            }
        }
        ctx.globalAlpha = 1;

        // Pass 2: silenced / refusal — drawn ON TOP, brighter, with a
        // background plate so it's legible no matter what's behind it.
        for (const row of rows) {
            for (const p of row.phrases) {
                if (p.silenceT < 0) continue;
                if (p.x + p.w < 0 || p.x > W) continue;
                ctx.font = p.font;
                const py = row.y + (p.yJitter || 0);
                {
                    const t = p.silenceT;
                    if (t < 0.35) {
                        // Pop a clean plate first to lift this phrase out of the pile
                        ctx.fillStyle = bgColor();
                        ctx.globalAlpha = 0.95;
                        ctx.fillRect(p.x - 6, py - 12, p.w + 12, 24);
                        ctx.globalAlpha = 1;
                        // Bold redaction block
                        ctx.fillStyle = '#dc143c';
                        ctx.globalAlpha = 1 - t / 0.35 * 0.25;
                        ctx.fillRect(p.x - 4, py - 11, p.w + 8, 22);
                        ctx.globalAlpha = 1;
                    } else if (t < 1.05) {
                        const fade = Math.max(0, 1 - (t - 0.35) / 0.7);
                        // Plate so the dying phrase reads against the pile
                        ctx.fillStyle = bgColor();
                        ctx.globalAlpha = 0.85 * fade;
                        ctx.fillRect(p.x - 4, py - 11, p.w + 8, 22);
                        ctx.globalAlpha = 0.10 + 0.7 * fade;
                        ctx.fillStyle = silentColor();
                        ctx.fillText(p.text, p.x, py);
                        ctx.globalAlpha = 1;
                        if (fade > 0) {
                            ctx.strokeStyle = `rgba(220,20,60,${0.7 * fade})`;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(p.x, py);
                            ctx.lineTo(p.x + p.w, py);
                            ctx.stroke();
                        }
                    } else if (t < 2.0) {
                        // Brief blank silence — the circle that was real
                    } else {
                        // Chorus returns — reappear as a fresh slogan of any length
                        if (p.respawned !== true) {
                            p.text = PROPAGANDA[Math.floor(Math.random() * PROPAGANDA.length)];
                            p.font = pickPhraseFont();
                            ctx.font = p.font;
                            p.w = ctx.measureText(p.text).width;
                            p.depth = Math.random();
                            p.respawned = true;
                        }
                        const reveal = Math.min(1, (t - 2.0) / 0.5);
                        ctx.globalAlpha = reveal * (0.28 + p.depth * 0.67);
                        ctx.fillStyle = textColor();
                        ctx.fillText(p.text, p.x, py);
                        ctx.globalAlpha = 1;
                        if (reveal >= 1) {
                            p.silenceT = -1;
                            p.respawned = false;
                        }
                    }
                }
            }
        }

        // Draw ripples
        for (const rp of ripples) {
            const lifeT = rp.r / rp.maxR;
            ctx.strokeStyle = `rgba(220,20,60,${(1 - lifeT) * 0.85})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
            ctx.stroke();
            // Inner softer ring
            ctx.strokeStyle = `rgba(220,20,60,${(1 - lifeT) * 0.35})`;
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.arc(rp.x, rp.y, Math.max(0, rp.r - 12), 0, Math.PI * 2);
            ctx.stroke();
        }

        // Cursor crosshair (subtle)
        if (cursorX > 0 && !container.classList.contains('info-active')) {
            ctx.strokeStyle = `rgba(220,20,60,0.7)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(cursorX, cursorY, 6, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    rafId = requestAnimationFrame(frame);

    function onResize() {
        dpr = Math.min(2, window.devicePixelRatio || 1);
        sizeCanvas();
        buildRows();
    }
    window.addEventListener('resize', onResize);

    // Theme toggle
    themeBtn.onclick = () => {
        isLightMode = !isLightMode;
        themeBtn.classList.toggle('is-light', isLightMode);
        backBtn.classList.toggle('is-light', isLightMode);
        infoBtn.classList.toggle('is-light', isLightMode);
        guideText.classList.toggle('is-light', isLightMode);
        container.classList.toggle('is-dark', !isLightMode);
        container.classList.toggle('is-light', isLightMode);
    };

    // Info toggle
    infoBtn.onclick = () => {
        const isActive = !container.classList.contains('info-active');
        container.classList.toggle('info-active', isActive);
        infoBtn.classList.toggle('active', isActive);
    };

    // Back
    backBtn.onclick = () => {
        container.style.opacity = '0';
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', onResize);
        setTimeout(() => container.remove(), 500);
    };

    requestAnimationFrame(() => container.style.opacity = '1');
}

// ─────────────────────────────────────────────────────────────────────
// THEME 6 — BUT NOT THROUGH ME
// A conveyor belt of propaganda papers. The user controls one button:
// each press advances the belt by exactly one slot, stamping the paper
// at the inspection station with their personal APPROVED. A wall of eyes
// watches; the longer you don't press, the more they redden — but they
// never punish. The lie continues, but it does not continue through you.
// ─────────────────────────────────────────────────────────────────────
function openNotThroughMeSubpage(clickedCell) {
    const container = document.createElement('div');
    container.id = 'notthroughme-subpage';
    container.className = 'is-light';
    container.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 2000; opacity: 0; transition: opacity 0.5s ease; overflow: hidden;
        display: grid; grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 100%; gap: 2.5rem; padding: 0 3.5rem;
    `;

    // UI
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn is-light';
    backBtn.title = 'BACK';
    backBtn.setAttribute('data-tip', 'BACK TO INDEX');
    container.appendChild(backBtn);

    const themeBtn = document.createElement('div');
    themeBtn.className = 'theme-toggle-wrapper is-light';
    themeBtn.title = 'DARK / LIGHT';
    themeBtn.setAttribute('data-tip', 'DARK MODE');
    themeBtn.innerHTML = '<div class="slider-knob"></div>';
    container.appendChild(themeBtn);

    const infoBtn = document.createElement('div');
    infoBtn.className = 'info-icon-btn is-light';
    infoBtn.title = 'BRIEFING';
    infoBtn.setAttribute('data-tip', 'BRIEFING');
    infoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    container.appendChild(infoBtn);

    const guideText = document.createElement('div');
    guideText.className = 'overlay-text-guide is-light';
    armGuideFade(container);
    guideText.innerHTML = 'CLICK TO BLIND THE EYES<br>THEY ALWAYS RETURN';
    container.appendChild(guideText);

    // Sidebars
    const sidebarLeft = document.createElement('div');
    sidebarLeft.className = 'physics-sidebar left';
    const sidebarRight = document.createElement('div');
    sidebarRight.className = 'physics-sidebar right';

    const headerBox = document.createElement('div');
    headerBox.className = 'faint-text-box';
    headerBox.innerHTML = `
        <div class="doc-header">
            <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">THE LIE</span></div>
            <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">ME</span></div>
            <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">[REDACTED]</span></div>
            <div class="doc-divider"></div>
            <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value" style="color:#dc143c; font-weight:700;">BUT NOT THROUGH ME</span></div>
            <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value">██████████</span></div>
            <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">DOC██████</span></div>
            <div class="doc-divider"></div>
        </div>
    `;
    sidebarLeft.appendChild(headerBox);

    const paraBox = document.createElement('div');
    paraBox.className = 'faint-text-box paragraph-box';
    paraBox.innerHTML = `
        <div class="text-content" style="max-height:none; overflow:visible;">
            <div style="margin-bottom:24px;">
                <span style="color:#dc143c; font-weight:600;">"Let it not rule through me."</span><br>
                The simplest, the most accessible key to our liberation: a personal nonparticipation in lies. Even if all is covered by lies, even if all is under their rule, let us resist in the smallest way: let it not rule through me.
            </div>
            <div style="margin-bottom:24px;">
                <span style="color:#dc143c; font-weight:600;">"Whoever vows to survive at any price..."</span><br>
                Whoever vows to survive at any price has already decided to survive at someone else's expense.
            </div>
            <div style="margin-bottom:0;">
                <span style="color:#dc143c; font-weight:600;">"There comes a fork in the road."</span><br>
                For every person regardless of calling there comes a great fork in the road. If you go to the right you lose your life. If you go to the left you lose your conscience.
            </div>
        </div>
    `;
    sidebarLeft.appendChild(paraBox);

    const narrativeBox = document.createElement('div');
    narrativeBox.className = 'faint-text-box';
    narrativeBox.innerHTML = `
        <div class="text-content">
            The eyes never stop falling — a curtain of watchers that doesn't end.
            <br><br>
            Each eye is a pair of brackets around a red pupil. The pupils track the cursor. There's no angle that isn't already seen, and no waiting it out: fall through the bottom and a new column has already started at the top.
            <br><br>
            Solzhenitsyn doesn't say the wall can come down. He says something smaller and harder. At every fork in the road, you can refuse to become one of the watchers. The eyes continue. The question is whether they continue through you.
            <br><br>
            A click is that refusal. Every visible pupil fires inward, and the eyes in that zone go dark for a moment — blinded by being looked back at. The rain refills. But the hole was there.
        </div>
    `;
    sidebarRight.appendChild(narrativeBox);

    container.appendChild(sidebarLeft);
    container.appendChild(sidebarRight);

    // Wall of eyes — Matrix rain rendered to a single canvas (no per-eye DOM).
    const wall = document.createElement('canvas');
    wall.className = 'ntm-wall';
    const ctx = wall.getContext('2d', { alpha: true });
    const BRACKETS = [['(', ')'], ['{', '}'], ['[', ']']];
    let VPW = window.innerWidth;
    let VPH = window.innerHeight;
    // No belt anymore — let the rain fill the full viewport, despawning at the bottom.
    let BELT_TOP_PX = VPH - 20;
    const EYE_FS   = 26;
    const EYE_H    = 14;          // visual eye height
    const COL_W    = 38;
    let COL_COUNT = Math.max(8, Math.floor(VPW / COL_W));
    let COL_PAD  = (VPW - COL_COUNT * COL_W) / 2 + COL_W / 2;
    const FADE_BAND = 120;

    // Pre-render bracket sprites (one per bracket pair) onto offscreen canvases.
    // Per frame we drawImage these — vastly cheaper than fillText × N.
    const SPRITE_W = 22, SPRITE_H = 22;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    function buildBracketSprite(open, close, color) {
        const c = document.createElement('canvas');
        c.width = SPRITE_W * dpr;
        c.height = SPRITE_H * dpr;
        const g = c.getContext('2d');
        g.scale(dpr, dpr);
        g.font = `200 ${EYE_FS}px 'JetBrains Mono', monospace`;
        g.fillStyle = color;
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        // Brackets rotated 90° — matches the original ('rotate(90deg)') eye look
        g.save();
        g.translate(SPRITE_W / 2, SPRITE_H / 2 - EYE_H * 0.42);
        g.rotate(Math.PI / 2);
        g.fillText(open, 0, 0);
        g.restore();
        g.save();
        g.translate(SPRITE_W / 2, SPRITE_H / 2 + EYE_H * 0.42);
        g.rotate(Math.PI / 2);
        g.fillText(close, 0, 0);
        g.restore();
        return c;
    }
    let bracketSprites = [];
    let bracketSpritesGray = [];
    function rebuildSprites() {
        const dark = container.classList.contains('is-dark');
        const color = dark ? 'rgba(230,230,230,0.85)' : 'rgba(20,20,20,0.7)';
        const gray  = dark ? 'rgba(150,150,150,0.45)' : 'rgba(120,120,120,0.45)';
        bracketSprites     = BRACKETS.map(([o, c]) => buildBracketSprite(o, c, color));
        bracketSpritesGray = BRACKETS.map(([o, c]) => buildBracketSprite(o, c, gray));
    }
    rebuildSprites();

    // Drop = pure data; no DOM per eye.
    const columns = [];
    for (let c = 0; c < COL_COUNT; c++) {
        columns.push({
            x: COL_PAD + c * COL_W,
            speed: 60 + Math.random() * 80,
            gap:   EYE_H + 18 + Math.random() * 14,
            drops: [],
        });
    }
    function newDrop(y) {
        return {
            y,
            sprite: Math.floor(Math.random() * bracketSprites.length),
            // Pupil offset (current and target) for tracking
            pdx: 0, pdy: 0, tdx: 0, tdy: 0,
        };
    }
    for (const col of columns) {
        let y = -Math.random() * 200;
        while (y < BELT_TOP_PX) {
            col.drops.push(newDrop(y));
            y += col.gap;
        }
    }

    function resizeCanvas() {
        wall.width = VPW * dpr;
        wall.height = VPH * dpr;
        wall.style.width = VPW + 'px';
        wall.style.height = VPH + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();
    container.appendChild(wall);

    // Pupils follow the mouse — no idle drift, no focus snap, no blink.
    let mouseX = VPW / 2;
    let mouseY = VPH / 2;
    function onMouseMove(e) { mouseX = e.clientX; mouseY = e.clientY; }
    window.addEventListener('mousemove', onMouseMove);

    // Click → every visible pupil fires a laser converging at the click point,
    // and a circular zone of dimmed/grayed eyes persists at the impact site.
    const lasers = [];
    const zones = [];
    const ZONE_RADIUS = 160;
    const LASER_LIFE = 260; // ms
    const ZONE_RECOVERY = 3500; // ms — eyes inside the click zone gradually return
    function onClickWall(e) {
        const r = wall.getBoundingClientRect();
        const cx = e.clientX - r.left;
        const cy = e.clientY - r.top;
        const PUPIL_DX_RANGE = EYE_FS * 0.18;
        const PUPIL_DY_RANGE = EYE_FS * 0.10;
        const sources = [];
        for (const col of columns) {
            for (const d of col.drops) {
                if (d.y < -10 || d.y > VPH + 10) continue;
                sources.push({
                    x: col.x + d.pdx * PUPIL_DX_RANGE,
                    y: d.y   + d.pdy * PUPIL_DY_RANGE,
                });
            }
        }
        const tNow = performance.now();
        lasers.push({ sources, cx, cy, t0: tNow });
        zones.push({ cx, cy, r2: ZONE_RADIUS * ZONE_RADIUS, t0: tNow });
    }
    wall.addEventListener('click', onClickWall);

    let isLightMode = true;
    let rafId;
    let lastT = performance.now();
    function frame(now) {
        rafId = requestAnimationFrame(frame);
        const dt = Math.min(0.05, (now - lastT) / 1000);
        lastT = now;

        // --- Matrix rain (canvas) ---
        const infoActive = container.classList.contains('info-active');
        const dimFactor = 1;
        // Soft elliptical mask applied per-eye when info-active so the rain
        // stays out of the sidebar columns. Computed in canvas, not CSS, so
        // there is no visible boundary on the dark container background.
        const cx0 = VPW * 0.5, cy0 = VPH * 0.5;
        const rx = VPW * 0.30, ry = VPH * 0.40;
        function infoAlpha(x, y) {
            if (!infoActive) return 1;
            const nx = (x - cx0) / rx;
            const ny = (y - cy0) / ry;
            const r = Math.sqrt(nx * nx + ny * ny);
            // Full alpha until 0.6r, smooth fade to 0 at 1.0r
            if (r <= 0.6) return 1;
            if (r >= 1) return 0;
            const t = (r - 0.6) / 0.4;
            return 1 - t * t * (3 - 2 * t); // smoothstep
        }
        ctx.clearRect(0, 0, VPW, VPH);
        const PUPIL_SIZE = Math.round(EYE_FS * 0.28);
        const PUPIL_HALF = PUPIL_SIZE / 2;
        const PUPIL_DX_RANGE = EYE_FS * 0.18;
        const PUPIL_DY_RANGE = EYE_FS * 0.10;
        const SPRITE_HALF_W = SPRITE_W / 2;
        const SPRITE_HALF_H = SPRITE_H / 2;
        // Decay click zones; drop ones that have fully recovered
        for (let z = zones.length - 1; z >= 0; z--) {
            const zn = zones[z];
            zn.strength = Math.max(0, 1 - (now - zn.t0) / ZONE_RECOVERY);
            if (zn.strength <= 0) zones.splice(z, 1);
        }

        for (const col of columns) {
            const speedDt = col.speed * dt;
            let topY = Infinity;
            const drops = col.drops;
            for (let i = drops.length - 1; i >= 0; i--) {
                const d = drops[i];
                d.y += speedDt;
                if (d.y > BELT_TOP_PX) { drops.splice(i, 1); continue; }

                let op = 1;
                if (d.y < 40) op = d.y < 0 ? Math.max(0, 1 + d.y / 60) : d.y / 40;
                const distToBelt = BELT_TOP_PX - d.y;
                if (distToBelt < FADE_BAND) op *= distToBelt / FADE_BAND;
                if (op <= 0.01) { if (d.y < topY) topY = d.y; continue; }

                // Pupil aims at the mouse cursor
                let mdx = mouseX - col.x;
                let mdy = mouseY - d.y;
                const mlen = Math.hypot(mdx, mdy) || 1;
                const tdx = mdx / mlen;
                const tdy = mdy / mlen;
                d.pdx += (tdx - d.pdx) * Math.min(1, dt * 8);
                d.pdy += (tdy - d.pdy) * Math.min(1, dt * 8);

                // Pick the strongest active zone covering this drop
                let dim = 0;
                for (let z = 0; z < zones.length; z++) {
                    const zn = zones[z];
                    const ddx = col.x - zn.cx, ddy = d.y - zn.cy;
                    if (ddx * ddx + ddy * ddy < zn.r2 && zn.strength > dim) dim = zn.strength;
                }

                const ia = infoAlpha(col.x, d.y);
                if (ia <= 0.01) { if (d.y < topY) topY = d.y; continue; }
                if (dim > 0) {
                    ctx.globalAlpha = op * (1 - dim) * dimFactor * ia;
                    ctx.drawImage(bracketSprites[d.sprite],     col.x - SPRITE_HALF_W, d.y - SPRITE_HALF_H, SPRITE_W, SPRITE_H);
                    ctx.globalAlpha = op * dim * 0.55 * dimFactor * ia;
                    ctx.drawImage(bracketSpritesGray[d.sprite], col.x - SPRITE_HALF_W, d.y - SPRITE_HALF_H, SPRITE_W, SPRITE_H);
                } else {
                    ctx.globalAlpha = op * dimFactor * ia;
                    ctx.drawImage(bracketSprites[d.sprite],     col.x - SPRITE_HALF_W, d.y - SPRITE_HALF_H, SPRITE_W, SPRITE_H);
                }
                const pupilA = op * (1 - dim) * dimFactor * ia;
                if (pupilA > 0.02) {
                    ctx.globalAlpha = pupilA;
                    ctx.fillStyle = '#dc143c';
                    const px = col.x + d.pdx * PUPIL_DX_RANGE - PUPIL_HALF;
                    const py = d.y   + d.pdy * PUPIL_DY_RANGE - PUPIL_HALF;
                    ctx.fillRect(px, py, PUPIL_SIZE, PUPIL_SIZE);
                }
                if (d.y < topY) topY = d.y;
            }
            if (topY > col.gap * 0.5) {
                drops.push(newDrop(topY === Infinity ? -EYE_H : topY - col.gap));
            }
        }

        // Lasers — short streak that slides from each source toward the click
        // point; the source end disappears almost immediately as the streak moves.
        if (lasers.length) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#dc143c';
            for (let li = lasers.length - 1; li >= 0; li--) {
                const L = lasers[li];
                const k = (now - L.t0) / LASER_LIFE;
                const headT = Math.min(1, k / 0.45);
                const tailT = Math.min(1, Math.max(0, k - 0.12) / 0.45);
                if (tailT >= 1) { lasers.splice(li, 1); continue; }
                ctx.globalAlpha = 1;
                ctx.beginPath();
                for (let s = 0; s < L.sources.length; s++) {
                    const src = L.sources[s];
                    const dx  = L.cx - src.x;
                    const dy  = L.cy - src.y;
                    ctx.moveTo(src.x + dx * tailT, src.y + dy * tailT);
                    ctx.lineTo(src.x + dx * headT, src.y + dy * headT);
                }
                ctx.stroke();
            }
        }

        ctx.globalAlpha = 1;
    }
    rafId = requestAnimationFrame(frame);

    // Theme toggle
    themeBtn.onclick = () => {
        isLightMode = !isLightMode;
        themeBtn.classList.toggle('is-light', isLightMode);
        backBtn.classList.toggle('is-light', isLightMode);
        infoBtn.classList.toggle('is-light', isLightMode);
        guideText.classList.toggle('is-light', isLightMode);
        container.classList.toggle('is-dark', !isLightMode);
        container.classList.toggle('is-light', isLightMode);
        rebuildSprites();
    };

    let autoInteractInterval = null;
    function fireAutoClick() {
        const r = wall.getBoundingClientRect();
        const padX = r.width * 0.22;
        const padY = r.height * 0.18;
        const cx = r.left + padX + Math.random() * (r.width - padX * 2);
        const cy = r.top  + padY + Math.random() * (r.height - padY * 2);
        onClickWall({ clientX: cx, clientY: cy });
    }
    infoBtn.onclick = () => {
        const isActive = !container.classList.contains('info-active');
        container.classList.toggle('info-active', isActive);
        infoBtn.classList.toggle('active', isActive);
        if (isActive) {
            fireAutoClick();
            autoInteractInterval = setInterval(fireAutoClick, 3200);
        } else if (autoInteractInterval) {
            clearInterval(autoInteractInterval);
            autoInteractInterval = null;
        }
    };

    function onResize() {
        VPW = window.innerWidth;
        VPH = window.innerHeight;
        BELT_TOP_PX = VPH - 20;
        resizeCanvas();
        // Rebuild columns to match the new width
        const oldCount = COL_COUNT;
        COL_COUNT = Math.max(8, Math.floor(VPW / COL_W));
        COL_PAD = (VPW - COL_COUNT * COL_W) / 2 + COL_W / 2;
        if (COL_COUNT !== oldCount) {
            columns.length = 0;
            for (let c = 0; c < COL_COUNT; c++) {
                columns.push({
                    x: COL_PAD + c * COL_W,
                    speed: 60 + Math.random() * 80,
                    gap:   EYE_H + 18 + Math.random() * 14,
                    drops: [],
                });
            }
            for (const col of columns) {
                let y = -Math.random() * 200;
                while (y < BELT_TOP_PX) {
                    col.drops.push(newDrop(y));
                    y += col.gap;
                }
            }
        } else {
            // Keep columns but reposition x to current pad
            for (let c = 0; c < COL_COUNT; c++) columns[c].x = COL_PAD + c * COL_W;
        }
    }
    window.addEventListener('resize', onResize);

    backBtn.onclick = () => {
        container.style.opacity = '0';
        cancelAnimationFrame(rafId);
        if (autoInteractInterval) clearInterval(autoInteractInterval);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('mousemove', onMouseMove);
        wall.removeEventListener('click', onClickWall);
        setTimeout(() => container.remove(), 500);
    };

    document.body.appendChild(container);
    requestAnimationFrame(() => container.style.opacity = '1');
}
