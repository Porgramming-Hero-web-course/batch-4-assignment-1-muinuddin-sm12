{
  //
  // Problem 8:
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    let isValidate = true;
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
        return false;
      }
    }
    return isValidate;
  };
//   const person = { name: "Alice", age: 25, email: "alice@example.com" };
//   const result = validateKeys(person, ['name']);
//   console.log(result);

  //
}
