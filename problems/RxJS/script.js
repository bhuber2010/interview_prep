
var refreshButton = document.querySelector(".refresh");

var sartupRequestStream = Rx.Observable.just("https://api.github.com/users");

var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

var requestStream = refreshClickStream.map(event => {
  var randomOffset = Math.floor(Math.random() * 500);
  return "https://api.github.com/users?since=" + randomOffset;
})


var responseStream = requestStream.merge(sartupRequestStream)
  .flatMap(requestUrl => {
    return Rx.Observable.fromPromise($.getJSON(requestUrl))
  })

// responseStream.subscribe(response => {
//   console.log(response);
// })

function createSuggestionStream(responseStream) {
  return responseStream.map(listUser => {
    return listUser[Math.floor(Math.random() * listUser.length)]
  })
  .startWith(null)
  .merge(refreshClickStream.map(ev => null));
}

function renderSuggestion(userData, element) {
  if (userData === null) {
    element.style.visibility = 'hidden';
  } else {
    element.style.visibility = 'visible';
    var usernameEl = element.querySelector(".username");
    usernameEl.href = userData.html_url;
    usernameEl.textContent = userData.login;
    var imgEl = element.querySelector('img');
    imgEl.src = userData.avatar_url;
  }
}

function createAndRenderStream(responseStream, element) {
  var stream = createSuggestionStream(responseStream);
  suggestionStreams.push(stream);
  stream.subscribe(user => {
    renderSuggestion(user, element);
  })
}

var suggestionStreams = [];

var suggestionElements = document.querySelectorAll('.suggestion');
suggestionElements.forEach(suggestionEl => {
  createAndRenderStream(responseStream, suggestionEl)
})
