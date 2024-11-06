{
    //
    
    // Problem 5:
    const getProperty = <T, X extends keyof T>(obj: T, key:X) => {
        return obj[key];
    }

    // const person = {name: "Alice", age: 30};
    // const result = getProperty(person, 'name')
    // console.log(result)

    //
}