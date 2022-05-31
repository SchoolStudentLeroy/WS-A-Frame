

// changing individual properties with code and using setInterval
var rotationSpeed = .1;
var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;

	console.log(myOtherBox.object3D.rotation.x);
  myBox.object3D.rotation.x += rotationSpeed;
  myBox.object3D.rotation.y += rotationSpeed;
}

setInterval(spin, 16); //equivalent to 60 fps
