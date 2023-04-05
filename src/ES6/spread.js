{
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const newArr = [...arr1, ...arr2];
    console.log(newArr); // [1, 2, 3, 4, 5, 6]

}

{
    const obj1 = { x: 1, y: 2 };
    const obj2 = { ...obj1, x: 10 };
    console.log(obj2); // { x: 10, y: 2 }
}

{
    function myFunc (x, y, z) {
        console.log(x, y, z);
    }

    const arr = [1, 2, 3];
    myFunc(...arr); // 1 2 3

}