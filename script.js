function copy(i) {
    var range = document.createRange();
    range.selectNode(document.getElementById(i));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}