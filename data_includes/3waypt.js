var shuffleSequence = seq("intro", "info", "list_ordering", sepWith("sep", shuffle(randomize("filler"), rshuffle("1","2"))), "contact", "sr", "code");

var ds = "RegionedSentence";
var qs = "Question";
var sep = "Separator";

var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 1500,
        errorMessage: "Wrong. Please wait for the next sentence",
        normalMessage: "Please wait for the next sentence" },
    "RegionedSentence", {
        mode: "self-paced reading" },
    "Question", {
        randomOrder: false,
        hasCorrect: true,
        as: ["Yes", "No"] }
];

var items = [
    ["sr", "__SendResults__", { }],
    ["sep", "Separator", {}],
    ["intro", "Message", {html: {include: "intro.html"}}],
    ["info", "Form", {html: {include: "info.html"}}],
    [["list_ordering", 0], "Separator", {transfer: 200, normalMessage: "The experiment will start momentarily"}],
    [["list_ordering", 0], "Separator", {transfer: 200, normalMessage: "The experiment will start momentarily"}],
    [["list_ordering", 0], "Separator", {transfer: 200, normalMessage: "The experiment will start momentarily"}],
    [["1",[1,0]], ds, {s: "The curious young boy saved the marble that he found on the playground.", id: "101", list: "1"},
        qs, {q: "Did the boy save something?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[1,0]], ds, {s: "The curious young boy saved the insect that he found in his backyard.", id: "1102", list: "2"},
        qs, {q: "Was the insect found in a schoolyard?", hasCorrect: "No", randomOrder: false}],
    [["1",[2,0]], ds, {s: "The very little girl imitated the laughter of the old woman with a tone of mockery.", id: "111", list: "2"},
        qs, {q: "Did the girl imitate laughter?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[2,0]], ds, {s: "The very little girl imitated the infant as soon as it began to cry.", id: "1112", list: "1"},
        qs, {q: "Did the girl imitate an old man?", hasCorrect: "No", randomOrder: false}],
    [["1",[3,0]], ds, {s: "The very angry man described the neighbor as a menace to society.", id: "121", list: "1"},
        qs, {q: "Did the man dislike his neighbor?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[3,0]], ds, {s: "The very angry man described the theft to the policeman soon after it had occurred.", id: "1122", list: "2"},
        qs, {q: "Was the theft described long after it occurred?", hasCorrect: "No", randomOrder: false}],
    [["1",[4,0]], ds, {s: "The group of friends discussed the movie that they had just gone to see.", id: "131", list: "2"},
        qs, {q: "Did the friends discuss a movie?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[4,0]], ds, {s: "The group of friends discussed the scenes from the movie that they found most humorous.", id: "1132", list: "1"},
        qs, {q: "Did the friends discuss the sad scenes?", hasCorrect: "No", randomOrder: false}],
    [["1",[5,0]], ds, {s: "The terrible car accident blocked many drivers from the main entrance to the shopping mall.", id: "141", list: "1"},
        qs, {q: "Was the car accident terrible?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[5,0]], ds, {s: "The terrible car accident blocked many lanes of the town's only major highway.", id: "1142", list: "2"},
        qs, {q: "Was the car accident very minor?", hasCorrect: "No", randomOrder: false}],
    [["1",[6,0]], ds, {s: "The extremely generous woman bought her daughter many expensive gifts for her birthday.", id: "151", list: "2"},
        qs, {q: "Did the woman buy gifts for Christmas?", hasCorrect: "No", randomOrder: false}],
    [["1",[6,0]], ds, {s: "The extremely generous woman bought her friends dinner in celebration of her promotion at work.", id: "1152", list: "1"},
        qs, {q: "Did the woman buy dinner for her friends?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[7,0]], ds, {s: "The quiet college student read the bible during times of intense stress.", id: "161", list: "1"},
        qs, {q: "Was the student talkative?", hasCorrect: "No", randomOrder: false}],
    [["1",[7,0]], ds, {s: "The quiet college student read the text assigned by his history professor.", id: "1162", list: "2"},
        qs, {q: "Was the student quiet?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[8,0]], ds, {s: "The conservative political commentator criticized the lawyers for agreeing to defend the cold-blooded killer.", id: "171", list: "2"},
        qs, {q: "Did the commentator praise the lawyers?", hasCorrect: "No", randomOrder: false}],
    [["1",[8,0]], ds, {s: "The conservative political commentator criticized the airlines for not thoroughly screening all passenger bags.", id: "1172", list: "1"},
        qs, {q: "Did the commentator criticize the airlines?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[9,0]], ds, {s: "The company truck driver unloaded the cargo from his truck onto the loading dock.", id: "181", list: "1"},
        qs, {q: "Did the driver load something into his truck?", hasCorrect: "No", randomOrder: false}],
    [["1",[9,0]], ds, {s: "The company truck driver unloaded the trunks from his truck into his client's office.", id: "1182", list: "2"},
        qs, {q: "Did the driver unload something?", hasCorrect: "Yes", randomOrder: false}],
    [["1",[10,0]], ds, {s: "The moving company employees carried the sofa from the van into the house.", id: "191", list: "2"},
        qs, {q: "Did the employees carry a piano?", hasCorrect: "No", randomOrder: false}],
    [["1",[10,0]], ds, {s: "The moving company employees carried the chest from the van into the house.", id: "1192", list: "1"},
        qs, {q: "Did the employees carry a chest?", hasCorrect: "Yes", randomOrder: false}],
    [["2",11], ds, {s: "The heavy mama was loved.", id: "201", list: "NA"},
        qs, {q: "Was the mama heavy?", hasCorrect: "Yes", randomOrder: false}],
    [["2",12], ds, {s: "The wrong parcel was divided.", id: "202", list: "NA"},
        qs, {q: "Was the parcel divided? ", hasCorrect: "Yes", randomOrder: false}],
    [["2",13], ds, {s: "The unhealthy bowel was treated.", id: "203", list: "NA"},
        qs, {q: "Was the bowel unhealthy?", hasCorrect: "Yes", randomOrder: false}],
    [["2",14], ds, {s: "The honorable title was revoked.", id: "204", list: "NA"},
        qs, {q: "Was the title revoked?", hasCorrect: "Yes", randomOrder: false}],
    [["2",15], ds, {s: "The new diesel was purchased.", id: "205", list: "NA"},
        qs, {q: "Was the disease new?", hasCorrect: "Yes", randomOrder: false}],
    [["2",16], ds, {s: "The horrible drama was handled.", id: "206", list: "NA"},
        qs, {q: "Was the drama terrific?", hasCorrect: "No", randomOrder: false}],
    [["2",17], ds, {s: "The excellent choir was directed.", id: "207", list: "NA"},
        qs, {q: "Was the choir not directed?", hasCorrect: "No", randomOrder: false}],
    [["2",18], ds, {s: "The tasteless soda was marketed.", id: "208", list: "NA"},
        qs, {q: "Was the soda tasteful?", hasCorrect: "No", randomOrder: false}],
    [["2",19], ds, {s: "The cheap dollar was traded.", id: "209", list: "NA"},
        qs, {q: "Was the dollar strong?", hasCorrect: "No", randomOrder: false}],
    [["2",20], ds, {s: "The initial hour was supervised.", id: "210", list: "NA"},
        qs, {q: "Was the initial hour unsupervised?", hasCorrect: "No", randomOrder: false}],
    [["2",21], ds, {s: "The cruel witch was punished.", id: "301", list: "NA"},
        qs, {q: "Was the witch cruel?", hasCorrect: "Yes", randomOrder: false}],
    [["2",22], ds, {s: "The wrong symptom was diagnosed.", id: "302", list: "NA"},
        qs, {q: "Was the symptom Diagnosed?", hasCorrect: "Yes", randomOrder: false}],
    [["2",23], ds, {s: "The cheap champagne was stored.", id: "303", list: "NA"},
        qs, {q: "Was the champagne inexpensive?", hasCorrect: "Yes", randomOrder: false}],
    [["2",24], ds, {s: "The aggressive disease was cured.", id: "304", list: "NA"},
        qs, {q: "Was the disease cured?", hasCorrect: "Yes", randomOrder: false}],
    [["2",25], ds, {s: "The neat tray was stored.", id: "305", list: "NA"},
        qs, {q: "Was the tray neat?", hasCorrect: "Yes", randomOrder: false}],
    [["2",26], ds, {s: "The hazardous terrain was fenced.", id: "306", list: "NA"},
        qs, {q: "Was the terrain unfenced?", hasCorrect: "No", randomOrder: false}],
    [["2",27], ds, {s: "The cheerful robin was welcomed.", id: "307", list: "NA"},
        qs, {q: "Was the robin sad?", hasCorrect: "No", randomOrder: false}],
    [["2",28], ds, {s: "The noble goal was reached.", id: "308", list: "NA"},
        qs, {q: "Was the goal unattained?", hasCorrect: "No", randomOrder: false}],
    [["2",29], ds, {s: "The sick calf was nursed.", id: "309", list: "NA"},
        qs, {q: "Was the calf healthy?", hasCorrect: "No", randomOrder: false}],
    [["2",30], ds, {s: "The calm forest was explored.", id: "310", list: "NA"},
        qs, {q: "Was the forest left unexplored?", hasCorrect: "No", randomOrder: false}],
    ["contact", "Message", {consentRequired: false, html: {include: "contacts.html"}}],
    ["code", "Form", {consentRequired: false, continueMessage:"This is the final page. You do not need to click to continue.", html: {include: "code.html"}}]
];

