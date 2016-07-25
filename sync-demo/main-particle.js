/* global: positions */
var STAGE_WIDTH = 640;
var STAGE_HEIGHT = 360;
var duration = 21.1878545211879;
var frameDuration = 0.04170837504171;
var frameCount = positions.length;
var UVToCSS = function(uv) {
  return "translate("+STAGE_WIDTH*uv.x+"px,"+STAGE_HEIGHT*(1-uv.y)+"px)"
}

var video = document.querySelector('#video');
var marker = document.querySelector('.marker');
var stage = document.querySelector('.stage');
var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera(28, STAGE_WIDTH / STAGE_HEIGHT, 1, 10000);
var camera = new THREE.OrthographicCamera(0, STAGE_WIDTH, 0, STAGE_HEIGHT, 0, 100);
camera.position.z = 0;

var particleSystem = new THREE.GPUParticleSystem({
  maxParticles: 250000
});
scene.add( particleSystem );

var gui = new dat.GUI();
options = {
  position: new THREE.Vector3(),
  positionRandomness: 1,
  velocity: new THREE.Vector3(),
  velocityRandomness: 2,
  color: 0xaa88ff,
  colorRandomness: 1,
  turbulence: 1,
  lifetime: 5,
  size: 5,
  sizeRandomness: 10,
};

spawnerOptions = {
  spawnRate: 15000,
  horizontalSpeed: 20,
  verticalSpeed: 20,
  timeScale: 1
}

gui.add(options, "velocityRandomness", 0, 3);
gui.add(options, "positionRandomness", 0, 3);
gui.add(options, "size", 1, 20);
gui.add(options, "sizeRandomness", 0, 25);
gui.addColor(options, 'color');
gui.add(options, "colorRandomness", 0, 1);
gui.add(options, "lifetime", .1, 10);
gui.add(options, "turbulence", 0, 1);

gui.add(spawnerOptions, "spawnRate", 10, 30000);
gui.add(spawnerOptions, "timeScale", -1, 1);

renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor( 0x000000, 0 );
// var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(STAGE_WIDTH, STAGE_HEIGHT);
stage.appendChild(renderer.domElement);

var clock = new THREE.Clock(true);
var tick = 0;

function animate() {
  var delta = clock.getDelta() * spawnerOptions.timeScale;
  tick += delta;
  if (tick < 0) tick = 0;

  var position = positions[Math.round(video.currentTime/duration*frameCount)];
  // options.position.x = position.x;
  // options.position.y = position.y;
  options.position.x = position.x * STAGE_WIDTH;
  options.position.y = (1 - position.y) * STAGE_HEIGHT;
  console.log(options.position);
  if (delta > 0) {
    for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
      // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
      // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
      particleSystem.spawnParticle(options);
    }
  }

  particleSystem.update(tick);
  renderer.render(scene, camera);

  // NOTE marker to compare
  // marker.style.transform = UVToCSS(positions[Math.round(video.currentTime/duration*frameCount)]);
  requestAnimationFrame(animate);
}

animate();

video.play();
