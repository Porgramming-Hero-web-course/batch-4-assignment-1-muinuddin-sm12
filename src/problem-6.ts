{
  //

  //Problem 6:
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  type PartialType = Partial<Profile>;
  const updateProfile = (obj1: Profile, obj2: PartialType): Profile => {
    const newObj = Object.assign({}, obj1, obj2);
    return newObj;
  };

  //   const myProfile = {name: "Alice", age: 25, email: "alice@example.com"};
  //   const result = updateProfile(myProfile, {age:45});
  //   console.log(result)

  //
}
