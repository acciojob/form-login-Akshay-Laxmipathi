function getFormvalue() {
    //Write your code here
	const val = document.querySelectorAll("input");
	let fName = val[0].value;
	let lName = val[1].value;
	alert(fName + " " + lName);
}
