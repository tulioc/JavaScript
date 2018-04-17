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
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', (e) => {
    const DONE = 4;
    if(e.target.readyState === DONE) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data);
    }
  });
  request.open('GET', 'http://puzzle.mead.io/puzzle');
  request.send();
}


getData((error, data) => {
  if(error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(data.puzzle);
  }
});

```
