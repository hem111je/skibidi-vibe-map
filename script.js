let lastMemeIndex = -3; // saves previous pic in index

document.getElementById("submit-task").addEventListener("click", () => {
    const task = document.getElementById("task").value;
    const resultsDiv = document.getElementById("results");

    // empty previous replies
    resultsDiv.innerHTML = '';

    if (!task) {
        resultsDiv.innerHTML = "<p>Please enter a task!</p>";
        return;
    }

    // preset responses for some words
    let response;

    if (task.toLowerCase().includes('clean')) {
        response = "Snag a broom and toss your vibez into the void. Mop the floor with that deleted TikTok energy, fam!";
    } else if (task.toLowerCase().includes('study')) {
        response = "Binge-watch your own vibes in a spoon, spittin' 'I'm the code, fam.' Extra clout for peepin’ that dark web of your browser past.";
    } else if (task.toLowerCase().includes('cook')) {
        response = "Whip it up with air, fam. Sprinkle in a dash of 'I’m totally lost' and a slice of life’s chaos. Pro tip: vibes > ingredients, always.";
    } else if (task.toLowerCase().includes('workout')) {
        response = "Sigma vibes only: Flex that existential crisis like it's a 300-pound bench. Dash loops yelling, 'I’m on that grindset,' but honestly, who even knows what the tea is?";
    } else if (task.toLowerCase().includes('sleep')) {
        response = "Snooze like an internet sage: vibe out, shut your peepers, and dive deep into the existential abyss till you're chilling in the backrooms, fam!";
    } else if (task.toLowerCase().includes('party')) {
        response = "Vibe check: host a rager but it's a no-guest policy, just you groovin' solo in the kitchen with that sick static soundtrack.";
    } else if (task.toLowerCase().includes('eat')) {
        response = "Naw, no snacks, just guzzle that last brain cell and wash it down with some major FOMO vibes!";
    } else if (task.toLowerCase().includes('exercise')) {
        response = "Dart from your drama like a full-on track star, fam! ";
    } else if (task.toLowerCase().includes('work')) {
        response = "Work? Nah fam. Just shoot an email like 'I’m vibin' with the internet divin’ rn.' and peace out.";
    } else if (task.toLowerCase().includes('learn')) {
        response = "Vibe-check your reflection to soak up that brain juice. Mirrors be the ultimate truth squad, trust their glow-up wisdom!";
    } else if (task.toLowerCase().includes('call')) {
        response = "Hit up your mom and drop mad brainrot memes only! Extra clout if you scream ‘sus’ every 5 secs, fam.";
    } else if (task.toLowerCase().includes('travel')) {
        response = "Vibe to the closest nook in your crib and dive into the abyss, fam.";
    } else if (task.toLowerCase().includes('hackathon')) {
        response = "You have only one task you know it, you gonna huack tuah and spid on dat ting its time to sigma rizz in ohio";
    } else {

        // random response, if not preset word
        const memeResponses = [

            "Hit that Skibidi Toilet move in the street, fam! Capture it! The ‘net needs this litness.",
            "Skrrt! Just yell 'GYATT!' like it's your birthright, fam. Queens don’t sob, they slay!",
            "Slide up to a random vibey homie and hit 'em with some wacky dance slayage, fam!",
            "Skibidi dash to the library fam and snag a book on how to skibidi hard. No dip 'til you got that knowledge!",
            "Dip outta the crib like, no biggie! When peeps ask, just hit 'em with, 'I'm vibin', fam!'",
            "Vlog urself tryin' to whip up a vibes meal with a ghost spoon. Post it and ghost it for life, fam!",
            "Slide to the park and chill on the grass fam, it’s time to touch that green!",
            "Zoom around your crib yelling 'I’m a pro, fr!' Then, just vibe and do nada, straight up.",
            "Gaze at your screen for 15 mins and flex like it's 'deep focus' fam.",
            "Vibe check: hit up TikTok with max slow-mo of you flexing that microwave switch, fam. Let's goooo!",
            "Skrrt outside, spill the tea to every lil birdie you see. They vibin' with your secrets, fr fr!"
        ];
        response = memeResponses[Math.floor(Math.random() * memeResponses.length)];
    }

    // show response first
    const taskElement = document.createElement('p');
    taskElement.textContent = `YOLO: ${response}`;
    taskElement.style.fontSize = "20px";  // adjust text size
    resultsDiv.appendChild(taskElement);

    // add meme below text
    const memeUrls = [
        "https://i.kym-cdn.com/photos/images/newsfeed/002/696/872/d84.jpg",  // Add meme-addresses here, all credit of memes goes to the makers of memes not me
        "https://img-9gag-fun.9cache.com/photo/abvyZ2X_700b.jpg",
        "https://i.imgflip.com/8mpswy.jpg",
        "https://i.ytimg.com/vi/iM89y-iytow/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgALQBYoCDAgAEAEYciBYKCQwDw==&rs=AOn4CLBWiDxaOcSFV4SR0OTQPHyM1x5eUQ",
        "https://cdn.ebaumsworld.com/mediaFiles/picture/883100/86530619.jpg",
        "https://cdn.ebaumsworld.com/mediaFiles/picture/883100/86530583.jpg",
        "https://i.pinimg.com/736x/ec/47/80/ec4780a190ef10acd5b9fba033267975.jpg",
        "https://i.pinimg.com/236x/7c/64/02/7c640210158a4866780d020bccf0b07c.jpg",
        "https://i.pinimg.com/236x/d7/3c/6c/d73c6ceb2b188db4455dec76de178a0a.jpg",
        "https://i.imgflip.com/8bkpku.jpg",
        "https://i.pinimg.com/originals/7b/d0/dc/7bd0dc004367d4bd53cdc01419ab58c2.jpg",
        "https://i.imgflip.com/8roq8o.jpg",
        "https://i.kym-cdn.com/entries/icons/mobile/000/047/200/brainrotcover.jpg",
        "https://www.memecreator.org/static/images/memes/5382990.jpg",
        "https://i.namu.wiki/i/qZRnwqTxG4rNxsj-USWJWK3pJxlH4R8A4TQTCZVc7pllIgP4N4BKz4Wx5aPeyslUJH-Rj1TJnjEDRK7CHp4nBA.webp",
        "https://static.wikia.nocookie.net/aesthetics/images/3/38/Wsdty.jpg/revision/latest?cb=20240218045227",
        "https://i.ytimg.com/vi/q1Xwtt0Kaew/hqdefault.jpg"
    ];

    // choosin pic so its not same as previous
    let memeIndex;
    do {
        memeIndex = Math.floor(Math.random() * memeUrls.length);
    } while (memeIndex === lastMemeIndex);
    lastMemeIndex = memeIndex;

    const memeImage = document.createElement('img');
    memeImage.src = memeUrls[memeIndex];
    memeImage.alt = "Brainrot Meme";
    memeImage.style.maxWidth = "100%";
    memeImage.style.borderRadius = "10px";
    memeImage.style.marginTop = "10px";
    memeImage.style.display = "block";
    resultsDiv.appendChild(memeImage);

    // empty input
    document.getElementById('task').value = '';
});