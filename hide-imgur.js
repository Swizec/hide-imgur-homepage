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
    }
}

// Go through dangerouns elements and hide them
["#imagelist", "#top-comments", ".sentence-sorting", "#right-content"].forEach(
    hideElement
);
hideAsync("#extended-imagelist");
