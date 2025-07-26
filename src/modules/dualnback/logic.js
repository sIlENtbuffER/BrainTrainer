export function generateStimulus() {
    const visualIndex = Math.floor(Math.random() * 9);
    const audioLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return {visualIndex, audioLetter};
}

export function checkMatch(history, n) {
    if (history.length <= n) return false;
    const len = history.length;
    return history[len - 1] === history[len - 1 - n];
}