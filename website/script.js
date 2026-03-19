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

/* ─── PHYSICS SUBPAGE: THEME 01 ────────────────────────── */
const PHYSICS_BODY = [
    "Violence quickly grows old and loses confidence in itself. To maintain a respectable face it summons falsehood as its ally. Violence cannot conceal itself without lies, and lies cannot be sustained without violence. The system does not demand daily physical force upon every shoulder — only obedience to lies and daily participation in them. All loyalty to the regime is contained in that single demand.",
    "Lies have dragged society so far from normality that one can no longer see a single pillar through the dense, gray fog. Even if they offered us the chance to learn the truth, would our free people even want to know it? Only what the radio hammers in day after day drills into the brain; everything else is conveniently forgotten.",
    "The simplest and most accessible key to self-neglected liberation lies in personal non-participation in lies. Though lies conceal everything, though they embrace everything — not with any help from me. When people renounce lies it simply cuts short their existence — like an infection, they can survive only in a living organism. This opens a breach in the imaginary encirclement caused by our inaction."
];

const PHYSICS_KEYWORDS = ["violence", "falsehood", "lies", "obedience", "infection"];

let physicsAnimationFrame;

function openPhysicsSubpage(clickedCell) {
    const themeId = parseInt(clickedCell.dataset.themeId);
    if (themeId !== 1) return;

    if (document.getElementById('physics-subpage')) return; // Already open

    // Create the container
    const container = document.createElement('div');
    container.id = 'physics-subpage';

    // Canvas for wires
    const canvas = document.createElement('canvas');
    canvas.id = 'physics-canvas';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Content wrapper for 3D perspective
    const wrapper = document.createElement('div');
    wrapper.className = 'physics-content-wrapper';

    // Text container
    const textContainer = document.createElement('div');
    textContainer.className = 'physics-text-container';

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'physics-back-btn';
    backBtn.textContent = '← RETRACT';
    backBtn.onclick = () => {
        container.style.opacity = '0';
        cancelAnimationFrame(physicsAnimationFrame);
        setTimeout(() => container.remove(), 500);
    };
    container.appendChild(backBtn);

    // Build paragraphs with span anchors
    PHYSICS_BODY.forEach(text => {
        const p = document.createElement('p');
        let html = text;
        PHYSICS_KEYWORDS.forEach(kw => {
            const regex = new RegExp(`\\b(${kw})(s)?\\b`, 'gi');
            html = html.replace(regex, '<span class="tension-word">$1$2</span>');
        });
        p.innerHTML = html;
        textContainer.appendChild(p);
    });

    wrapper.appendChild(textContainer);
    container.appendChild(wrapper);
    document.body.appendChild(container);

    // Initial show
    requestAnimationFrame(() => {
        container.classList.add('is-visible');
        resizeCanvas();
    });

    // Setup Physics
    const words = Array.from(textContainer.querySelectorAll('.tension-word'));
    let nodes = [];
    let wires = [];
    let signals = [];

    // Initialize the perspective wire system (2-point perspective style)
    function initPhysicsNodes() {
        nodes = words.map((span) => {
            return {
                el: span,
                baseX: 0,
                baseY: 0,
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                isDragging: false,
                connectedWires: []
            };
        });

        // Procedural Wire Generation: Wires go vertically to +/- large Y, with Z-depth.
        wires = [];
        nodes.forEach(node => {
            // Generate 4-7 wires per word
            const numWires = 4 + Math.floor(Math.random() * 3);
            for (let i = 0; i < numWires; i++) {
                const isCeiling = Math.random() > 0.5;
                const endY = isCeiling ? -2000 : 2000;
                
                // Random depth and random horizontal spread
                const endZ = (Math.random() - 0.5) * 1500;
                // Since wires are strictly vertical in 3D perspective, x-variation should be small relative to depth
                const endXOffset = (Math.random() - 0.5) * 700; 

                const wire = {
                    node: node,
                    endY: endY,
                    endZ: endZ,
                    endXOffset: endXOffset
                };
                wires.push(wire);
                node.connectedWires.push(wire);
            }
        });
    }

    setTimeout(initPhysicsNodes, 100);

    // Resize handling
    let cw = 0, ch = 0;
    function resizeCanvas() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        cw = window.innerWidth;
        ch = window.innerHeight;
        
        if (nodes.length > 0) initPhysicsNodes();
    }
    window.addEventListener('resize', resizeCanvas);

    // 3D Perspective Projection Matrix Helper
    const focalLength = 1000;
    function project3D(x, y, z) {
        // Assume origin is center of screen
        const scale = focalLength / (focalLength + z);
        return {
            x: (x * scale) + (cw / 2),
            y: (y * scale) + (ch / 2),
            scale: scale
        };
    }

    // Signal Class for the Red Pulses
    class Signal {
        constructor(wire, originNode) {
            this.wire = wire;
            this.progress = 0; // 0 to 1
            this.speed = 0.015 + Math.random() * 0.02;
            this.type = Math.random() > 0.5 ? 'inflow' : 'outflow';
            this.node = originNode;
        }

        update() {
            this.progress += this.speed;
        }
    }

    // Drag Interaction variables
    let activeNode = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (activeNode && activeNode.isDragging) {
            activeNode.x = (mouseX - activeNode.dragStartX) * 1.5;
            activeNode.y = (mouseY - activeNode.dragStartY) * 1.5;
        }
    });

    window.addEventListener('mouseup', () => {
        if (activeNode) {
            activeNode.isDragging = false;
            // Spawn an outflow signal upon resolving a drag
            triggerSignal(activeNode, 'outflow');
            activeNode = null;
        }
    });

    function triggerSignal(node, forceType = null) {
        if (!node || node.connectedWires.length === 0) return;
        // spawn 2-3 signals for better visual
        for(let j=0; j<3; j++) {
            const wire = node.connectedWires[Math.floor(Math.random() * node.connectedWires.length)];
            const sig = new Signal(wire, node);
            if (forceType) sig.type = forceType;
            // stagger them slightly
            sig.progress = -Math.random() * 0.3; 
            signals.push(sig);
        }
    }

    words.forEach((span, idx) => {
        span.addEventListener('mousedown', (e) => {
            if (!nodes[idx]) return;
            activeNode = nodes[idx];
            activeNode.isDragging = true;
            activeNode.dragStartX = e.clientX;
            activeNode.dragStartY = e.clientY;
            
            // Interaction triggers inflow pulses
            triggerSignal(activeNode, 'inflow');
        });
    });

    // Physics Loop constants
    const k = 0.08; // Spring stiffness
    const damp = 0.85; // Damping (friction)

    function updatePhysics() {
        ctx.clearRect(0, 0, cw, ch);
        
        let totalKineticEnergy = 0;

        nodes.forEach(node => {
            if (!node.isDragging) {
                const fx = (node.baseX - node.x) * k;
                const fy = (node.baseY - node.y) * k;

                node.vx += fx;
                node.vy += fy;

                node.vx *= damp;
                node.vy *= damp;

                node.x += node.vx;
                node.y += node.vy;
            }

            totalKineticEnergy += Math.abs(node.vx) + Math.abs(node.vy);
            
            // Pulse glow: If an inflow signal is reaching the node (progress > 0.8)
            let glowIntensity = 0;
            signals.forEach(s => {
                if (s.node === node && s.type === 'inflow' && s.progress > 0.7 && s.progress <= 1.0) {
                    glowIntensity = Math.max(glowIntensity, (s.progress - 0.7) * 3.33); // 0 to 1
                }
            });

            if (glowIntensity > 0) {
                node.el.style.textShadow = `0 0 ${25 * glowIntensity}px rgba(255, 0, 0, ${0.9 * glowIntensity})`;
                node.el.style.transform = `translate(${node.x}px, ${node.y}px) scale(${1 + 0.1 * glowIntensity})`;
            } else {
                node.el.style.textShadow = '0 0 5px rgba(255, 0, 0, 0.2)'; // Faint base glow
                node.el.style.transform = `translate(${node.x}px, ${node.y}px)`;
            }
        });

        // Manage Signals
        for (let i = signals.length - 1; i >= 0; i--) {
            signals[i].update();
            if (signals[i].progress >= 1) {
                // Remove finished signal
                signals.splice(i, 1);
            }
        }

        // Draw 3D Wires & Signals
        wires.forEach(wire => {
            const node = wire.node;
            const rect = node.el.getBoundingClientRect();
            // Start of wire is the physical 2D DOM projection of the word
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;

            // Project the 3D endpoint of the wire to 2D
            // Convert screen center to 0,0 locally
            const cxOffset = startX - (cw / 2);
            // End point logic: wire ends far away with some depth
            const end3D = project3D(cxOffset + wire.endXOffset, wire.endY, wire.endZ);

            // Draw base wire
            // Perspective translates depth to opacity/thickness
            const baseAlpha = Math.max(0.05, Math.min(0.2, end3D.scale * 0.4));
            ctx.lineWidth = Math.max(0.5, end3D.scale * 2.0);
            ctx.strokeStyle = `rgba(0, 0, 0, ${baseAlpha})`; 
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(end3D.x, end3D.y);
            ctx.stroke();

            // Draw any signals on this wire
            signals.forEach(sig => {
                if (sig.wire === wire && sig.progress > 0) {
                    const p = sig.type === 'inflow' ? (1 - sig.progress) : sig.progress;
                    // Segment size
                    const segLen = 0.25;
                    const pStart = Math.max(0, p - segLen);
                    const pEnd = Math.min(1, p + segLen);

                    const rx1 = startX + (end3D.x - startX) * pStart;
                    const ry1 = startY + (end3D.y - startY) * pStart;
                    const rx2 = startX + (end3D.x - startX) * pEnd;
                    const ry2 = startY + (end3D.y - startY) * pEnd;

                    // Light pulse intensity
                    ctx.lineWidth = Math.max(1.5, end3D.scale * 5.0);
                    ctx.strokeStyle = `rgba(220, 20, 60, ${Math.sin(sig.progress * Math.PI) * 0.9})`; // Pulse opacity
                    ctx.beginPath();
                    ctx.moveTo(rx1, ry1);
                    ctx.lineTo(rx2, ry2);
                    ctx.stroke();
                }
            });
        });

        // Kinetic Typography (Dynamic Skewing based on energy)
        const energyCap = Math.min(totalKineticEnergy, 150); // Cap extreme shakes
        const skewX = (Math.random() - 0.5) * energyCap * 0.08; 
        const skewY = (Math.random() - 0.5) * energyCap * 0.08;
        const shudderY = (Math.random() - 0.5) * energyCap * 0.15;

        // Apply skewed shudder to the whole container
        textContainer.style.transform = `rotateX(25deg) translateY(-20px) skew(${skewX}deg, ${skewY}deg) translate3d(0, ${shudderY}px, 0)`;

        physicsAnimationFrame = requestAnimationFrame(updatePhysics);
    }

    updatePhysics();
}
