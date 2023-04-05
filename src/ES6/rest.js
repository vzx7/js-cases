{
    function sum (...numbers) {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }

    console.log(sum(1, 2, 3, 4, 5)); // 15
    console.log(sum(1, 2)); // 3
    console.log(sum(10)); // 10

}

{
    function multiply (multiplier, ...numbers) {
        let result = 1;
        for (let i = 0; i < numbers.length; i++) {
            result *= numbers[i];
        }
        return result * multiplier;
    }

    console.log(multiply(2, 1, 2, 3)); // 12
    console.log(multiply(3, 1, 2)); // 6
    console.log(multiply(10)); // 0

}