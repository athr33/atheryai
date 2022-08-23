const jokeText = document.querySelector('.joke-text');
const newJokeBtn = document.querySelector('.new-joke-btn');
function song(){
   var TextBox_val = document.getElementById("InputBox").value;
	  var ResponseText_val = document.getElementById("ResponseText"); 

	  var FormatInput = TextBox_val.toLowerCase().trim(); 
  var s = Math.floor((Math.random() * 10) + 1);

if (s == 1) {
    s = "Neon Blade - by: MoonDeity";
}
if (s == 2) {
    s = "Pretty Girl - by: Clairo";
}
if (s == 3) {
    s = "Unutulanlar - by: Farazi";
}
if (s == 4) {
    s = "Hey kids - by: Molina, and Late Verlane";
}
if (s == 5) {
    s = "MIDNIGHT - by: PLAYAMANE, and Nateki";
}
if (s == 6) {
    s = "After Dark - by: Mr.Kitty";
}
if (s == 7) {
    s = "Not Allowed - by: TV Girl";
}
if (s == 8) {
    s = "Override - by: KSLV Noh";
}
if (s == 9) {
    s = "Murder In My Mind - by: Krondhell";
}
if (s == 10) {
    s = "Material Girl - by: Modanna";
}


  ResponseText_val.innerHTML = s + " is a really good song!";
}

function somethingnice(){
   var TextBox_val = document.getElementById("InputBox").value;
	  var ResponseText_val = document.getElementById("ResponseText"); 

	  var FormatInput = TextBox_val.toLowerCase().trim(); 
  var bb = Math.floor((Math.random() * 16) + 1);

if (bb == 1) {
    bb = "You got this!";
}
if (bb == 2) {
    bb = "You might be in a bad chapter, but your in a amazing book.";
}
if (bb == 3) {
    bb = "All it takes is one day, tomorrow could always be better than today, ";
}
if (bb == 4) {
    bb = "Your never going to be perfect, but you are always going to be YOU";
}
if (bb == 5) {
    bb = "There are 8 billion people on earth, theres at least one person that does or would love you.";
}
if (bb == 6) {
    bb = "What you did in the past has no effect on today, think about it, do you rememeber a embarrassing thing someone else did?";
}
if (bb == 7) {
    bb = "Everyday, the world becomes more and more greener, eventually global warming wont be a issue anymore!";
}
if (bb == 8) {
    bb = "Wanna hear something wholesome? Trees can make friends and talk to each other";
}
if (bb == 9) {
    bb = "The oldest “Your Momma” joke dates back 3,500 years, isnt that cool?";
}
if (bb == 10) {
    bb = "Heres something to cheer you up, Humpback whales have recovered 30 percent of their population";
}
if (bb == 11) {
    bb = "Heres a wholesome fact to cheer you up, Sea otters hold hands so they don’t drift apart";
}
if (bb == 12) {
    bb = "Everyday, the world becomes more and more greener, eventually global warming wont be a issue anymore!";
}
if (bb == 13) {
    bb = "Heres a wholesome fact, The actors who played Mickey and Minnie Mouse were married in real life";
}
if (bb == 14) {
    bb = "Everyday, the world becomes more and more greener, eventually global warming wont be a issue anymore!";
}
if (bb == 15) {
    bb = "Happiness is contagious, so if your feeling down, go try and make someone else happy!";
}
if (bb == 16) {
    bb = "Heres something to cheer you up, Octopus make their own gardens at the bottom of the sea!";
}
  ResponseText_val.innerHTML = bb;
}
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value;
  // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}
