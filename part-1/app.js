let favNumber = 4;
let baseURL = "http://numbersapi.com";

// 1. 
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part1();

// 2. 
const favNumber = [6, 12, 21];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part2();

// 3.
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();