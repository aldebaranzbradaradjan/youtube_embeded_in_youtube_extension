
const instance = "https://www.youtube.com/embed/";
let m_url_part = ""

function waitFor(conditionFunction) {
  const poll = resolve => {
    if (conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }
  return new Promise(poll);
}

function replace() {
  waitFor(_ => window.location.href.includes("youtube.com/watch?v=")
    && document.getElementById("player") !== null
    && m_url_part !== window.location.href.split("/watch?v=")[1])
    .then(_ => {
      document.getElementById("player").innerHTML =
        '<iframe width="100%" height="480px" src="https://www.youtube.com/embed/'
        + window.location.href.split("/watch?v=")[1]
        + '?autoplay=1"> </iframe>'

      m_url_part = window.location.href.split("/watch?v=")[1]
      replace()
    }
    );
}

replace()