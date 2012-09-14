// CONFIG
_.templateSettings.variable = 'm';

// DATA
app = {};

app.speakers = [
  {
    name: 'Nathan Jones',
    avatar: 'img/speaker/NaithanJones.gif',
    bio: 'Naithan “Nait” Jones founded AgLocal in late 2011 to be a web and mobile platform that will match the supply of independent and family farms that produce meat to the demand of wholesale and retail buyers that seek a direct buying connection to these farms.',
    social: {
      twitter: 'https://twitter.com/AgLocal'
    }
  },
  {
    name: 'Jason Hoffman',
    avatar: 'img/speaker/JasonHoffman.gif',
    bio: 'Jason the founder and CTO at Joyent, where he is responsible for overseeing the development and implementation of Joyent’s cloud computing technology.',
    social: {
      twitter: 'https://twitter.com/jasonh',
      wikipedia: 'http://en.wikipedia.org/wiki/Joyent'
    }
  },
  {
    name: 'Scott Chacon',
    avatar: 'img/speaker/ScottChacon.gif',
    bio: 'Scott Chacon is CIO of Github, the largest code host in the world. Github recently closed $100m Series A investment, primarily from Andreessen Horowitz – one of the top VC firms in Silicon Valley.',
    social: {
      twitter: 'https://twitter.com/chacon'
    }
  }
]
;//app.speakers

app.templates = {
  speaker: _.template($('#speaker').html()),
  social : _.template($('#social').html())
}
;//app.templates

// UTILITIES

// IE safe console.log
function log(){ console && console.log(arguments) }

// INITIALIZE
initFitText();
renderSpeakerList();

function initFitText(){
  $('h1').fitText(4, {minFontSize:32, maxFontSize:64});
  $('p') .fitText(5, {minFontSize:16, maxFontSize:32});
}

function renderSpeakerList(){
  $('.speakers').append(speakerList);
}

function speakerList(){
  return _.map(app.speakers, function(speaker){
    return app.templates.speaker(speaker);
  }).join('');
}

function socialTemplate(list){
  return _.map(list, function(url, type){
    var obj = {
      "type": type.toLowerCase(),
      "url" : url,
      "name": capitalizeFirstLetter(type)
    }
    ;//var

    return app.templates.social(obj);
  }).join('');
}

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}