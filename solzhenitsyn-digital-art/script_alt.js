// ─── THEME DATA ───────────────────────────────────────────
const THEMES = [
    {
        id: 1,
        subject: "THE STRUCTURE OF LIES",
        from: "THE STATE",
        to: "THE PEOPLE",
        cc: "DEPARTMENT OF TRUTH",
        date: "██/██/19██",
        ref: "DOC-████-01",
        body: "VIOLENCE CANNOT SURVIVE ALONE. IT AGES QUICKLY AND LOSES ALL CONFIDENCE IN ITSELF SO IT SUMMONS FALSEHOOD AS ITS FAITHFUL ALLY. VIOLENCE CANNOT CONCEAL ITSELF WITHOUT LIES AND LIES CANNOT SUSTAIN THEMSELVES WITHOUT VIOLENCE. TOGETHER THEY FORM A SYSTEM THAT DOES NOT DEMAND DAILY PHYSICAL FORCE UPON EVERY SHOULDER BUT DEMANDS SOMETHING FAR MORE INSIDIOUS. OBEDIENCE TO LIES AND DAILY PARTICIPATION IN THEM. THROUGH THIS PARTNERSHIP LIES HAVE DRAGGED SOCIETY SO FAR FROM NORMALITY THAT NO ONE CAN SEE A SINGLE PILLAR THROUGH THE DENSE GRAY FOG. ONLY WHAT THE RADIO HAMMERS IN DAY AFTER DAY DRILLS INTO THE BRAIN AND EVERYTHING ELSE IS CONVENIENTLY FORGOTTEN. YET THERE EXISTS A SIMPLEST KEY TO LIBERATION. PERSONAL NON-PARTICIPATION IN LIES. THOUGH LIES CONCEAL EVERYTHING AND EMBRACE EVERYTHING THEY NEED NOT DO SO WITH ANY HELP FROM ME. WHEN PEOPLE RENOUNCE FALSEHOOD IT SIMPLY CEASES TO EXIST LIKE AN INFECTION THAT CAN SURVIVE ONLY IN A LIVING ORGANISM."
    },
    {
        id: 2,
        subject: "CENSORSHIP AND SILENCE",
        from: "MINISTRY OF CULTURE",
        to: "ALL PUBLISHERS",
        cc: "CENTRAL CENSORSHIP BUREAU",
        date: "██/██/19██",
        ref: "DOC-████-02",
        body: "CENSORSHIP IS NOT MERELY A VIOLATION OF FREEDOM OF PRINT. IT IS THE CLOSING DOWN OF A NATIONS HEART AND THE SHREDDING OF ITS MEMORY. ONCE THIS HAPPENS THE NATION CEASES TO BE MINDFUL OF ITSELF. CITIZENS WHO SHARE A COMMON LANGUAGE SUDDENLY STOP UNDERSTANDING ONE ANOTHER AND SILENT GENERATIONS GROW OLD AND DIE WITHOUT EVER HAVING TOLD THEIR OWN STORY. THE CONSEQUENCES ARE ABSOLUTE. AN ENTIRE NATIONAL LITERATURE CAN BE CAST INTO OBLIVION WITHOUT A GRAVE WITHOUT EVEN UNDERCLOTHES NAKED WITH A NUMBER TAGGED ON ITS TOE. WHERE A FOREST OF VOICES SHOULD HAVE GROWN ONLY TWO OR THREE TREES REMAIN STANDING. AND WHAT SURVIVES UNDER SUCH CONDITIONS CANNOT BE CALLED LITERATURE BECAUSE WITHOUT THE FULL TRUTH IT IS SOMETHING ELSE ENTIRELY. THE WHOLE COUNTRY BECOMES INFECTED BY THE POISONS OF SILENCE THE WAY A BODY IS INFECTED BY A TUMOR AND WHETHER IT WILL EVER RID ITSELF OF THOSE POISONS ONLY GOD KNOWS."
    },
    {
        id: 3,
        subject: "IDEOLOGY AS JUSTIFICATION",
        from: "THE PARTY COMMITTEE",
        to: "FIELD OPERATIVES",
        cc: "BUREAU OF IDEOLOGY",
        date: "██/██/19██",
        ref: "DOC-████-03",
        body: "SHAKESPEARES VILLAINS STOPPED AT A DOZEN CORPSES BECAUSE THEY HAD NO IDEOLOGY. MACBETHS SELF-JUSTIFICATIONS WERE FEEBLE AND HIS CONSCIENCE DEVOURED HIM. BUT IDEOLOGY CHANGES EVERYTHING. IT PROVIDES THE SOCIAL THEORY THAT ALLOWS EVIL ACTS TO APPEAR GOOD IN ONES OWN EYES AND IN THE EYES OF OTHERS. THE INQUISITION INVOKED CHRISTIANITY. COLONIZERS INVOKED CIVILIZATION. NAZIS INVOKED RACE. JACOBINS INVOKED EQUALITY AND THE HAPPINESS OF FUTURE GENERATIONS. EACH BELIEVED THEY WERE DOING WHAT WAS RIGHT AND NECESSARY. THIS IS WHY THE TWENTIETH CENTURY EXPERIENCED EVIL ON A SCALE MEASURED NOT IN DOZENS BUT IN MILLIONS. THE IDEOLOGICAL EVILDOER CROSSES THE PRECISE LINE THAT SHAKESPEARES VILLAINS COULD NOT AND HIS EYES REMAIN DRY AND CLEAR. JUST AS A WEAK BLUE LIGHT CAN TRIGGER WHAT INTENSE YELLOW LIGHT CANNOT SO EVILDOING HAS A THRESHOLD MAGNITUDE. ONCE CROSSED THE PERSON LEAVES HUMANITY BEHIND PERHAPS WITHOUT THE POSSIBILITY OF RETURN."
    },
    {
        id: 4,
        subject: "SUPPRESSION OF INFORMATION",
        from: "SIGNALS INTELLIGENCE",
        to: "FOREIGN AFFAIRS OFFICE",
        cc: "DEPARTMENT OF INTERNAL ORDER",
        date: "██/██/19██",
        ref: "DOC-████-04",
        body: "WHEN THE WORLD IS NOT ALLOWED TO BLEND SPIRITUALLY WHEN MOLECULES OF KNOWLEDGE AND SYMPATHY CANNOT JUMP FROM ONE HALF OF HUMANITY TO ANOTHER THE DANGER BECOMES RAMPANT. SUPPRESSION OF INFORMATION RENDERS INTERNATIONAL AGREEMENTS ILLUSORY BECAUSE WITHIN A MUFFLED ZONE ANY TREATY CAN BE REINTERPRETED AT WILL OR SIMPLY FORGOTTEN. ORWELL UNDERSTOOD THIS SUPREMELY. SUCH A ZONE IS POPULATED NOT BY INHABITANTS OF EARTH BUT BY SOMETHING LIKE AN EXPEDITIONARY CORPS FROM MARS WHO KNOW NOTHING ABOUT THE REST OF THE WORLD YET STAND PREPARED TO TRAMPLE IT CONVINCED THEY COME AS LIBERATORS. INSIDE THIS ZONE THE FEATURES OF LIFE BECOME UNMISTAKABLE. CONSTANT FEAR BECAUSE ANY ADULT FROM A COLLECTIVE FARMER TO A POLITBURO MEMBER KNOWS THAT ONE CARELESS WORD MEANS THE ABYSS. SERVITUDE BECAUSE WORKERS CANNOT QUIT AND PASSPORTS FASTEN EVERYONE TO PARTICULAR PLACES. AND ABOVE ALL SECRECY AND MISTRUST WHICH REPLACE THE OPEN-HEARTED HOSPITALITY OF EARLIER TIMES UNTIL MORE THAN HALF THE POPULATION LIVES WITH A PERMANENT BAD CONSCIENCE."
    },
    {
        id: 5,
        subject: "THE GULAG AND IMPRISONMENT",
        from: "CAMP ADMINISTRATION",
        to: "PRISONER NO. ██████",
        cc: "GULAG DIRECTORATE",
        date: "██/██/19██",
        ref: "DOC-████-05",
        body: "AT THE END OF THE DAY SHUKHOV FALLS ASLEEP FEELING PLEASED WITH LIFE. HE WASNT THROWN IN THE PUNISHMENT CELL. HE SWIPED EXTRA GRUEL AT DINNER. HE ENJOYED HIS WORK ON THE WALL. THE BLADE WASNT FOUND AT THE SEARCH POINT AND HE EARNED A BIT OF TOBACCO. THE END OF AN UNCLOUDED DAY. ALMOST A HAPPY ONE. THEN THE DEVASTATING ARITHMETIC. THIS WAS JUST ONE OF THREE THOUSAND SIX HUNDRED AND FIFTY-THREE DAYS OF HIS SENTENCE FROM BELL TO BELL. THE EXTRA THREE WERE FOR LEAP YEARS. NOW CONSIDER WHAT ONE YEAR CONTAINS. THREE HUNDRED AND SIXTY-FIVE DAYS MARCHING OUT TO ROLL-CALL IN DRIZZLE BLIZZARD AND BITTER COLD. THREE HUNDRED AND SIXTY-FIVE DAYS OF HATEFUL ALIEN WORK. SEVEN HUNDRED AND THIRTY BOWLS OF GRUEL AND SEVEN HUNDRED AND THIRTY PORTIONS OF GRITS. NO RADIO AND NO BOOKS AND THANK GOD FOR THAT. AND THIS IS ONLY ONE YEAR. THERE ARE TEN. THERE ARE TWENTY-FIVE. YET EVEN HERE THE PRISONERS BRAINS AND SOULS ARE NOT INACTIVE. A WEAK SPARK OF GOD WAS BREATHED INTO THEM ONCE AND THE QUESTION REMAINS WHAT HAS BECOME OF IT NOW."
    },
    {
        id: 6,
        subject: "ABUSE OF POWER",
        from: "THE COMMANDER",
        to: "ALL SUBORDINATES",
        cc: "OFFICE OF SILENCE",
        date: "██/██/19██",
        ref: "DOC-████-06",
        body: "UNLIMITED POWER IN THE HANDS OF LIMITED PEOPLE ALWAYS LEADS TO CRUELTY. THE VICES OF CAMP COMMANDERS MIRROR THOSE OF SERF OWNERS TWO HUNDRED YEARS EARLIER WITH EERIE PRECISION PROVING THAT HUMAN NATURE HAS NOT CHANGED. GIVE THE SAME AMOUNT OF UNCHECKED POWER AND THE SAME ABUSES EMERGE WITHOUT EXCEPTION BECAUSE THERE EXISTS NO CURB PRACTICAL OR MORAL CAPABLE OF RESTRAINING MALICE WHEN AUTHORITY IS ABSOLUTE. BUT THE DEEPER CRIME IS NOT THE CRUELTY ITSELF. IT IS THE SILENCE THAT SURROUNDS IT. BY KEEPING SILENT ABOUT EVIL AND BURYING IT SO DEEP THAT NO SIGN APPEARS ON THE SURFACE WE ARE NOT MERELY TOLERATING IT. WE ARE IMPLANTING IT. AND IT WILL RISE UP A THOUSANDFOLD IN THE FUTURE. WHEN WE NEITHER PUNISH NOR REPROACH EVILDOERS WE ARE NOT SIMPLY PROTECTING THEIR COMFORTABLE OLD AGE. WE ARE TEARING THE FOUNDATIONS OF JUSTICE FROM BENEATH NEW GENERATIONS AND TEACHING YOUNG PEOPLE THAT FOUL DEEDS ARE NEVER PUNISHED ON THIS EARTH."
    },
    {
        id: 7,
        subject: "CONSCIENCE",
        from: "A HUMAN BEING",
        to: "HIS OWN CONSCIENCE",
        cc: "GOD",
        date: "██/██/19██",
        ref: "DOC-████-07",
        body: "THIS IS THE MAIN PROBLEM OF THE TWENTIETH CENTURY. IS IT PERMISSIBLE MERELY TO CARRY OUT ORDERS AND COMMIT ONES CONSCIENCE TO SOMEONE ELSES KEEPING. CAN A PERSON LIVE WITHOUT HIS OWN IDEAS ABOUT GOOD AND EVIL DERIVING THEM ONLY FROM PRINTED INSTRUCTIONS AND THE VERBAL COMMANDS OF SUPERIORS. THOSE SOLEMN OATHS PRONOUNCED WITH A TREMOR IN THE VOICE WERE MEANT TO DEFEND THE PEOPLE AGAINST EVILDOERS YET HOW EASILY THEY ARE REDIRECTED TO SERVE THE VERY EVIL THEY WERE SWORN TO OPPOSE. IF ONLY THE ANSWER WERE SIMPLE. IF ONLY EVIL PEOPLE EXISTED SOMEWHERE INSIDIOUSLY COMMITTING THEIR DEEDS AND IT WERE ONLY NECESSARY TO SEPARATE AND DESTROY THEM. BUT THE LINE DIVIDING GOOD AND EVIL CUTS THROUGH THE HEART OF EVERY HUMAN BEING WITHOUT EXCEPTION. DURING A LIFETIME THIS LINE SHIFTS. THE SAME PERSON STANDS AT VARIOUS AGES NEAR SAINTHOOD AND NEAR THE DEVIL. THE NAME DOES NOT CHANGE AND TO THAT NAME WE ASCRIBE EVERYTHING. SOCRATES COMMAND KNOW THYSELF HAS NEVER BEEN MORE URGENT THAN NOW."
    },
    {
        id: 8,
        subject: "THE WEIGHT OF TRUTH",
        from: "ONE WORD OF TRUTH",
        to: "THE WHOLE WORLD",
        cc: "HISTORY",
        date: "██/██/19██",
        ref: "DOC-████-08",
        body: "ONE WORD OF TRUTH SHALL OUTWEIGH THE WHOLE WORLD. THIS RUSSIAN PROVERB EXPRESSES THE BITTER EXPERIENCE OF AN ENTIRE PEOPLE WITH ASTONISHING FORCE. UPON THIS SEEMINGLY FANTASTIC VIOLATION OF THE LAW OF CONSERVATION OF MASS AND ENERGY AN ENTIRE LIFES WORK AND AN APPEAL TO ALL THE WRITERS OF THE WORLD ARE BUILT. THE REASON IS THIS. ONE CAN COMPOSE AN OUTWARDLY SMOOTH POLITICAL SPEECH OR AN ELEGANT PHILOSOPHICAL SYSTEM UPON A FOUNDATION OF ERROR AND LIES. AN EQUALLY POLISHED CONTRADICTION CAN RALLY IN OPPOSITION. BOTH WILL BE TRUSTED AND BOTH WILL BE MISTRUSTED BECAUSE NEITHER CARRIES ITS OWN PROOF. BUT A GENUINE WORK OF ART BEARS WITHIN ITSELF ITS OWN VERIFICATION. IT SCOOPS UP THE TRUTH AND PRESENTS IT AS A LIVING FORCE THAT TAKES HOLD OF US AND COMPELS US. NO ONE NOT EVEN IN AGES TO COME WILL APPEAR TO REFUTE IT. AND IF THE STEMS OF TRUTH AND GOODNESS ARE CRUSHED PERHAPS THE UNPREDICTABLE STEMS OF BEAUTY WILL RISE TO THAT SAME PLACE AND FULFILL THE WORK OF ALL THREE."
    },
    {
        id: 9,
        subject: "FREEDOM",
        from: "THE IMPRISONED MIND",
        to: "THE OPEN SKY",
        cc: "NO ONE",
        date: "██/██/19██",
        ref: "DOC-████-09",
        body: "THE PARADOX OF IMPRISONMENT REVEALS ITSELF SLOWLY. FOR TEN YEARS YOU ARE FREE OF ALL MEETINGS. NO ONE PRESSURES YOU TO JOIN THE PARTY. NO TRADE UNION PRETENDS TO PROTECT YOUR INTERESTS. YOU CANNOT BE ELECTED OR APPOINTED OR FORCED TO SERVE AS A PROPAGANDIST AND NO ONE DRAGS YOU TO A POLLING STATION TO VOTE FOR A SINGLE CANDIDATE. THE CAMP KEEPERS CLAIM YOUR LABOR AND YOUR BODY TO THE POINT OF DEATH BUT THEY DO NOT ENCROACH UPON YOUR THOUGHTS. THIS PRODUCES A SENSATION OF FREEDOM FAR GREATER THAN MERE PHYSICAL LIBERTY EVER COULD. AND FROM THIS SENSATION A DEEPER QUESTION EMERGES. IS IT POSSIBLE TO LIBERATE ANYONE WHO HAS NOT FIRST BECOME FREE WITHIN HIS OWN SOUL. AFTER ENOUGH YEARS EVEN THE IDEA OF FREEDOM BECOMES STRANGE AND FORCED. THE STONES ROLL DOWN FROM UNDER OUR FEET BECAUSE THEY ARE THE ASHES OF THE PAST. BUT WE ASCEND. NO ONE CAN DEPRIVE YOU OF WHAT YOU HAVE ALREADY LOST. WHAT DOES NOT EXIST NOT EVEN GOD CAN TAKE AWAY. AND THIS IS THE MOST BASIC FREEDOM OF ALL."
    },
    {
        id: 10,
        subject: "MEMORY",
        from: "THE DEAD",
        to: "THE LIVING",
        cc: "THE UNBORN",
        date: "██/██/19██",
        ref: "DOC-████-10",
        body: "THERE IS A RUSSIAN PROVERB. DWELL ON THE PAST AND YOU WILL LOSE AN EYE. BUT FORGET THE PAST AND YOU WILL LOSE BOTH EYES. THIS IS THE DILEMMA OF EVERY GENERATION THAT INHERITS SUFFERING. DECADES PASS AND SCARS HEAL AND SOME ISLANDS OF THE ARCHIPELAGO DISSOLVE AS THE POLAR SEA OF OBLIVION ROLLS OVER THEM. THOSE WHO DO NOT WISH TO RECALL HAVE HAD ENOUGH TIME TO DESTROY EVERY LAST DOCUMENT. YET SOMEDAY THIS ARCHIPELAGO WITH ITS AIR AND THE BONES OF ITS INHABITANTS FROZEN IN A LENS OF ICE WILL BE DISCOVERED BY OUR DESCENDANTS LIKE SOME IMPROBABLE SALAMANDER. THE DANGER IS NOT ONLY IN FORGETTING BUT IN WHAT REPLACES MEMORY. WHAT WE REMEMBER IS NOT WHAT ACTUALLY HAPPENED BUT MERELY THE HACKNEYED DOTTED LINE DRIVEN INTO OUR MINDS BY INCESSANT HAMMERING. ONLY WHAT THE RADIO REPEATS DAY AFTER DAY DRILLS A HOLE IN THE BRAIN. EVERYTHING ELSE IS QUIETLY ERASED. THIS IS WHY LITERATURE MATTERS. IT BECOMES THE LIVING MEMORY OF A NATION PRESERVING THE FLAME OF SPENT HISTORY IN A FORM SAFE FROM DEFORMATION AND SLANDER."
    },
    {
        id: 11,
        subject: "RESISTANCE",
        from: "AN ORDINARY PERSON",
        to: "THE SYSTEM",
        cc: "EVERYONE WHO REMAINS SILENT",
        date: "██/██/19██",
        ref: "DOC-████-11",
        body: "WE HAVE NOT MATURED ENOUGH TO MARCH INTO THE SQUARES AND SHOUT THE TRUTH ALOUD. IT IS NOT YET NECESSARY AND IT IS CERTAINLY DANGEROUS. BUT THERE IS SOMETHING WE CAN DO RIGHT NOW. LET US REFUSE TO SAY WHAT WE DO NOT THINK. THIS IS THE EASIEST AND MOST ACCESSIBLE PATH AND IT ACCOUNTS FOR THE COWARDICE ALREADY WELL ROOTED WITHIN US. IF WE DID NOT PASTE TOGETHER THE DEAD BONES AND SCALES OF IDEOLOGY AND IF WE DID NOT SEW ITS ROTTING RAGS WE WOULD BE ASTONISHED AT HOW QUICKLY THE LIES BECOME HELPLESS AND FALL AWAY. THIS IS NOT THEORY. AT SAMARKA CAMP IN NINETEEN FORTY-SIX A GROUP OF INTELLECTUALS REACHED THE BRINK OF DEATH WORN DOWN BY HUNGER COLD AND LABOR BEYOND THEIR STRENGTH. DID THEY STEAL. DID THEY INFORM ON OTHERS. DID THEY WHIMPER ABOUT THEIR RUINED LIVES. NO. FORESEEING DEATH IN DAYS RATHER THAN WEEKS THEY SAT AGAINST THE WALL AND ORGANIZED A SEMINAR SHARING THEIR FINAL KNOWLEDGE WITH ONE ANOTHER. FROM ONE SESSION TO THE NEXT PARTICIPANTS WERE MISSING. THEY WERE ALREADY IN THE MORGUE."
    },
    {
        id: 12,
        subject: "BUT NOT THROUGH ME",
        from: "THE LIE",
        to: "ME",
        cc: "[REDACTED]",
        date: "██/██/19██",
        ref: "DOC-████-12",
        body: "LET THE LIE COME INTO THE WORLD. LET IT EVEN TRIUMPH. BUT NOT THROUGH ME. THIS IS NOT THE BATTLE CRY OF A HERO BUT THE QUIET RESOLUTION OF AN ORDINARY PERSON WHO REFUSES TO PARTICIPATE IN FALSEHOOD. WRITERS AND ARTISTS CAN DO MORE BECAUSE THEY CAN DEFEAT THE LIE ENTIRELY. IN THE STRUGGLE AGAINST LIES ART HAS ALWAYS TRIUMPHED AND SHALL ALWAYS TRIUMPH BECAUSE LIES CAN PREVAIL AGAINST MUCH IN THIS WORLD BUT NEVER AGAINST ART. YET FOR EVERY PERSON REGARDLESS OF CALLING THERE COMES A GREAT FORK IN THE ROAD. IF YOU GO TO THE RIGHT YOU LOSE YOUR LIFE. IF YOU GO TO THE LEFT YOU LOSE YOUR CONSCIENCE. WHOEVER VOWS TO SURVIVE AT ANY PRICE HAS ALREADY DECIDED TO SURVIVE AT SOMEONE ELSES EXPENSE. IT WAS NOT THE MAJORITY WHO CHOSE THE HARDER PATH BUT NEITHER WAS IT ONLY A FEW. MANY MADE THAT CHOICE THOUGH THEY NEVER SHOUTED ABOUT IT. YOU HAD TO LOOK CLOSELY TO SEE THEM. AND IT WAS ONLY ON ROTTING PRISON STRAW THAT THE FIRST STIRRINGS OF GOOD COULD BE FELT. THE LINE SEPARATING GOOD AND EVIL PASSES NOT THROUGH STATES NOR BETWEEN PARTIES BUT RIGHT THROUGH EVERY HUMAN HEART."
    }
];

