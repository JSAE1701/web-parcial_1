const NYTKey = "NYTimes API"; // NYT API Key
const NasaKey = "Nasa API"; //Nasa API Key


function getNews() {
    var url;
    function getRandomNum(max)
    {
      return Math.floor(Math.random() * max);
    }
    var section = getRandomNum(5); // Generates random number between 0 and 4
    var index = getRandomNum(20);
    console.log(section);
    if (section == 0)
    {
      url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=" + NYTKey;
    } else if (section == 1)
    {
      url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" + NYTKey;
    } else if (section == 2)
    {
      url = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=" + NYTKey;
    } else if (section == 3)
    {
      url = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=" + NYTKey;
    } else if (section == 4)
    {
      url = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=" + NYTKey;
    }
    console.log(url);
    var request = new XMLHttpRequest(); // Create new XMLHttpRequest object
    request.onload = function(NYT) // Loads request
    {
      console.log(NYT); // Prints all response to console
      console.log(NYT.target.responseText); // Prints text to console
      var data = JSON.parse(NYT.target.responseText) // Converts JSON to JS object
      var news_head = document.getElementById("news_head"); // Gets news_title element
      var news_author = document.getElementById("news_author"); // Gets news_author element
      var news_body = document.getElementById("news_body"); // Gets news_body element
      var news_img = document.getElementById("news_img"); // Gets news_img element
      var news_url = document.getElementById("news_url"); // Gets news_url element
      news_head.innerHTML = data.results[index].title; // Replaces innerHTML with news title
      news_author.innerHTML = data.results[index].byline; // Replaces innerHTML with news author
      news_body.innerHTML = data.results[index].abstract; // Replaces innerHTML with news body
      news_img.src = data.results[index].multimedia[0].url; // Replaces src with news image
      news_url.href = data.results[index].url; // Replaces href with news url
      console.log(data.results[index].url);
    }
    request.open("GET", url, true);
    request.send();
  }

function getBackground() {
  function getRandomNum(max)
  {
    return Math.floor(Math.random() * max);
  }
  var index = getRandomNum(30);
  let start_date = "2022-01-01";
  let end_date = "2022-01-31";
  url = "https://api.nasa.gov/planetary/apod?start_date=" + start_date + "&end_date=" + end_date + "&api_key=" + NasaKey;
  console.log(url);
  var request = new XMLHttpRequest();
  request.onload = function(bg) {
    console.log(bg);
    console.log(bg.target.response);
    var data = JSON.parse(bg.target.response);
    var image = document.getElementById("apod_img");
    var title = document.getElementById("apod_head");
    var explanation = document.getElementById("apod_text");
    title.innerHTML = data[index].title;
    explanation.innerHTML = data[index].explanation;
    image.src = data[index].url;
    document.body.style.backgroundImage = "url(" + data[index].url + ")";
  }
  request.open("GET", url, true);
  request.send();
}
