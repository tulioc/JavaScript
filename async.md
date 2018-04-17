# Async JS
----
## HTTP Requests

Talvez a forma mais primitiva de fazer um request com javascript seja utilizando o XMLHttpRequest do seu browser.

  ```Javascript
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    const DONE = 4;
    if(e.target.readyState === DONE) {
      const data = JSON.parse(e.target.responseText)
      console.log(data)
    }
  });

  request.open('GET', 'http://puzzle.mead.io/puzzle')
  request.send()

  ```
## Callback

```javascript
const getData = (callback) => {
  setTimeout(() => {
    callback(undefined, 'Deu bom! - Callback');
  }, 2000);
}

getData((err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

## Promise

```javascript
const myPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Deu bom! - Promise');
  }, 2000)
});

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err);
});
```
