let array = [];

const pushMethod = () => {

    let arrayLength = prompt('How many number you want to push: ');

    for (let index = 0; index < arrayLength; index++) {
        let arrayElement = prompt('Enter the number you want to push: ');

        array.push(arrayElement);
    }

    alert(array);

}

// pushMethod();

const popMethod = () => {

    let arrayLength = prompt('How many array items you want to remove?: ');

    arrayLength.forEach(function() {

        let arrayElement = prompt('Enter the element you want to pop: ');

        array.pop(arrayElement);
    });

    alert(array);
}

// popMethod();