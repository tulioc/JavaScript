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
