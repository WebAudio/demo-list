Web Audio Demo List
=========

A list of Web Audio API demos and applications.

In the future, this will become an attractive page, but for now, it's
just this README.

# Contributing

To add a demo to this list, send a pull request, contact
[Chris Lowis](http://github.com/chrislo), or
[post to the W3C Web Audio mailing list](mailto:public-audio@w3.org).

# Demos

## Demos using the standard AudioContext

These applications use the un-prefixed version of the API as described in the spec, and as such should work on standards-compliant implementations of Web Audio.

### Web Audio Playground

A graphical interface for experimenting with Web Audio.

 - Link: [http://webaudioplayground.appspot.com/](http://webaudioplayground.appspot.com/)
 - Code: [https://github.com/cwilso/WebAudio](https://github.com/cwilso/WebAudio)

Works in: Google Chrome (>= v27)

### Vocoder

Classic vocoder effects and visualisations

 - Link: [http://webaudiovocoder.appspot.com/](http://webaudiovocoder.appspot.com/)
 - Code: [https://github.com/cwilso/vocoder](https://github.com/cwilso/vocoder)

Works in: Google Chrome (>= v27)

### To The Beat

A somewhat non interactive demothingie by [5013](http://5013.es/)

 - Link: [http://5013.es/toys/to_the_beat_js/](http://5013.es/toys/to_the_beat_js/)
 - Code: [https://github.com/sole/to_the_beat](https://github.com/sole/to_the_beat)

Works in: Google Chrome (>=27), Firefox Nightly

### Radiophonics Workshop

BBC R&D's recreation of classic Radiophonic Workshop sounds.

 - Link: [http://webaudio.prototyping.bbc.co.uk/](http://webaudio.prototyping.bbc.co.uk/)
 - Code: Included in the demo

Works in: Google Chrome (>= v27)

### Pitch detector

A simple pitch detector / guitar tuner.

 - Link: [http://webaudiodemos.appspot.com/pitchdetect/](http://webaudiodemos.appspot.com/pitchdetect/)
 - Code: [https://github.com/cwilso/pitchdetect](https://github.com/cwilso/pitchdetect)

Works in: Google Chrome (>= v27)

## Demos not yet using the standard AudioContext

These are some of the demos we know which were built with the prefixed webkitAudioContext.

We will endeavour to contact their developers and help them change their implementation to use the standard AudioContext. Apps which get updated to use AudioContext will be moved to the list above, others will be removed from the list if we cannot get them updated within a few months.


### Beat Petite

A simple drum machine that uses oscillators and noise instead of samples

- Link: [http://stuartmemo.com/beat-petite/](http://stuartmemo.com/beat-petite/)

webkitAudioContext only.


### Jam With Chrome

A multi-user music playing app.

- Link: [http://www.jamwithchrome.com/](http://www.jamwithchrome.com/)
- How it was built: [https://developers.google.com/events/io/sessions/325619051](https://developers.google.com/events/io/sessions/325619051)

webkitAudioContext only.


### Dataflow

A visual audio graph editor using the Web Audio API

- Link: [http://forresto.github.io/dataflow-webaudio/](http://forresto.github.io/dataflow-webaudio/)
- Code: [https://github.com/forresto/dataflow-webaudio](https://github.com/forresto/dataflow-webaudio)

uses [AudioContext and webkitAudioContext](https://github.com/forresto/dataflow-webaudio/search?q=audiocontext&ref=cmdform)
### Infinite Jukebox

“With The Infinite Jukebox, you can create a never-ending and ever changing version of any song.   The app works by sending your uploaded track over to The Echo Nest, where it is decomposed into individual beats.  Each beat is then analyzed and matched to other similar sounding beats in the song. ”

- Link: [http://labs.echonest.com/Uploader/index.html](http://labs.echonest.com/Uploader/index.html)
- How it was built: [http://musicmachinery.com/2012/11/12/the-infinite-jukebox/](http://musicmachinery.com/2012/11/12/the-infinite-jukebox/)

webkitAudioContext only.


### Qwerty Hancock

“Need an interactive vector keyboard for your web audio project?”

- Link: [http://stuartmemo.com/qwerty-hancock/](http://stuartmemo.com/qwerty-hancock/)
- Code: [https://github.com/stuartmemo/qwerty-hancock](https://github.com/stuartmemo/qwerty-hancock)

webkitAudioContext only.

### Fist Pumper

Web Audio meets accelerometer.

- Link: [http://www.plan8.se/fistpumper/](http://www.plan8.se/fistpumper/)

webkitAudioContext only.

Works in iOS6+

### Plink

A multiplayer music experience.

- Link: [http://labs.dinahmoe.com/plink/](http://labs.dinahmoe.com/plink/)

webkitAudioContext only.

### ToneCraft

Compose music by putting different colored blocks on a grid in a 3D environment.

- Link: [http://labs.dinahmoe.com/ToneCraft/](http://labs.dinahmoe.com/ToneCraft/)

webkitAudioContext only.
