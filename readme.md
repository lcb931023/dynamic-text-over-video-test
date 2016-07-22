- Syncing video with script
  - Popcorn.js to help with syncing and cue-based
- Using After Effect exports for animation


- Make one video finish playing, show the text, hide the text, play the next video


- [x] Exported every frame's tracker position
- [ ] set an element's position every frame
  - [ ] setInterval
  - [ ] popcorn adds listener for every frame, totalling 509 of them.
- [ ] Animate keyframe (Would take some time to test this one out)
  - [ ] Animation lib to interpret AE export?








================

Text effects

COD inspiration: http://www.infinitelooper.com/?v=4G2GdTIRCIM&p=n#/53;56

Codepen samples

http://codepen.io/qkevinto/pen/WQVNWO
http://codepen.io/voronianski/pen/aicwk


- typewriter one could try fade, but decent with timeout = 55

- resolver needs more work to be less jarring
  - try using oblique strategy's glitcher. Preserving space (or non-letter chars help recognizing a lot)
