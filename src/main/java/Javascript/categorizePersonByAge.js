function categorizePersonByAge(age) {
    if (age < 13) {
        console.log("kid");
    } else if (age >= 13 && age <= 19) {
        console.log("teen");
    } else {
        console.log("adult");
    }
}

// Example usage
categorizePersonByAge(10); // Should print "kid"
categorizePersonByAge(15); // Should print "teen"
categorizePersonByAge(25); // Should print "adult"