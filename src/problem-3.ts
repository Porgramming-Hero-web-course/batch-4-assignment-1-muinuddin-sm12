{
    //

    // Problem 3:
    const countWordOccurrences = (sentence:string, word:string):number => {
        let count = 0;
        const sentenceArr = sentence.split(/[,.!?\s]+/);
        sentenceArr.forEach((elem:string) => {
            if(elem.toLocaleLowerCase() === word.toLocaleLowerCase()){
                count++;
            }
        })
        return count;
    }
    // const result = countWordOccurrences('TypeScript is great. I love TypeScript!', 'typescript')
    // console.log(result)


    //
}