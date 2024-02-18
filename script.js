
// function for toggling the genre button 
function displayGenre(){
  var genreDisplay = document.getElementById('genreM');
  if(genreDisplay.style.display === "none"){
    genreDisplay.style.display = "block"
  }else{
    genreDisplay.style.display = "none"
  }
}




// pop info 
function Pop(){
  var genreName = document.getElementById('genreName');
  var albumArt = document.getElementById('albumArt');
  var songName = document.getElementById('songName');
  var artistName = document.getElementById('artistName');
  var albumArt2 = document.getElementById('albumArt2');
  var songAudio = document.getElementById('songAudio');
  var lyricsText = document.getElementById('lyricsText');
  var artistPic1 = document.getElementById('artistPic1');
  var artistPic2 = document.getElementById('artistPic2');
  var lyricsVideoLink = document.getElementById('lyricsVideoLink');
  var songVideo = document.getElementById('songVideo');
  var songVideoLink = document.getElementById('songVideoLink');


  genreName.innerHTML = "Pop";
  albumArt.src = "image/album cover/Shape_Of_You_(Official_Single_Cover)_by_Ed_Sheeran.png";
  songName.innerHTML = "Shape Of You";
  artistName.innerHTML = "Ed Sheeran";
  albumArt2.src = "image/album cover/Shape_Of_You_(Official_Single_Cover)_by_Ed_Sheeran.png";
  songAudio.src = "audio/Ed_Sheeran_-_Shape_Of_You.mp3";
  artistPic1.src ="image/artist/ed sheeran artist pic.jpg";
  artistPic2.src = "image/artist/ed sheeran artist pic 2.jpg";
  lyricsVideoLink.href = "https://www.youtube.com/watch?v=VwomfkFDvH4";
  songVideo.src = "video/Ed Sheeran - Shape Of You [Official Lyric Video].mp4";
  songVideoLink.href = "https://youtu.be/_dK2tDK9grQ?si=IFQeVvxJVy-X7PVZ";



  lyricsText.innerHTML = `
The club isn't the best place to find a lover
So the bar is where I go
Me and my friends at the table doing shots
Drinking fast and then we talk slow
Come over and start up a conversation with just me
And trust me I'll give it a chance now
Take my hand, stop, put Van the Man on the jukebox
And then we start to dance, and now I'm singing like

Girl, you know I want your love
Your love was handmade for somebody like me
Come on now, follow my lead
I may be crazy, don't mind me
Say, boy, let's not talk too much
Grab on my waist and put that body on me
Come on now, follow my lead
Come, come on now, follow my lead

I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
Every day discovering something brand new
I'm in love with the shape of you

One week in we let the story begin
We're going out on our first date
You and me are thrifty, so go all you can eat
Fill up your bag and I fill up a plate
We talk for hours and hours about the sweet and the sour
And how your family is doing okay
And leave and get in a taxi, then kiss in the backseat
Tell the driver make the radio play, and I'm singing like

Girl, you know I want your love
Your love was handmade for somebody like me
Come on now, follow my lead
I may be crazy, don't mind me
Say, boy, let's not talk too much
Grab on my waist and put that body on me
Come on now, follow my lead
Come, come on now, follow my lead

I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
Every day discovering something brand new
I'm in love with the shape of you

Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on

I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Every day discovering something brand new
I'm in love with the shape of you`;

  var genreDisplay = document.getElementById('genreM');
  genreDisplay.style.display = "none"
}

