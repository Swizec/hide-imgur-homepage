const advice = [
    "Do some stretches",
    "Focus on your breathing for 1 minute",
    "Do 10 pushups",
    "Do 10 squats",
    "Walk around for 5 minutes",
    "Gaze through the window to rest your eyes",
    "Make some coffee or tea",
    "Ask a coworker about their weekend"
];

function hideElement(query) {
    let el = document.querySelector(query);
    if (el) {
        el.style.visibility = "hidden";
        return true;
    } else {
        return false;
    }
}

function hideAsync(query) {
    const hidden = hideElement(query);

    if (!hidden) {
        setTimeout(function() {
            hideAsync(query);
        }, 100);
    } else {
        putUpSomeContent();
    }
}

function putUpSomeContent() {
    if (!document.querySelector("#content")) return;

    const N = document.querySelectorAll(".post").length,
        sorting = document.querySelector(".sentence-sorting");

    let div = document.querySelector(".hide-imgur-content");

    if (!div) {
        div = document.createElement("div");
        div.className = "hide-imgur-content";
        document.querySelector("#content").insertBefore(div, sorting);
    }

    div.innerHTML = `
    <h1>🎉 Hide Imgur Homepage just saved you from ${N} distracting images. 🎉</h1>
    <h1>You're welcome!</h1>
    <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif"></a>
    <p>You obviously came here because you need a break. Work is hard. 👇</p>
    <p><big>${advice[Math.floor(Math.random() * advice.length)]}</big></p>
    <p>Better? Get back to work!</p>
    <p><br/></p>
    <p><small>To add more advice, submit a PR on <a href="https://github.com/Swizec/hide-imgur-homepage">GitHub</a></small></p>
    <p><small>Built by <a href="https://swizec.com/blog">Swizec Teller</a> <br />during a <a href="https://www.youtube.com/SwizecTeller">livecoding session</a></small></p>
    `;
}

// Go through dangerouns elements and hide them
[
    "#imagelist",
    "#top-comments",
    ".sentence-sorting",
    "#right-content",
    "#extended-imagelist"
].forEach(hideAsync);

putUpSomeContent();
