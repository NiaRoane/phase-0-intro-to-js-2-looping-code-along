const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const name = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise';

function writeCards(name, event) {
    let newArray = [];

    for (let i=0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
       
    }
    return newArray;
}
writeCards('name', 'event');

function countDown(number) {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
        debugger;
    }
    return countDown
}
countDown(number);