// ─── REDACTION LAW ────────────────────────────────────────
// Law: "Truth is hidden. Lies remain visible."
// 1. Violence/evil words (sem-void) → NEVER redacted, always visible
// 2. Words about truth/goodness → ALWAYS redacted (black box)
// 3. Words of author's claims/assertions → redacted (the system silences his argument)

const VIOLENCE_WORDS = new Set([
    // Core violence
    "VIOLENCE", "LIES", "LIE", "FALSEHOOD", "EVIL", "CRUELTY",
    "POWER", "IDEOLOGY", "FORCE", "SILENCE", "FEAR", "DEATH",
    "PUNISHMENT", "DESTROYED", "ABYSS", "DEVIL", "MALICE", "FOUL",
    "TUMOR", "MORGUE",
    // System violence
    "OBEDIENCE", "SUPPRESSION", "CENSORSHIP", "REGIME", "GULAG", "CAMP",
    "SERVITUDE", "PRISON", "TORTURE", "OPPRESSION", "TYRANT", "TERROR",
    "COMPLICIT", "GUILTY", "CRIMINAL", "CORRUPTION", "PROPAGANDA",
    "DECEPTION", "THREATENING", "ARREST", "EXILE",
    // Broader oppressive
    "INFECTION", "INFECTED", "POISONS", "CORPSES", "CORPSE", "GRAVE",
    "BONES", "ROTTING", "CRUSHED", "DRAGGED", "TRAMPLE", "DEVOURED",
    "VIOLATION", "OBLIVION", "ERASED", "FORGOTTEN", "SLANDER",
    "DEFORMATION", "HAMMERING", "DRILLS", "SHREDDING", "MUFFLED",
    "MISTRUST", "SECRECY", "FORCED", "HATRED", "HATEFUL", "BITTER",
    "ALIEN", "FEEBLE", "RUINS", "DANGER", "EVILDOER", "EVILDOERS",
    "EVILDOING", "SENTENCED", "SENTENCE", "INSIDIOUS", "INSIDIOUSLY",
    "FROZEN", "NAKED", "RUINED", "FOG", "DENSE", "GRAY",
    // GULAG-context
    "CELL", "THROWN", "BLIZZARD", "ROLLCALL", "PRISONERS", "MARCHING",
    "GRUEL", "GRITS",
    // FREEDOM-context
    "LABOR", "ENCROACH", "PRESSURES", "DEPRIVE", "PROPAGANDIST",
    "DRAGS", "PRETENDS", "APPOINTED", "ASHES",
    // WEIGHT OF TRUTH-context
    "CONTRADICTION", "ERROR", "MISTRUSTED", "REFUTE"
]);