// HipHop_Rap info
function HipHop_Rap(){
  var genreName = document.getElementById('genreName');
  var albumArt = document.getElementById('albumArt');
  var songName = document.getElementById('songName');
  var artistName = document.getElementById('artistName');
  var albumArt2 = document.getElementById('albumArt2');
  var songAudio = document.getElementById('songAudio');
  var lyricsText = document.getElementById('lyricsText');
  var artistPic1 = document.getElementById('artistPic1');
  var artistPic2 = document.getElementById('artistPic2');
  var lyricsVideoLink = document.getElementById('lyricsVideoLink');
  var songVideo = document.getElementById('songVideo');
  var songVideoLink = document.getElementById('songVideoLink');


  genreName.innerHTML = "Hip Hop/Rap";
  albumArt.src = "image/album cover/Old Town Road Remix album cover.jpg";
  songName.innerHTML = "Old Town Road";
  artistName.innerHTML = "Lil Nas X ft Billy Ray Cyrus";
  albumArt2.src = "image/album cover/Old Town Road Remix album cover.jpg";
  songAudio.src = "audio/Lil_Nas_X_ft_Billy_Ray_Cyrus_-_Old_Town_Road.mp3";
  artistPic1.src ="image/artist/lil nas x artist pic.jpg.webp";
  artistPic2.src = "image/artist/billy ray cyrus artist pic.jpg";
  lyricsVideoLink.href = "https://www.youtube.com/watch?v=jOidKBEzSWE&pp=ygUjb2xkIHRvd24gcm9hZCBvZmZpY2lhbCBseXJpY3MgdmlkZW8%3D";
  songVideo.src = "video/Lil Nas X - Old Town Road (Official Video) ft. Billy Ray Cyrus.mp4";
  songVideoLink.href = "https://youtu.be/r7qovpFAGrQ?list=PLYvSB5AbBeoEVFMPb5qrMY0jMpvrGH4Di";


  lyricsText.innerHTML = `
Yeah, I'm gonna take my horse to the old town road
I'm gonna ride 'til I can't no more
I'm gonna take my horse to the old town road
I'm gonna ride (Kio, Kio) 'til I can't no more

I got the horses in the back
Horse tack is attached
Hat is matte black
Got the boots that's black to match
Riding on a horse, ha
You can whip your Porsche
I been in the valley
You ain't been up off the porch, now

Can't nobody tell me nothing
You can't tell me nothing
Can't nobody tell me nothing
You can't tell me nothing

Riding on a tractor
Lean all in my bladder
Cheated on my baby
You can go and ask her
My life is a movie
Bull riding and boobies
Cowboy hat from Gucci
Wrangler on my booty

Can't nobody tell me nothing
You can't tell me nothing
Can't nobody tell me nothing

You can't tell me nothing

Yeah, I'm gonna take my horse to the old town road
I'm gonna ride 'til I can't no more
I'm gonna take my horse to the old town road
I'm gonna ride 'til I can't no more

Hat down, cross-town, livin' like a rockstar
Spent a lot of money on my brand-new guitar
Baby's got a habit: diamond rings and Fendi sports bras
Ridin' down Rodeo in my Maserati sports car
Got no stress, I've been through all that
I'm like a Marlboro Man so I kick on back
Wish I could roll on back to that old town road
I wanna ride 'til I can't no more

Yeah, I'm gonna take my horse to the old town road
I'm gonna ride 'til I can't no more
I'm gonna take my horse to the old town road
I'm gonna ride 'til I can't no more`;


  var genreDisplay = document.getElementById('genreM');
  genreDisplay.style.display = "none"
}
// Electronics_Dance info
function Electronics_Dance(){
  var genreName = document.getElementById('genreName');
  var albumArt = document.getElementById('albumArt');
  var songName = document.getElementById('songName');
  var artistName = document.getElementById('artistName');
  var albumArt2 = document.getElementById('albumArt2');
  var songAudio = document.getElementById('songAudio');
  var lyricsText = document.getElementById('lyricsText');
  var artistPic1 = document.getElementById('artistPic1');
  var artistPic2 = document.getElementById('artistPic2');
  var lyricsVideoLink = document.getElementById('lyricsVideoLink');
  var songVideo = document.getElementById('songVideo');
  var songVideoLink = document.getElementById('songVideoLink');


  genreName.innerHTML = "Electronics/Dance";
  albumArt.src = "image/album cover/Titanium album cover.jpg";
  songName.innerHTML = "Titanium";
  artistName.innerHTML = "David Guetta ft Sia";
  albumArt2.src = "image/album cover/Titanium album cover.jpg";
  songAudio.src = "audio/David_Guetta_ft_Sia_-_Titanium.mp3";
  artistPic1.src ="image/artist/David Guetta artist pic .jpg";
  artistPic2.src = "image/artist/sia artist pic .jpg";
  lyricsVideoLink.href = "https://youtu.be/KxnpFKZowcs";
  songVideo.src = "video/David Guetta - Titanium ft. Sia (Official Video).mp4";
  songVideoLink.href = "https://youtu.be/JRfuAukYTKg?list=PLYvSB5AbBeoEVFMPb5qrMY0jMpvrGH4Di";


  lyricsText.innerHTML = `
You shout it out, but I can't hear a word you say
I'm talking loud, not saying much
I'm criticized, but all your bullets ricochet
Shoot me down, but I get up

I'm bulletproof, nothing to lose
Fire away, fire away
Ricochet, you take your aim
Fire away, fire away

You shoot me down, but I won't fall
I am titanium
You shoot me down, but I won't fall
I am titanium

Cut me down, but it's you who'll have further to fall
Ghost town and haunted love
Raise your voice, sticks and stones may break my bones
I'm talking loud, not saying much

I'm bulletproof, nothing to lose
Fire away, fire away
Ricochet, you take your aim
Fire away, fire away

You shoot me down, but I won't fall
I am titanium
You shoot me down, but I won't fall
I am titanium
I am titanium
I am titanium

Stone hard, machine gun
Firing at the ones who run
Stone hard, as bulletproof glass

You shoot me down, but I won't fall
I am titanium
You shoot me down, but I won't fall
I am titanium
You shoot me down, but I won't fall
I am titanium
You shoot me down, but I won't fall
I am titanium
I am titanium`;


  var genreDisplay = document.getElementById('genreM');
  genreDisplay.style.display = "none"
}
// Gospel info
function Gospel(){
  var genreName = document.getElementById('genreName');
  var albumArt = document.getElementById('albumArt');
  var songName = document.getElementById('songName');
  var artistName = document.getElementById('artistName');
  var albumArt2 = document.getElementById('albumArt2');
  var songAudio = document.getElementById('songAudio');
  var lyricsText = document.getElementById('lyricsText');
  var artistPic1 = document.getElementById('artistPic1');
  var artistPic2 = document.getElementById('artistPic2');
  var lyricsVideoLink = document.getElementById('lyricsVideoLink');
  var songVideo = document.getElementById('songVideo');
  var songVideoLink = document.getElementById('songVideoLink');


  genreName.innerHTML = "Gospel";
  albumArt.src = "image/album cover/ikechi album cover.jpeg";
  songName.innerHTML = "Ikechi";
  artistName.innerHTML = "Minister Guc";
  albumArt2.src = "image/album cover/ikechi album cover.jpeg";
  songAudio.src = "audio/Minister-GUC-Ikechi-Power-Of-God-(GospelJingle.com).mp3";
  artistPic1.src ="image/artist/minister guc artist pic.jpeg";
  artistPic2.src = "image/artist/ministergucartist pic 2.jpeg";
  lyricsVideoLink.href = "https://www.youtube.com/watch?v=1eW5DEBoxZg&pp=ygU7bWluaXN0ZXIgZ3VjIC0gaWtlY2hpIChwb3dlciBvZiBnb2QpIG9mZmljaWFsIHZpZGVvIGx5cmljcyA%3D";
  songVideo.src = "video/Minister GUC - Ikechi (Power of God) [Official Video].mp4";
  songVideoLink.href = "https://youtu.be/b7utfDCghQY?list=PLYvSB5AbBeoEVFMPb5qrMY0jMpvrGH4Di";


  lyricsText.innerHTML = `
[Intro]
Aah Ah Ah Ah, Ah Ah Ah Aah
Ah Ah Ah Aah
Ah Ah Aah, Ah Ah Ah
Aah Ah Ah Aah, Ah Ah Aah

[Chorus]
Ike, Ike Oh, Ike Oh, Ike
Ike, Ikechi, Ike Oh, Ike
(Ikechinekemo)
Ike, Ike Oh, Ike Oh, Ike
Ike, Ikechi, Ike Oh, Ike

[Chorus – Translation]
Power, Power Oh
Power, Power of God, Power

[Verse]
We will Sing
We will Shout
God's Power is Here to Deliver
We Proclaim in Your Name
Your Power is Here
To Sustain us

[Chorus]
Ike, Ike Oh, Ike Oh, Ike
Ike, Ikechi, Ike Oh, Ike
(Ikechinekemo)
Ike, Ike Oh, Ike Oh, Ike
Ike, Ikechi, Ike Oh, Ike

[Chorus – Translation]
Power, Power Oh
Power, Power of God, Power

[Bridge]
When my Strength
Has Failed me
And I can't Carry On
(Ikechi)
When my Gaze is Weary
And I can't Stand on my own
(Ikechi)

Gwanum Onye Dika Chi
Onye Nwem
(Onweghi Onye Ozor)
Gwanum Onye Dika Chi
Aka Ji Uwa
(Onweghi Onye Ozor)

[Bridge – Translation]
Tell me
Who is Like God, my Lord
(No One Else)
Tell me
Who is Like God
The Hand that Holds the World
(No One Else)

[Chorus]
Ike, Ike Oh, Ike Oh, Ike
Ike, Ikechi, Ike Oh, Ike
(Ikechinekemo)

Ike, Ike Oh, Ike Oh, Ike
Ike, Ikechi, Ike Oh, Ike

[Chorus – Translation]
Power, Power Oh
Power, Power of God, Power`;

  var genreDisplay = document.getElementById('genreM');
  genreDisplay.style.display = "none"
}





// function for toggling the subscription
function subscription(){
  var sub = document.getElementById('subscription');

  if(sub.innerHTML === "Unsubscribed"){
    sub.innerHTML = "Subscribed"
    sub.style.background = "linear-gradient(to right,#8a2be2, #437ccd)"
    sub.style.webkitBackgroundClip = "text"
    sub.style.webkitTextFillColor = "transparent"
    alert("You are now subscribed!")
  }else{
      sub.innerHTML = "Unsubscribed"
      alert("You are now unsubscribed!")
      sub.style.color = "#191919"
      sub.style.background = "unset"
      sub.style.webkitBackgroundClip = "unset"
      sub.style.webkitTextFillColor = "unset"
  }
}
