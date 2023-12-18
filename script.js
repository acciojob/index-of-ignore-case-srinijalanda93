function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (str.length === 0 || subStr.length === 0) {
    return -1;
  }
	//first convert the give str,substr in lowercase
	//second to compare the give str===substr convert to ASCII
	let str=s1.toLowerCase();
	let subStr=s2.toLowerCase();
	 // Find the index of subStr in lowercaseStr
  const index =str.indexOf(subStr);
	return index;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