const REDACTED_TRUTH = new Set([
    "TRUTH", "CONSCIENCE", "FREEDOM", "FREE", "GOOD", "GOODNESS",
    "BEAUTY", "ART", "LIBERATION", "SOUL", "GOD", "INTEGRITY",
    "MEMORY", "LITERATURE", "SAINTHOOD", "GENUINE", "PROOF",
    "LIGHT", "SPARK", "FLAME", "HEART", "BRAVE", "PROTECT",
    "DEFEND", "JUSTICE", "KNOWLEDGE", "WISDOM", "LOVE", "HOPE"
]);

const REDACTED_CLAIMS = new Set([
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
    "WRONG", "UNJUST", "SHAMEFUL", "COWARDICE",
    "DANGEROUS", "DEVASTATING", "PERMANENT", "UNMISTAKABLE",
    "EVERY", "ENTIRE", "ENTIRELY", "ABSOLUTE", "CERTAIN", "CERTAINLY",
    "WHOLE", "COMPLETE", "TOTAL", "WHEREVER", "WHOEVER", "EVERYONE",
    "EVERYTHING", "NOTHING", "ANYONE",
    "SIMPLY", "MERELY", "ALREADY", "NEITHER", "BOTH", "RIGHT",
    "WITHOUT", "BEYOND", "DESPITE", "AGAINST", "NECESSARY",
    "ENOUGH", "URGENT", "GREATER", "DEEPER", "PRECISELY",
    "PERSON", "HUMAN", "HUMANITY", "PEOPLE", "LIFE", "LIVES", "LIVING",
    "GENERATION", "GENERATIONS", "OUR", "YOUR", "OURSELVES",
    "INHABITANTS", "NATION", "NATIONS", "WORLD", "EARTH",
    "BECAUSE", "THEREFORE", "THOUGH", "THROUGH", "BEEN",
    "SAME", "ANOTHER", "EACH", "SUCH", "DOES",
    "NOW", "ONCE", "EVER", "AFTER", "UNTIL", "DURING",
    "LIFETIME", "YEARS", "DAYS", "DECADES", "PAST", "FUTURE", "HISTORY",
    "PLACE", "PLACES", "LINE", "ROAD", "PATH",
    "CONDITION", "CONDITIONS", "FOUNDATION", "FOUNDATIONS",
    "CONCEAL", "CONVINCED", "TOLERATE", "TOLERATING",
    "IMPLANTING", "BURYING", "CRUSHING", "COMMITTING"
]);

