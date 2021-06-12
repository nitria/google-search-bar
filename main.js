var googleSearchUrl = "https://www.google.com/search?q=";

$(".search").on("input", function () {
  $("input").val().length > 0
    ? $(".closeIcon").css("visibility", "visible")
    : $(".closeIcon").css("visibility", "hidden");
  console.log($("input").val());
});

$(".closeIcon").on("click", () => {
  $("input").val("");
  $(".closeIcon").css("visibility", "hidden");
});

$(".googlebtn").on("click", () => {
  var result = googleSearchUrl + $("input").val();
  console.log($("input").val());
  window.open(result, "_self");
});

$(".search").on("keydown", (enter) => {
  var result = googleSearchUrl + $("input").val();
  if (enter.keyCode === 13) {
    console.log($("input").val());
    window.open(result, "_self");
  }
});

$(".luckybtn").on("click", () => {
  var result = Math.floor(Math.random() * quotes.length);
  var getquote = quotes[result];
  $("p").html(getquote.quote);
});

const quotes = [
  {
    id: 1,
    quote:
      "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
  },
  {
    id: 2,
    quote: "“The secret of getting ahead is getting started.” – Mark Twain",
  },
  {
    id: 3,
    quote:
      "“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan",
  },
  {
    id: 4,
    quote:
      "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash",
  },
  {
    id: 5,
    quote:
      "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
  },
  {
    id: 6,
    quote: "“Only the paranoid survive.” – Andy Grove",
  },
  {
    id: 7,
    quote: "“It’s hard to beat a person who never gives up.” – Babe Ruth",
  },
];
