// CONFIG
_.templateSettings.variable = 'm';

// DATA
app = {};

app.speakers = [
  {
    name: 'Nathan Jones',
    avatar: 'img/speaker/NaithanJones.gif',
    bio: 'yo yo yo',
    social: {
      twitter: 'http://twitter.com/thethechad',
      facebook: 'http://facebook.com/thethechad'
    }
  },
  {
    name: 'Jason Hoffman',
    avatar: 'img/speaker/JasonHoffman.gif',
    bio: 'lskjdflkd',
    social: {
      google: 'http://google.com'
    }
  },
  {
    name: 'Scott Chacon',
    avatar: 'img/speaker/ScottChacon.gif',
    bio: 'lskjflkjd',
    social: {
      twitter: 'http://twitter.com'
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