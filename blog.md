#The significance of union and intersection types in Typescript.

##Union: 
If i talk about Union type in TypeScript then i would like to explain them with a real life example. Suppose, You go to a shop and see a vending machine which is mainly give you Tea or Coffee. I mean you can wither choose Tea or Coffee but at the same time you can't Choose both of them. Basically Union type work's exactly like that. If you use Union in a variable like:

```typescript
let Data : string | number;
Data = "Hello World",
Data = 1234,

In this situation you can only put a string value or a number value. Here if you put a Boolean value then it will be invalid value.

##Intersection: 
Intersection type mainly combined different types into one. If i give you an example then you can easily relate it. Imagine you want to make salad. So you basically need Cucumber, Onions and Tomatoes. By mixing them all you can make salad. But if you miss one of them then it won't be a perfect salad. Because each one has it's own flavor. 

In TypeScript, intersection work similarly, it helps you to create a more complex type by combine different types.

type BankAccount = {
    accountNumber: string;
    balance: number;
    bankName: string;
}
type StudentAccount = {
    studentId: string;
    universityName: string;
}
type StudentBankAccount = BankAccount & StudentAccount;


I hope now you can easily identify Union and Intersection type in TypeScript. By using those types you can write cleaner and more flexible code. So, go and explore it.
