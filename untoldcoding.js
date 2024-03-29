const text =
"Dear Sridha......., Har dhalti sham ke sath my tree of love is growing bigger n bigger. U knw when u r not there it feels like a piece of me is missing somewhere.    Holi pr kaise har jagah colourful ho jati hai be it any place in the same way u r my holi that makes my life a littile more colourful 💗.     I have a emptyness in my life which no one cal fill except ur love.      Tere sath beeta har vo pal mere liye yaadgar hai vo yaadein bohot pyaari hai.   Vo bs yaadein nhi hai vo pal humare rishte ki nev hai jinki wajh se hum aur paas aate gaye its like un palo ne humare bich ka vo bridge banya hai . I have been with u pr main tere sath vo shurwat vala harshu ban kr nhi reh paya jis ki wajah se tu meri vo jhali na bani reh payi .      I am here to ask you for the another chance so that  i can give u the comfort to be completely urself without any thoughts. Ye Net vali Line hai ' Lets promise that will never let the miles between us dull the spark of our sexy relationship'... Plzz give me another chance to make u feel the love u deserve , Chance to make u laugh , Chance to embrance ur smile more , Chance to listen u , Chance to understand u the way u want , Chance to make u feel loved , Chance to make u feel relaxed , Chance to make u wet , Chance to make u feel abt mb , ChANCE TO LOVE U MORE N MORE , A chance ki jab hum ek din mile tab ek dusre ko dekh kr kas ke gale lagaye aur ek coffe shop mein baith kr in sabhi palo ko yaad kr ke hasee mukuraye aur bole we have the best relation.... Jab tk vo pal na aaye remeber that u r egarly missed me and loved more than words can ever convey .....     ";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
