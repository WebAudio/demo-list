Web Audio Demo List
=========

A list of Web Audio API demos and applications.

# Contributing

To add a demo to this list, send a pull request, or contact
[post to the W3C Web Audio mailing list](mailto:public-audio@w3.org).

# Demos

## Demos using the standard AudioContext

These applications use the un-prefixed version of the API as described in the spec, and as such should work on standards-compliant implementations of Web Audio.

Unless reported otherwise, the following demos will work in:

* Google Chrome (>= v27)
* Firefox (>= v25)

### Beat Petite

A simple drum machine that uses oscillators and noise instead of samples

- Link: [http://stuartmemo.com/beat-petite/](http://stuartmemo.com/beat-petite/)

### Conway’s Melodies

A simple sonification of Conway’s Game of Life

- Link: http://www.cappel-nord.de/webaudio/conways-melodies/

### Dataflow

A visual audio graph editor using the Web Audio API

- Link: [http://forresto.github.io/dataflow-webaudio/](http://forresto.github.io/dataflow-webaudio/)
- Code: [https://github.com/forresto/dataflow-webaudio](https://github.com/forresto/dataflow-webaudio)

Note: uses both [AudioContext and webkitAudioContext](https://github.com/forresto/dataflow-webaudio/search?q=audiocontext&ref=cmdform)

### Interactive Networked Web Audio Experiences

A multiplayer persistent circular pattern sequencer

- Link: http://nmf.cappel-nord.de/

### Mixbolt

A DJ app using the Web Audio API

- Link: [http://mixbolt.com/](http://mixbolt.com/)

### Pitch detector

A simple pitch detector / guitar tuner.

- Link: [http://webaudiodemos.appspot.com/pitchdetect/index.html/](http://webaudiodemos.appspot.com/pitchdetect/)
- Code: [https://github.com/cwilso/pitchdetect](https://github.com/cwilso/pitchdetect)


### Qwerty Hancock

“Need an interactive vector keyboard for your web audio project?”

- Link: [http://stuartmemo.com/qwerty-hancock/](http://stuartmemo.com/qwerty-hancock/)
- Code: [https://github.com/stuartmemo/qwerty-hancock](https://github.com/stuartmemo/qwerty-hancock)

### Radiophonics Workshop

BBC R&D's recreation of classic Radiophonic Workshop sounds.

 - Link: [http://webaudio.prototyping.bbc.co.uk/](http://webaudio.prototyping.bbc.co.uk/)
 - Code: Included in the demo

### Songs of Diridum

Listen to a mellow jazz band in a 3D environment. Demo using WebGL and the Web Audio API.

 - Link [http://www.gooengine.com/mozilla-web-audio-demo-built-in-goo-engine/](http://www.gooengine.com/mozilla-web-audio-demo-built-in-goo-engine/)
 - How it was built: [https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)


### Soundslice

Interactive sheet music and guitar tablature. Syncs audio with notation, allows for slowdown without changing pitch (using Web Audio API), offers "synthetic" audio option that generates audio from notation using samples (using Web Audio API).

- Link: [http://www.soundslice.com/](http://www.soundslice.com/)
- Full-page example: [http://www.soundslice.com/v2/auld-lang-syne/](http://www.soundslice.com/v2/auld-lang-syne/)


### To The Beat

A somewhat non interactive demothingie by [5013](http://5013.es/)

- Link: [http://5013.es/toys/to_the_beat_js/](http://5013.es/toys/to_the_beat_js/)
- Code: [https://github.com/sole/to_the_beat](https://github.com/sole/to_the_beat)


### Vocoder

Classic vocoder effects and visualisations

 - Link: [http://webaudiovocoder.appspot.com/](http://webaudiovocoder.appspot.com/)
 - Code: [https://github.com/cwilso/vocoder](https://github.com/cwilso/vocoder)


### Web Audio Playground

A graphical interface for experimenting with Web Audio.

 - Link: [http://webaudioplayground.appspot.com/](http://webaudioplayground.appspot.com/)
 - Code: [https://github.com/cwilso/WebAudio](https://github.com/cwilso/WebAudio)

### ChucK Demos

Executable demonstrations of the [ChucK](http://chuck.cs.princeton.edu/) music programming language.

 - Link: [http://chuckdemos.com](http://chuckdemos.com)
 - Code: [https://github.com/aknuds1/chuckjs](https://github.com/aknuds1/chuckjs)



## Demos not yet using the standard AudioContext

These are some of the demos we know which were built with the prefixed webkitAudioContext.

Demos listed below will work on Google Chrome (>= v25), Apple Safari 6 (Mountain Lion) and later, and in iOS (6 and later).

We will endeavour to contact their developers and help them change their implementation to use the standard AudioContext. Apps which get updated to use AudioContext will be moved to the list above, others will be removed from the list if we cannot get them updated within a few months.


### Fist Pumper

Web Audio meets accelerometer.

- Link: [http://www.plan8.se/fistpumper/](http://www.plan8.se/fistpumper/)

Works in iOS6+ (requires accelerometer support)

### Infinite Jukebox

“With The Infinite Jukebox, you can create a never-ending and ever changing version of any song.   The app works by sending your uploaded track over to The Echo Nest, where it is decomposed into individual beats.  Each beat is then analyzed and matched to other similar sounding beats in the song. ”

- Link: [http://labs.echonest.com/Uploader/index.html](http://labs.echonest.com/Uploader/index.html)
- How it was built: [http://musicmachinery.com/2012/11/12/the-infinite-jukebox/](http://musicmachinery.com/2012/11/12/the-infinite-jukebox/)


### Jam With Chrome

A multi-user music playing app.

- Link: [http://www.jamwithchrome.com/](http://www.jamwithchrome.com/)
- How it was built: [https://developers.google.com/events/io/sessions/325619051](https://developers.google.com/events/io/sessions/325619051)


### pedals.io

Guitar pedals in the browser. Offers multi-user real time guitar jamming.

- Link: [http://pedals.io/](http://pedals.io/)
- Open-source framework: [http://dashersw.github.com/pedalboard.js](http://dashersw.github.com/pedalboard.js)

Confirmed as only using webkitAudioContext as of 2013-10-17.

### Plink

A multiplayer music experience.

- Link: [http://labs.dinahmoe.com/plink/](http://labs.dinahmoe.com/plink/)
- About: [http://labs.dinahmoe.com/#plink](http://labs.dinahmoe.com/#plink)

Confirmed as only using webkitAudioContext as of 2013-10-17.

Dinahmoe contacted by OT 2013-10-17.


### ToneCraft

Compose music by putting different colored blocks on a grid in a 3D environment.

- Link: [http://labs.dinahmoe.com/ToneCraft/](http://labs.dinahmoe.com/ToneCraft/)
- About: [http://labs.dinahmoe.com/#tonecraft](http://labs.dinahmoe.com/#tonecraft)

Confirmed as only using webkitAudioContext as of 2013-10-17.

Dinahmoe contacted by OT 2013-10-17.
