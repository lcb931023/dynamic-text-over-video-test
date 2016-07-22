- Syncing video with script
  - Popcorn.js to help with syncing and cue-based
- Using After Effect exports for animation


- Make one video finish playing, show the text, hide the text, play the next video


- [x] Exported every frame's tracker position
- [ ] Animate keyframe (Would take some time to test this one out)
  - [ ] Animation lib to interpret AE export?
    - jam3 used Greensock for https://medium.com/@Jam3/mtchmv-a54624f6232#.z2qarpge8

Approach 1:
Set position of thing per-frame
  - [ ] setInterval
  - [ ] popcorn adds listener for every frame, totalling 509 of them.


Approach 2:
Combine GSAP's timeline and video's currentTime to determine element location






================

Text effects

COD inspiration: http://www.infinitelooper.com/?v=4G2GdTIRCIM&p=n#/53;56

Codepen samples

http://codepen.io/qkevinto/pen/WQVNWO
http://codepen.io/voronianski/pen/aicwk


- typewriter one could try fade, but decent with timeout = 55

- resolver needs more work to be less jarring
  - try using oblique strategy's glitcher. Preserving space (or non-letter chars help recognizing a lot)




Future project:
http://jam3.github.io/three-bmfont-text/test/ Very inky text effect. Good shit!