// ─── WORD CLASSIFICATION ──────────────────────────────────
// Single source of truth: violence wins, then truth, then claims
function classifyWord(word) {
    if (VIOLENCE_WORDS.has(word)) return 'violence';
    if (REDACTED_TRUTH.has(word)) return 'redacted';
    if (REDACTED_CLAIMS.has(word)) return 'redacted';
    return 'normal';
}

// ─── DOM CREATION ─────────────────────────────────────────
const CONTAINER = document.getElementById('grid-system');

function createHeader(theme) {
    const header = document.createElement('div');
    header.className = 'doc-header';

    const fields = [
        { label: 'FROM:', value: theme.from },
        { label: 'TO:', value: theme.to },
        { label: 'CC:', value: theme.cc },
        { type: 'divider' },
        { label: 'SUBJECT:', value: theme.subject, cls: 'doc-subject' },
        { label: 'DATE:', value: theme.date },
        { label: 'REF:', value: theme.ref },
        { type: 'divider' },
    ];

    fields.forEach(f => {
        if (f.type === 'divider') {
            const div = document.createElement('div');
            div.className = 'doc-divider';
            header.appendChild(div);
            return;
        }
        const row = document.createElement('div');
        row.className = 'doc-row';

        const label = document.createElement('span');
        label.className = 'doc-label';
        label.textContent = f.label;

        const value = document.createElement('span');
        value.className = 'doc-value' + (f.cls ? ` ${f.cls}` : '');
        value.textContent = f.value;

        row.appendChild(label);
        row.appendChild(value);
        header.appendChild(row);
    });

    return header;
}

