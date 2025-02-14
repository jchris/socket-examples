import dns from '@socketsupply/io/dns.js';

const results = document.querySelector('#results');
const input = document.querySelector('#hostname');
let i = 3;
let interval = null;

document.querySelector('#lookup').addEventListener('click', e => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    results.innerHTML = 'Loading' + '.'.repeat(i);
    i = (i < 3) ? ++i : 1;
  }, 100);
  dns.lookup(input.value, (err, address) => {
    clearInterval(interval);
    results.innerHTML = err ? err.message : JSON.stringify(address);
  });
  e.preventDefault();
});
