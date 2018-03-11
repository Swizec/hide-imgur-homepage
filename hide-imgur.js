function hideElement(query) {
    let el = document.querySelector(query);
    if (el) {
        el.style.visibility = "hidden";
    }
}

function hideAsync(query) {
    const el = document.querySelector(query);

    if (el) {
        hideElement(query);
    } else {
        setTimeout(function() {
            hideAsync(query);
        }, 1000);
    }
}

// Go through dangerouns elements and hide them
["#imagelist", "#top-comments", ".sentence-sorting", "#right-content"].forEach(
    hideElement
);
hideAsync("#extended-imagelist");