function createBody(theme) {
    const wrapper = document.createElement('div');
    wrapper.className = 'body-wrapper';

    const p = document.createElement('p');
    p.className = 'text-content';

    theme.body.split(' ').forEach(word => {
        const clean = word.replace(/[^A-Z]/g, '');
        const span = document.createElement('span');
        span.textContent = word + ' ';

        const type = classifyWord(clean);
        if (type === 'violence') {
            span.className = 'sem-word sem-void';
        } else if (type === 'redacted') {
            span.className = 'ref-placeholder';
        }

        p.appendChild(span);
    });

    // SVG layers
    const diagramLayer = document.createElement('div');
    diagramLayer.className = 'diagram-layer';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'diagram-svg');
    diagramLayer.appendChild(svg);

    const redLayer = document.createElement('div');
    redLayer.className = 'red-line-layer';
    const redSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    redSvg.setAttribute('class', 'diagram-svg');
    redLayer.appendChild(redSvg);

    wrapper.appendChild(p);
    wrapper.appendChild(diagramLayer);
    wrapper.appendChild(redLayer);

    return wrapper;
}

function createCell(theme) {
    const cell = document.createElement('article');
    cell.className = 'grid-cell';
    cell.dataset.themeId = theme.id;

    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';
    textLayer.appendChild(createHeader(theme));
    textLayer.appendChild(createBody(theme));

    cell.appendChild(textLayer);
    return cell;
}

