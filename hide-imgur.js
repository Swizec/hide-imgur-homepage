const advice = [
    "Do some stretches",
    "Focus on your breathing for 1 minute",
    "Do 10 pushups",
    "Do 10 squats",
    "Walk around for 5 minutes",
    "Gaze through the window to rest your eyes"
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
        }, 1000);
    } else {
        putUpSomeContent();
    }
}

function putUpSomeContent() {
    const N = document.querySelectorAll(".post").length,
        sorting = document.querySelector(".sentence-sorting");

    let div = document.querySelector(".hide-imgur-content");

    if (!div) {
        div = document.createElement("div");
        div.className = "hide-imgur-content";
        document.querySelector("#content").insertBefore(div, sorting);
    }

    div.innerHTML = `
    <h1>HideImgurHomepage saved you from ${N} distracting images.</h1>
    <h1>You're welcome!</h1>
    <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif"></a>
    <p>Now, you obviously came here because you need a break.</p>
    <p><big>${advice[Math.floor(Math.random() * advice.length)]}</big></p>
    <p>Feel better? Get back to work!</p>
    <p><small></small></p>
    `;
}

// Go through dangerouns elements and hide them
["#imagelist", "#top-comments", ".sentence-sorting", "#right-content"].forEach(
    hideElement
);
hideAsync("#extended-imagelist");

putUpSomeContent();
