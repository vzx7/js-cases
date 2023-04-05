function greet (name = 'Гость', greeting = 'Привет') {
    console.log(`${greeting}, ${name}!`);
}

greet(); // Привет, Гость!
greet('Джон'); // Привет, Джон!
greet('Джон', 'Здравствуйте'); // Здравствуйте, Джон!
