const search = document.location.search;
const title = document.querySelector("title");

const n = parseInt(search.slice(1));
console.log(n)
let result = 0;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { 
      if (i % j == 0) continue nextPrime; 
    }
  
    result++; 
}

window.document.title = result;

