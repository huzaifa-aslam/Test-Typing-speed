console.log(`im js`);
let msg = document.getElementById("msg");
let typeWords = document.getElementById("typeWords");
let btn = document.getElementById("btn");
let startTime, endTime;
// console.log(msg);
// console.log(typeWords);
// console.log(btn);
let words = ['Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups', 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];


const playGame = () => {
    let randomWords = Math.floor(Math.random() * words.length);
    // console.log(randomWords);
    msg.innerHTML = words[randomWords];
    let date = new Date();
    startTime = date.getTime();

}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime()
    let totalTime = ((endTime - startTime) / 1000);
    //console.log(totalTime);
    let totalWords = typeWords.value;
    let conutWords = counter(totalWords);
    let speed = Math.round((conutWords / totalTime) * 60);
    let finalMsg = `You Typed total at ${speed} words per minute`;

    finalMsg += compareWords(msg.innerHTML, totalWords);

    msg.innerHTML = finalMsg;





}
const compareWords = (str1, str2) => {
    words1 = str1.split(" ");
    words2 = str2.split(" ");
    let count = 0;
    words1.forEach(function(item, index) {
        if (item == words2[index]) {
            count++;
        }
    });
    let errorWrods = (words1.length - count);

    let countErrors = errorWrods;
    console.log(countErrors);

    if (errorWrods <= 1) {
        return (` ${count} correct out of ${words1.length} And the Total number of Errors is ${errorWrods}`)
    } else {
        return (` ${count} correct out of ${words1.length} And the Total number of Errors are ${errorWrods}`)
    }


}
const counter = (str) => {
    let typedWords = str.split(" ").length;
    //  console.log(typedWords);
    return typedWords;
}
typeWords.disabled = true;
btn.addEventListener('click', function() {
    if (this.innerText == 'Start') {
        typeWords.value = " ";
        typeWords.disabled = false;

        playGame();
        btn.innerHTML = "Done";

    } else {
        typeWords.disabled = true;

        btn.innerHTML = "Start";

        endPlay();
    }

})