// Populate grid
THEMES.forEach(theme => CONTAINER.appendChild(createCell(theme)));

// ─── TYPEWRITER EFFECT ────────────────────────────────────
function typeText(el, text, baseDelay) {
    return new Promise(resolve => {
        el.textContent = '';
        let i = 0;
        function tick() {
            if (i >= text.length) { resolve(); return; }
            el.textContent += text[i];
            const char = text[i];
            i++;

            let delay = baseDelay + Math.random() * baseDelay * 0.8;
            if (char === ' ') delay += baseDelay * 0.3;
            if (char === '.' || char === ',') delay += baseDelay * 1.2;
            setTimeout(tick, delay);
        }
        tick();
    });
}

async function typeHeaders() {
    const cells = document.querySelectorAll('.grid-cell');
    const promises = [];

    cells.forEach((cell, ci) => {
        cell.querySelectorAll('.doc-label').forEach(l => l.style.visibility = 'visible');

        cell.querySelectorAll('.doc-value').forEach((val, vi) => {
            const text = val.textContent;
            val.textContent = '';
            val.style.visibility = 'visible';

            const baseDelay = 18 + ci * 3 + vi * 7 + Math.random() * 15;
            const startDelay = vi * 120 + ci * 30 + Math.random() * 80;

            promises.push(new Promise(resolve => {
                setTimeout(() => typeText(val, text, baseDelay).then(resolve), startDelay);
            }));
        });

        cell.querySelectorAll('.doc-divider').forEach(d => {
            setTimeout(() => d.style.visibility = 'visible', 200 + ci * 30);
        });
    });

    await Promise.all(promises);
}

