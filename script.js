const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	var ans ;
	for (let index = 0; index < sampleObject.length; index++) {
		if (((sampleObject.red)==key)||(sampleObject.green)==key)||(sampleObject.white)==key) {
			ans=true;
		}
	}
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
