function printPattern() {
    for (let i = 0; i < 5; i++) {
        let pattern = '';
        // Append '+' for the required number of times
        for (let j = 0; j < 4 - i; j++) {
            pattern += '+';
        }
        // Append '-' for the remaining times up to 6 characters
        for (let k = 0; k <= i + 1; k++) {
            pattern += '-';
        }
        console.log(pattern);
    }
}

printPattern();