async function typeBodyTexts() {
    const cells = document.querySelectorAll('.grid-cell');
    const promises = [];

    cells.forEach((cell, ci) => {
        const spans = cell.querySelectorAll('.text-content > span');
        const wrapper = cell.querySelector('.body-wrapper');
        if (wrapper) wrapper.style.visibility = 'visible';

        promises.push(new Promise(resolve => {
            let i = 0;
            function next() {
                if (i >= spans.length) { resolve(); return; }
                const span = spans[i];
                span.style.visibility = 'visible';
                span.style.transform = `translateY(${(Math.random() - 0.5) * 0.6}px)`;
                i++;
                setTimeout(next, 8 + Math.random() * 18);
            }
            setTimeout(next, ci * 50);
        }));
    });

    await Promise.all(promises);
}

// ─── SVG LINE SYSTEM ──────────────────────────────────────
// Shared helpers — eliminates buildLines/buildRedLines duplication

function getPositions(spans, wrapperRect) {
    return spans.map((span, id) => {
        const r = span.getBoundingClientRect();
        return {
            id,
            cx: r.left - wrapperRect.left + r.width / 2,
            cy: r.top - wrapperRect.top + r.height / 2,
            visible: r.top >= wrapperRect.top && r.bottom <= wrapperRect.bottom
        };
    });
}

function buildConnections(positions, svgEl, cssClass, maxDist = 150, maxNeighbors = 2) {
    svgEl.innerHTML = '';
    const lines = [];
    const seen = new Set();

    for (const node of positions) {
        if (!node.visible) continue;

        // Find nearest visible neighbors
        const neighbors = [];
        for (const n of positions) {
            if (n.id === node.id || !n.visible) continue;
            const dist = Math.hypot(n.cx - node.cx, n.cy - node.cy);
            if (dist < maxDist) neighbors.push({ target: n, dist });
        }
        neighbors.sort((a, b) => a.dist - b.dist);

        for (let i = 0; i < Math.min(neighbors.length, maxNeighbors); i++) {
            const conn = neighbors[i];
            const lo = Math.min(node.id, conn.target.id);
            const hi = Math.max(node.id, conn.target.id);
            const key = `${lo}-${hi}`;
            if (seen.has(key)) continue;
            seen.add(key);

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', node.cx);
            line.setAttribute('y1', node.cy);
            line.setAttribute('x2', conn.target.cx);
            line.setAttribute('y2', conn.target.cy);
            line.setAttribute('class', cssClass);
            svgEl.appendChild(line);

            lines.push({ el: line, src: node, tgt: conn.target });
        }
    }
    return lines;
}

// Oscillation helper — replaces repeated sin/cos magic number patterns
function oscillate(time, id, freqX, freqY, amplitude) {
    return {
        x: Math.sin(time + id * freqX) * amplitude,
        y: Math.cos(time + id * freqY) * amplitude
    };
}

