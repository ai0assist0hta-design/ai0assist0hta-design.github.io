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
// 1. Words about truth/goodness → ALWAYS redacted
// 2. Words of author's claims/assertions → redacted (the system silences his argument)
// 3. Violence/evil words → NEVER redacted (lies remain visible)

const REDACTED_TRUTH = new Set([
    "TRUTH", "CONSCIENCE", "FREEDOM", "FREE", "GOOD", "GOODNESS",
    "BEAUTY", "ART", "LIBERATION", "SOUL", "GOD", "INTEGRITY",
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
    "SOUL": "sem-light", "GOD": "sem-light", "SAINTHOOD": "sem-light",
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
    const wordCount = theme.body.split(' ').length;
    const refStr = `DOC-0000${theme.id}-${String(wordCount).padStart(3, '0')}`;
    header.innerHTML = `
        <div class="doc-row"><span class="doc-label">FROM:</span><span class="doc-value">${theme.from}</span></div>
        <div class="doc-row"><span class="doc-label">TO:</span><span class="doc-value">${theme.to}</span></div>
        <div class="doc-row"><span class="doc-label">CC:</span><span class="doc-value">${theme.cc}</span></div>
        <div class="doc-divider"></div>
        <div class="doc-row"><span class="doc-label">SUBJECT:</span><span class="doc-value doc-subject">${theme.subject}</span></div>
        <div class="doc-row"><span class="doc-label">DATE:</span><span class="doc-value date-redacted">${theme.date}</span></div>
        <div class="doc-row"><span class="doc-label">REF:</span><span class="doc-value">${refStr}</span></div>
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

        // Click handler for physics sub page transition
        cell.addEventListener('click', () => {
            if (document.body.classList.contains('is-loading')) return;
            openPhysicsSubpage(cell);
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
                    // 카메라 코앞의 앞면은 극초고선명 윤곽 유지
                    text = smoothstep(0.35, 0.65, textRaw);
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

function openPhysicsSubpage(clickedCell) {
    const themeId = parseInt(clickedCell.dataset.themeId);
    if (themeId !== 1) return;
    if (document.getElementById('physics-subpage')) return;

    // Create the container
    const container = document.createElement('div');
    container.id = 'physics-subpage';

    // Loading indicator
    const loadingEl = document.createElement('div');
    loadingEl.className = 'model-loading';
    loadingEl.textContent = 'LOADING MODEL...';
    container.appendChild(loadingEl);

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn';
    backBtn.textContent = '← RETRACT';
    container.appendChild(backBtn);

    // Theme toggle button
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.textContent = 'MODE: DARK';
    // Add inline styles to bypass any CSS caching issues and force visibility
    themeBtn.style.position = 'fixed';
    themeBtn.style.top = '2rem';
    themeBtn.style.right = '2rem';
    themeBtn.style.zIndex = '9999';
    themeBtn.style.fontFamily = "'Noto Sans', sans-serif";
    themeBtn.style.fontWeight = '700';
    themeBtn.style.fontSize = '1.1rem';
    themeBtn.style.color = '#cccccc';
    themeBtn.style.background = 'transparent';
    themeBtn.style.border = 'none';
    themeBtn.style.cursor = 'pointer';
    themeBtn.style.textTransform = 'uppercase';
    themeBtn.style.letterSpacing = '0.1em';
    themeBtn.style.opacity = '0.8';

    container.appendChild(themeBtn);

    document.body.appendChild(container);

    requestAnimationFrame(() => {
        container.classList.add('is-visible');
    });

    // Initialize Three.js scene
    let animFrameId;
    let cleanupFns = [];
    let isLightMode = false;

    loadThreeModules().then(({ THREE, GLTFLoader, EffectComposer, RenderPass, UnrealBloomPass }) => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);
        // scene.fog removed to keep brightness strictly uniform regardless of camera distance
        // scene.fog = new THREE.FogExp2(0x0a0a0a, 0.003); 

        const w = window.innerWidth, h = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(26, w / h, 0.1, 5000);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        container.appendChild(renderer.domElement);

        // Post-processing: Bloom
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.65, 0.4, 0.85);
        composer.addPass(bloomPass);

        // Lighting
        const ambL = new THREE.AmbientLight(0x333333, 0.3);
        scene.add(ambL);
        const dl1 = new THREE.DirectionalLight(0xffffff, 1.2);
        dl1.position.set(3, 8, 5); scene.add(dl1);
        const pl = new THREE.PointLight(0xdc143c, 0.4, 500);
        pl.position.set(0, -50, 0); scene.add(pl);
        const dl2 = new THREE.DirectionalLight(0x4466aa, 0.3);
        dl2.position.set(-5, 2, -8); scene.add(dl2);

        // Theme Toggling Logic
        themeBtn.onclick = () => {
            isLightMode = !isLightMode;
            themeBtn.textContent = isLightMode ? 'MODE: LIGHT' : 'MODE: DARK';

            // Toggle CSS classes to invert UI texts
            themeBtn.classList.toggle('is-light', isLightMode);
            backBtn.classList.toggle('is-light', isLightMode);

            // Ensure inline styles update as well to bypass specificity
            themeBtn.style.color = isLightMode ? '#111111' : '#cccccc';
            backBtn.style.color = isLightMode ? '#111111' : '#cccccc';

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
                    // Update text color (uBaseColor) in the shader
                    // In dark mode: white text. In light mode: almost black text.
                    child.material.uniforms.uBaseColor.value.setHex(isLightMode ? 0x1a1a1a : 0xffffff);
                }
            });

            // Cables remain generally same, but their base color can shift
            const cableColor = isLightMode ? 0x991111 : 0xff1111;
            parts.cables.forEach(c => {
                c.mesh.material.color.setHex(cableColor);
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
            tex.anisotropy = 16;
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
            roughness: 0.3,
            metalness: 0.0,
            side: THREE.DoubleSide,
            depthWrite: false
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
                    parts.cables.push({ mesh: child, originalPositions: orig });
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

            pivotPoint.set(center.x, box.min.y + size.y * 0.469, center.z);
            pl.position.set(center.x, box.min.y - 20, center.z);
            const maxDim = Math.max(size.x, size.y, size.z);
            spherical.radius = maxDim * 0.445; maxRadius = spherical.radius;
            spherical.phi = Math.PI * 0.697; spherical.theta = Math.PI * -0.741;
            updateCam();

            // Allow slow auto-rotation exactly around its own built-in origin axis
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

        // Hover effects (highlight structural, pulse cables)
        const CRIMSON = new THREE.Color(0xdc143c);
        const WHITE_GLOW = new THREE.Color(0xffffff);
        let hoverTrans = {};
        function updateHover(time) {
            raycaster.setFromCamera(mouseNDC, camera);
            const hits = raycaster.intersectObjects(allInteractable, false);
            const newH = hits.length > 0 ? hits[0].object : null;

            if (hoveredPart && hoveredPart !== newH) { const u = hoveredPart.uuid; if (hoverTrans[u]) hoverTrans[u].target = 0; }
            hoveredPart = newH;
            if (hoveredPart) { const u = hoveredPart.uuid; if (!hoverTrans[u]) hoverTrans[u] = { current: 0, target: 1 }; hoverTrans[u].target = 1; }

            allInteractable.forEach(mesh => {
                const u = mesh.uuid;
                const tr = hoverTrans[u];
                let intensity = 0;
                if (tr) {
                    tr.current += (tr.target - tr.current) * 0.08;
                    if (Math.abs(tr.current) < 0.001) tr.current = 0;
                    intensity = tr.current;
                }

                const isCable = parts.cables.some(c => c.mesh === mesh);

                if (isCable) {
                    if (isLightMode) {
                        // Light mode: High contrast solid Black base (Minimal transparency)
                        mesh.material.color.setHex(0x111111);
                        mesh.material.emissive.setHex(0xaa0000); // Hover glow color
                        if (intensity > 0) {
                            mesh.material.opacity = 0.85 + intensity * 0.15; // goes up to fully opaque
                            mesh.material.emissiveIntensity = intensity * 0.6; // glows red
                        } else {
                            mesh.material.opacity = 0.85; // extremely visible, minimal transparency
                            mesh.material.emissiveIntensity = 0; // no glow
                        }
                    } else {
                        // Dark mode: Base red is 0.6 emissive, 0.7 opacity
                        mesh.material.color.setHex(0xff1111);
                        mesh.material.emissive.setHex(0xcc0000);
                        if (intensity > 0) {
                            const pulse = 0.5 + Math.sin(time * 3) * 0.5;
                            mesh.material.emissiveIntensity = 0.6 + intensity * (0.4 + pulse * 0.4);
                            mesh.material.opacity = 0.7 + intensity * 0.3;
                        } else {
                            mesh.material.emissiveIntensity = 0.6;
                            mesh.material.opacity = 0.7;
                        }
                    }
                } else {
                    // Structural parts: amplify text brightness / add highlight
                    if (intensity <= 0) {
                        mesh.material.emissive = mesh.material.emissive || new THREE.Color(0);
                        mesh.material.emissiveIntensity = 0;
                    } else {
                        // In light mode, glow creates a dark blood red burn. In dark mode, it creates a bright whitish-crimson glow.
                        const targetGlow = isLightMode ? new THREE.Color(0x770000) : new THREE.Color().lerpColors(WHITE_GLOW, CRIMSON, 0.3);
                        mesh.material.emissive = targetGlow;
                        mesh.material.emissiveIntensity = intensity * (isLightMode ? 0.8 : 0.4);
                    }
                }
            });
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
            if (isDragging) {
                const dx = e.clientX - lastMouse.x, dy = e.clientY - lastMouse.y; lastMouse.x = e.clientX; lastMouse.y = e.clientY;
                spherical.theta -= dx * 0.005; spherical.phi -= dy * 0.005; spherical.phi = Math.max(0.05, Math.min(Math.PI - 0.05, spherical.phi)); updateCam();
            }
            const r = renderer.domElement.getBoundingClientRect();
            mouseNDC.x = ((e.clientX - r.left) / r.width) * 2 - 1; mouseNDC.y = -((e.clientY - r.top) / r.height) * 2 + 1;
        }
        function onMD(e) { if (e.button === 0) { isDragging = true; lastMouse.x = e.clientX; lastMouse.y = e.clientY; } }
        function onMU() { isDragging = false; }
        function onWH(e) {
            e.preventDefault(); const dir = e.deltaY > 0 ? 1 : -1;
            const r = renderer.domElement.getBoundingClientRect();
            const n = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
            const zr = new THREE.Raycaster(); zr.setFromCamera(n, camera); const rd = zr.ray.direction.clone();
            if (dir > 0) spherical.radius *= 1.1; else { spherical.radius /= 1.1; pivotPoint.add(rd.multiplyScalar(spherical.radius * 0.02)); }
            spherical.radius = Math.max(5, Math.min(maxRadius, spherical.radius)); updateCam();
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
            camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight); composer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', onResize);
        cleanupFns.push(() => window.removeEventListener('resize', onResize));

        // Render loop
        let lastTime = performance.now();
        function animate() {
            animFrameId = requestAnimationFrame(animate);
            const now = performance.now(), dt = Math.min((now - lastTime) / 1000, 0.05); lastTime = now;
            const time = now * 0.001;

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
                window._mainModel.rotation.y -= dt * 0.05; // 0.05 radians per second
            }

            updateCableWaves(time);
            if (!isDragging) updateHover(time);
            updateSig(dt);

            renderer.domElement.style.cursor = hoveredPart && !isDragging ? 'pointer' : (isDragging ? 'grabbing' : 'grab');
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

