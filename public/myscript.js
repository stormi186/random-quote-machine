const quotes = [
  {quote: "Vent ikke på lederen. Gjør det selv, person til person.",
   author: "Mor Theresa"},
  {quote: "Min bestefar sa alltid at det finnes to personer. De som gjør jobben og de som tar æren. Han sa at jeg burde satse på den første gruppen. Konkurransen er mye mindre der.",
   author: "Indira Ghandi"},
  {quote: "Før alle av oss har oppnådd målet har ingen oppnådd noe.",
   author: "Rosemary Brown"},
  {quote: "Skal man lede et orkester må man være villig til å vende ryggen til publikum.",
   author: "Max Lucado"},
  {quote: "En hær av sauer ledet av en løve vil slå en hær av løver ledet av en sau.",
   author: "Arabisk ordtak"},
  {quote: "Et liv brukt på feiltak er bedre enn et liv brukt på ingenting.",
   author: "George Bernhard Shaw"},
  {quote: "Se over skulderen din og sørg for at noen følger etter deg.",
   author: "Henry Gilmer"},
  {quote: "For å lede et folk er det best å gå bak dem.",
   author: "Lao Tzu"},
  {quote: "Han som aldri har lært å følge ordre kan aldri bli en god leder.",
   author: "Aristotles"},
  {quote: "Umulig er et ord som kun finnes i idioters ordbøker.",
   author: "Napoleon"},
  {quote: "Hvis de blinde leder de blinde vil alle ende i grøfta.",
   author: "Jesus Kristus"},
  {quote: "En leders oppgave er å ta folk fra der de er til der de aldri har vært.",
   author: "Henry Kissinger"},
  {quote: "Når alle tenker likt er det ingen som tenker.",
   author: "Walter Lippman"},
  {quote: "Stor er det mennesket som aldri har mistet barnet i sitt hjerte.",
   author: "Meng-Tse"},
  {quote: "Jeg føler ingen regler, jeg prøver å få noe gjort.",
   author: "Thomas Edison"},
  {quote: "Det er ikke vanskelig å få nye ideer. Det vanskelige er å la det som har virket i to år bli fjernet.",
   author: "Roger van Oech"},
  {quote: "Når soldatene kommer til deg med problemer er den dagen du har sluttet å lede dem.",
   author: "Colin Powell"},
  {quote: "I tider som dette er det viktig å huske at det alltid har vært tider som dette.",
   author: "Paul Harvey"},
  {quote: "Bare de viseste og dummeste menn forandrer seg aldri.",
   author: "Konfucius"},
  {quote: "For den som ikke vet hvor han skal finnes det ingenting som heter medvind.",
   author: "Seneca"},
  {quote: "Det er bedre å bli fryktet enn elsket.",
   author: "Macchiavelli"},
   {quote: "Folk bryr seg ikke om hvor mye du vet før de vet hvor mye du bryr deg.",
   author: "Mike McNight"},
   {quote: "Ingen god avgjørelse rundt markedsføring har blitt gjort med basis i kvantitative data.",
   author: "John Scully"},
   {quote: "Kunder kjøper for sine egne grunner, ikke dine.",
   author: "Orvel Ray Wilson"},
   {quote: "I fabrikken lager vi medisiner, i apoteket selger vi håp.",
   author: "Charles Revson"}
]

var Random = React.createClass({

getInitialState: function () {
  return {
    color: [50, 100, 150],
    quote: quotes[1][0],
    author: quotes[1][1]    
  };
},

componentDidMount: function () {
  this.applyColor();
  this.changeQuote();
},

componentDidUpdate: function () {
  this.applyColor();
  this.changeQuote();
},

formatColor: function (arr) {
  return 'rgb(' + arr.join(', ') + ')';
},

applyColor: function () {
  var color = this.formatColor(this.state.color);
  document.body.style.backgroundColor = color;
  document.getElementById('wrapper').style.background = color;
  document.getElementById('text').style.color = color;
  document.getElementById('author').style.color = color;
  document.getElementById('tweet-quote').style.background = color;
  document.getElementById('facebook-quote').style.background = color;
  document.getElementById('quote-sign').style.color = color
  document.getElementById('quote-sign-2').style.color = color;
  document.getElementById('new-quote').style.background = color;     
},

changeQuote: function () {
  var quote = quotes[Math.floor(Math.random()*quotes.length)].quote;
  var author = quotes[Math.floor(Math.random()*quotes.length)].author;
  document.getElementById('text').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
  forShareQuote = quote+" - "+author;
  forShareQuote.replace(/\s/g, "+");
  tweetUrl = "https://twitter.com/intent/tweet?text=" + forShareQuote;
  document.getElementById('tweet-quote').setAttribute("href", tweetUrl);
},

chooseColor: function () {
  for (var i = 0, random = []; i < 3; i++) {
    random.push(Math.floor(Math.random()*256));
  }
  return random; 
},

handleClick: function () {
  this.setState({
    color: this.chooseColor()
  });
},

render: function () {
  return (
    <div>
      <button className="button" id="new-quote" onClick={this.handleClick}>
        Nytt sitat
      </button>
    </div>
  );
}
});

ReactDOM.render(<Random />, document.getElementById('new'));