function applyOscillation(lines, time, srcFreq, tgtFreq, srcAmp, tgtAmp) {
    for (const l of lines) {
        const s = oscillate(time, l.src.id, srcFreq[0], srcFreq[1], srcAmp);
        const t = oscillate(time, l.tgt.id, tgtFreq[0], tgtFreq[1], tgtAmp);
        l.el.setAttribute('x1', l.src.cx + s.x);
        l.el.setAttribute('y1', l.src.cy + s.y);
        l.el.setAttribute('x2', l.tgt.cx + t.x);
        l.el.setAttribute('y2', l.tgt.cy + t.y);
    }
}

function resetLines(lines) {
    for (const l of lines) {
        l.el.setAttribute('x1', l.src.cx);
        l.el.setAttribute('y1', l.src.cy);
        l.el.setAttribute('x2', l.tgt.cx);
        l.el.setAttribute('y2', l.tgt.cy);
    }
}

// ─── CELL INTERACTION ─────────────────────────────────────
function initCellInteraction(cell) {
    const bodyWrapper = cell.querySelector('.body-wrapper');
    const textContent = cell.querySelector('.text-content');
    const svg = cell.querySelector('.diagram-layer .diagram-svg');
    const redSvg = cell.querySelector('.red-line-layer .diagram-svg');
    const nodeSpans = Array.from(textContent.querySelectorAll('.ref-placeholder'));
    const violenceSpans = Array.from(textContent.querySelectorAll('.sem-word.sem-void'));

    let blackLines = [];
    let redLines = [];
    let isHovering = false;
    let animFrame = null;

    // Scroll state
    let lastScrollTop = 0;
    let wobbleDecay = 0;
    let wobbleFrame = null;

    function recalcBlack() {
        const rect = bodyWrapper.getBoundingClientRect();
        const pos = getPositions(nodeSpans, rect);
        blackLines = buildConnections(pos, svg, 'data-line');
    }

    function recalcRed() {
        const rect = bodyWrapper.getBoundingClientRect();
        const pos = getPositions(violenceSpans, rect);
        redLines = buildConnections(pos, redSvg, 'red-line');
    }

    // Initial black lines
    recalcBlack();

    // ─── Scroll wobble ───
    function wobbleTick() {
        wobbleDecay *= 0.9;
        if (wobbleDecay < 0.15) { wobbleDecay = 0; return; }

        const t = Date.now() * 0.004;
        applyOscillation(blackLines, t, [1.7, 0.9], [2.3, 1.1], wobbleDecay, wobbleDecay * 0.8);
        applyOscillation(redLines, t, [2.1, 1.3], [1.7, 0.9], wobbleDecay, wobbleDecay * 0.8);

        wobbleFrame = requestAnimationFrame(wobbleTick);
    }

    // Throttled scroll handler
    let scrollQueued = false;
    textContent.addEventListener('scroll', () => {
        if (scrollQueued) return;
        scrollQueued = true;
        requestAnimationFrame(() => {
            scrollQueued = false;
            const scrollTop = textContent.scrollTop;
            const velocity = Math.abs(scrollTop - lastScrollTop);
            lastScrollTop = scrollTop;

            recalcBlack();
            if (isHovering) recalcRed();

            wobbleDecay = Math.min(velocity * 1.5, 8);
            cancelAnimationFrame(wobbleFrame);
            wobbleTick();
        });
    });

    // ─── Hover animation ───
    function hoverTick() {
        if (!isHovering) return;
        const t = Date.now() * 0.003;

        applyOscillation(blackLines, t, [1.3, 0.7], [1.9, 0.4], 3, 2.5);
        applyOscillation(redLines, t, [1.5, 0.9], [2.1, 0.6], 2.5, 2);

        // Placeholder wobble
        for (let i = 0; i < nodeSpans.length; i++) {
            const bx = Math.sin(t * 1.2 + i * 0.7) * 1.2;
            const by = Math.cos(t * 0.9 + i * 1.1) * 0.8;
            nodeSpans[i].style.transform = `translate3d(${bx}px,${by}px,0)`;
        }

        animFrame = requestAnimationFrame(hoverTick);
    }

    cell.addEventListener('mouseenter', () => {
        isHovering = true;
        recalcBlack();
        recalcRed();
        hoverTick();
    });

    cell.addEventListener('mouseleave', () => {
        isHovering = false;
        cancelAnimationFrame(animFrame);
        cancelAnimationFrame(wobbleFrame);
        resetLines(blackLines);
        redSvg.innerHTML = '';
        redLines = [];
        for (const span of nodeSpans) span.style.transform = '';
    });
}

// ─── INIT ─────────────────────────────────────────────────
// FIX: typewriter completes FIRST, then SVG interactions initialize
async function init() {
    // Hide everything
    document.querySelectorAll('.doc-label, .doc-value, .doc-divider').forEach(el => {
        el.style.visibility = 'hidden';
    });
    document.querySelectorAll('.text-content > span').forEach(el => {
        el.style.visibility = 'hidden';
    });
    document.querySelectorAll('.body-wrapper').forEach(el => {
        el.style.visibility = 'hidden';
    });

    await new Promise(r => setTimeout(r, 300));
    await typeHeaders();
    await new Promise(r => setTimeout(r, 400));
    await typeBodyTexts();

    // NOW safe to measure positions — all spans are visible
    document.querySelectorAll('.grid-cell').forEach(initCellInteraction);
}

// Wait for fonts + images, then start
window.addEventListener('load', init);
