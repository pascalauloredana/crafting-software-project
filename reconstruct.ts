export function reconstruct(words, inputString) {
    const helperObject = {}

    words.forEach(word => {
        let copyInputString = inputString;
        while (copyInputString.length) {
            const wordIndex = copyInputString.indexOf(word);
            if (wordIndex !== -1 && !helperObject.hasOwnProperty(wordIndex)) {
                helperObject[wordIndex] = word;
                copyInputString = copyInputString.slice(0, wordIndex) + copyInputString.slice(wordIndex + word.length);
            } else {
                return;
            }
        }
    });
    return Object.values(helperObject);
}