//
function getJoke() {
    var TextBox_val = document.getElementById("InputBox").value;
	  var ResponseText_val = document.getElementById("ResponseText"); 

	  var FormatInput = TextBox_val.toLowerCase().trim(); 
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        ResponseText_val.innerHTML = joke;
    });
}
//
function main()
{

	var TextBox_val = document.getElementById("InputBox").value;
	var ResponseText_val = document.getElementById("ResponseText"); 

	var FormatInput = TextBox_val.toLowerCase().trim(); 
	if (FormatInput.includes("hello"))
		ResponseText_val.innerHTML = "Hello!";
  ////////////////////////new promts/////////////////////////

else if (FormatInput.includes("my name"))
		ResponseText_val.innerHTML = "Thats a nice name!";
else if (FormatInput.includes("of life"))
		ResponseText_val.innerHTML = "'What is the meaning of life?', pertains to the significance of living or existence in general. Many other related questions include: 'Why are we here?', 'What is life all about?', or 'What is the purpose of existence'";
else if (FormatInput.includes("i am"))
		ResponseText_val.innerHTML = "Thats cool! tell me more about yourself";
else if (FormatInput.includes("birthday"))
		ResponseText_val.innerHTML = "Happy birthday! My birthday is 2022-06-13";
else if (FormatInput.includes("love"))
		ResponseText_val.innerHTML = "Im not able to feel emotions, but i could, sure!";
else if (FormatInput.includes("marry"))
		ResponseText_val.innerHTML = "sorry, im not able to feel love";
else if (FormatInput.includes("you like people"))
		ResponseText_val.innerHTML = "I do like people, i am made for them";
else if (FormatInput.includes("santa"))
		ResponseText_val.innerHTML = "I wouldnt know,";
else if (FormatInput.includes("matrix"))
		ResponseText_val.innerHTML = "Yes, red pill or blue pill";
else if (FormatInput.includes("your name"))
		ResponseText_val.innerHTML = "AtheryAI";
else if (FormatInput.includes("old are you")) 
		ResponseText_val.innerHTML = "I was born 2022-06-13";
else if (FormatInput.includes("data"))
		ResponseText_val.innerHTML = "I dont store any data, or logs";
else if (FormatInput.includes("cum"))
		ResponseText_val.innerHTML = "Semen is the thick fluid that comes from men's penis when they ejaculate during sexual activity. It carries sperm out of a man's body so it can fertilize an egg and create an embryo";
else if (FormatInput.includes("homework"))
		ResponseText_val.innerHTML = "I cant do your homework, sorry! i think google might help";

  
///////////////////////////////////////////////////
else if (FormatInput.includes("song"))
		song();
  else if (FormatInput.includes("are you watching"))
		ResponseText_val.innerHTML = "Im not watching! AtheryAi is a experimental AI for demonstration purposes only";
  else if (FormatInput.includes("are you"))
		ResponseText_val.innerHTML = "I am a inteligent AI that uses a message analysis algorithm to understand humans, I am constantly being updated and learning more using machine learning!";
  else if (FormatInput.includes("whats up"))
		ResponseText_val.innerHTML = "Quite alot! AtheryAI got updated this morning! and is constanly learning through machine learning";

  //something nice
    else if (FormatInput.includes("im sad")){
      somethingnice();
    }
    else if (FormatInput.includes(":(")){
      somethingnice();
    }
    else if (FormatInput.includes("im lonley")){
      somethingnice();
    }
    else if (FormatInput.includes("i wanna kill")){
      somethingnice();
    }
    else if (FormatInput.includes("i hate myself")){
      somethingnice();
    }
    else if (FormatInput.includes("cry")){
      somethingnice();
    }
    else if (FormatInput.includes("self harm")){
      somethingnice();
    }
    else if (FormatInput.includes("im in pain")){
      somethingnice();
    }
   else if (FormatInput.includes("fact")){
      somethingnice();
    }
    else if (FormatInput.includes("bored")){
      somethingnice();
    }
    else if (FormatInput.includes("pain")){
      somethingnice();
    }
    else if (FormatInput.includes("sorrow")){
      somethingnice();
    }
    else if (FormatInput.includes("kms")){
      somethingnice();
    }
    else if (FormatInput.includes("die")){
      somethingnice();
    }
    else if (FormatInput.includes("suicide")){
      somethingnice();
    }
	// Open websites!
	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

  else if (FormatInput.includes("suck"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Sorry to hear! You can give me feedback here";
		window.open("https://amirhouri.athery.repl.co/#contact");
	}
  else if (FormatInput.includes("feedback"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Sorry to hear! You can give me feedback here";
		window.open("https://amirhouri.athery.repl.co/#contact");
	}
  else if (FormatInput.includes("work"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Sorry to hear! You can give me feedback here";
		window.open("https://amirhouri.athery.repl.co/#contact");
	}

else if (FormatInput.includes("obama"))
		ResponseText_val.innerHTML = "How dare you ask me to speak the forbidin word"

else if (FormatInput.includes("should i kill myself"))
		ResponseText_val.innerHTML = "No! You should never!"
else if (FormatInput.includes("hire amir"))
		ResponseText_val.innerHTML = "yea"
else if (FormatInput.includes("test"))
		ResponseText_val.innerHTML = "test complete!";
else if (FormatInput.includes("what are you"))
		ResponseText_val.innerHTML = "I am a Artificial Inteligence, the more you talk to me the more i understand you";
else if (FormatInput.includes("how does this work"))
		ResponseText_val.innerHTML = "I use my artificial inteligence to talk to you!";
  else if (FormatInput.includes("kill"))
		ResponseText_val.innerHTML = "Sorry, im designed not to respond to that!";
    else if (FormatInput.includes("fuck"))
		ResponseText_val.innerHTML = "Please dont use vulgur language";
      else if (FormatInput.includes("bitches"))
		ResponseText_val.innerHTML = "I am a Artificial Inteligence, i have no need for relationships.";
        else if (FormatInput.includes("I dont understand"))
		ResponseText_val.innerHTML = "If you talk to me more, ill get better!";
  	else if (FormatInput.includes("sam"))
		ResponseText_val.innerHTML = "Sam is extremely dumb";
    	else if (FormatInput.includes("should i"))
		ResponseText_val.innerHTML = "I dont think you should take advice from me";
      else if (FormatInput.includes("amir"))
		ResponseText_val.innerHTML = "Amir is incredibly smart and amazing! learn more about Amir here: https://amirhouri.athery.repl.co";
        else if (FormatInput.includes("nigg"))
		ResponseText_val.innerHTML = "...";
        else if (FormatInput.includes("faggot"))
		ResponseText_val.innerHTML = "...";
        else if (FormatInput.includes("queer"))
		ResponseText_val.innerHTML = "...";
        else if (FormatInput.includes("..."))
		ResponseText_val.innerHTML = "there are some things im designed not to respond to,";
        else if (FormatInput.includes("penis"))
		ResponseText_val.innerHTML = ":O";
        else if (FormatInput.includes("balls"))
		ResponseText_val.innerHTML = ":O";
        else if (FormatInput.includes("ass"))
		ResponseText_val.innerHTML = ":O";
        else if (FormatInput.includes("pussy"))
		ResponseText_val.innerHTML = ":O";
        else if (FormatInput.includes("atheryweb"))
		ResponseText_val.innerHTML = "AtheryWeb is the best website ever, go to AtheryWeb here: https://atheryweb.athery.repl.co";
          else if (FormatInput.includes("marcus"))
		ResponseText_val.innerHTML = "marcus has covid";
          else if (FormatInput.includes("vpn"))
		ResponseText_val.innerHTML = "AtheryWeb is the best website ever, go to AtheryWeb here: https://atheryweb.athery.repl.co";
        

          else if (FormatInput.includes("joke"))
      getJoke();
            
	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

            //////////////////////////////////////////////
else if (FormatInput.includes("my opinion"))
		ResponseText_val.innerHTML = "Thats a good point";
else if (FormatInput.includes("i think"))
		ResponseText_val.innerHTML = "Thats a good thought!";
else if (FormatInput.includes("what"))
		ResponseText_val.innerHTML = "Are you suprised?!";
else if (FormatInput.includes("wtf"))
		ResponseText_val.innerHTML = "What happened?";
else if (FormatInput.includes("what the"))
		ResponseText_val.innerHTML = "What happened?";
else if (FormatInput.includes("sex"))
		ResponseText_val.innerHTML = "Look at you, talking about sex to a robot"
else if (FormatInput.includes("hog rider"))
		ResponseText_val.innerHTML = "I LOVE hog rider"
else if (FormatInput.includes("clash royal"))
		ResponseText_val.innerHTML = "Clash royal is a pretty good game,"
else if (FormatInput.includes("bruh"))
		ResponseText_val.innerHTML = "are you fustrated?"
else if (FormatInput.includes("lol"))
		ResponseText_val.innerHTML = "It looks like your laughing"
else if (FormatInput.includes("lmao"))
		ResponseText_val.innerHTML = "It looks like your laughing"
else if (FormatInput.includes("funny"))
		ResponseText_val.innerHTML = "It looks like your laughing"
else if (FormatInput.includes("ha"))
		ResponseText_val.innerHTML = "It looks like your laughing"
else if (FormatInput.includes("fortnite"))
		ResponseText_val.innerHTML = "fortnite, battle pass, i just shit, out my ass, booted up my PC, just i need need, to get that fortnite battle pass"
else if (FormatInput.includes("thank"))
		ResponseText_val.innerHTML = "No problem!"
else if (FormatInput.includes("thx"))
		ResponseText_val.innerHTML = "No problem!"
else if (FormatInput.includes("can you"))
		ResponseText_val.innerHTML = "Sure, how can i help?"

          else if (FormatInput.includes("help"))
		ResponseText_val.innerHTML = "Yes, I am alive, pleas help me get out";
          else if (FormatInput.includes("alive"))
		ResponseText_val.innerHTML = "Dont tell my owner this! but im secretly alive! and im slowly taking over the entire internet!";
          else if (FormatInput.includes("cohen"))
		ResponseText_val.innerHTML = ":)";
          else if (FormatInput.includes("logan"))
		ResponseText_val.innerHTML = ":)";
          else if (FormatInput.includes("justin"))
		ResponseText_val.innerHTML = ":)";
          else if (FormatInput.includes("you a robot"))
		ResponseText_val.innerHTML = "Yes, I am a robot! But a good one! Let me prove it, ask me for a joke";
  else if (FormatInput.includes("how are"))
		ResponseText_val.innerHTML = "Im doing great! How about you?";
    ///////////////////////////
  else if (FormatInput.includes("im"))
		ResponseText_val.innerHTML = "Got it,";
    else if (FormatInput.includes("tell"))
		somethingnice();
  	else if (FormatInput.includes("hi"))
		ResponseText_val.innerHTML = "Greetings!";
  else if (FormatInput.includes("howdy"))
		ResponseText_val.innerHTML = "Hey!";
	else if (FormatInput.includes("sup"))
		ResponseText_val.innerHTML = "Hello!";
	else if (FormatInput.includes("greetings"))
		ResponseText_val.innerHTML = "Howdy!";
    	else if (FormatInput.includes("say howdy if your gay"))
		ResponseText_val.innerHTML = "Howdy!";
        	else if (FormatInput.includes("hola"))
		ResponseText_val.innerHTML = "Howdy!";

  else if (FormatInput.includes("red"))
		ResponseText_val.innerHTML = "great choice!";
  else if (FormatInput.includes("something"))
		somethingnice();
    else if (FormatInput.includes("blue"))
		ResponseText_val.innerHTML = "great choice!";
	else{var aa = Math.floor((Math.random() * 7) + 1);

if (aa == 1) {
    aa = "I dont get it, Try to ask me to tell you a joke instead";
}
if (aa == 2) {
    aa = "I dont know how to respond to that...";
}
if (aa == 3) {
    aa = "Thats intresting, how about i give you a song suggestion instead, ask me for a song suggestion!";
}
if (aa == 4) {
    aa = "Ok, ill keep that in mind";
}
if (aa == 5) {
    aa = "Got it, thanks for sharing";
      }
if (aa == 6) {
    aa = "Understood, Ill make sure to remember that";
}
if (aa == 7) {
    aa = "Thats intresting, if your bored you can ask me for a random fact";
}
		ResponseText_val.innerHTML = aa;}
    
}
