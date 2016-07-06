
var refreshButton = document.querySelector(".refresh");
var closeButtonsArray = [...document.querySelectorAll('.close')];

var sartupRequestStream = Rx.Observable.just("https://api.github.com/users");

var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

var closeClickStreamsArray = closeButtonsArray.map(button => {
  return Rx.Observable.fromEvent(button, 'click');
})

var requestStream = createRequestStream(refreshClickStream);

var responseStream = createResponseStream(requestStream, sartupRequestStream);

var closeResponseStreamsArray = closeClickStreamsArray.map(stream => {
  return createResponseStream(createRequestStream(stream));
})

// responseStream.subscribe(response => {
//   console.log(response);
// })

function createRequestStream(eventStream) {
  return eventStream.map(event => {
    var randomOffset = Math.floor(Math.random() * 500);
    return "https://api.github.com/users?since=" + randomOffset;
  })
}

function createResponseStream(inputStream, startStream) {
  var stream = startStream ? inputStream.merge(sartupRequestStream) : inputStream;
  return stream.flatMap(requestUrl => {
    console.log(requestUrl);
    return Rx.Observable.fromPromise($.getJSON(requestUrl))
  }).shareReplay(1)
}

function createSuggestionStream(responseStream, closeResponseStream) {
  var stream = responseStream.merge(closeResponseStream);
  return stream.map(listUser => {
    return listUser[Math.floor(Math.random() * listUser.length)]
  })
  .startWith(null)
  // .merge(refreshClickStream.map(ev => null)); // This line clears last users immediatly on refresh click
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

function createAndRenderStream(responseStream, closeResponseStream, element) {
  var stream = createSuggestionStream(responseStream, closeResponseStream);
  suggestionStreams.push(stream);
  stream.subscribe(user => {
    renderSuggestion(user, element);
  })
}

var suggestionStreams = [];

var suggestionElements = document.querySelectorAll('.suggestion');
suggestionElements.forEach((suggestionEl, i) => {
  createAndRenderStream(responseStream, closeResponseStreamsArray[i], suggestionEl)
})
