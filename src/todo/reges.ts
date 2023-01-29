
// function isValidTime(str) {
// 	let regex = new RegExp(/^([01]\d|2[0-3]).?([0-5]\d)$/);

// 	if (str == null) {
// 		return "false";
// 	}

// 	if (regex.test(str) == true) {
// 		return "true";
// 	}
// 	else {
// 		return "false";
// 	}
// }

// // Driver Code
// // Test Case 1:
// //let str1 = "22:00";
// console.log(isValidTime("10.00"));


const printMemberName = (target: any, num: number) => {
	let regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);
 
    //  if str
    // is empty return false
    if (num == null) {
        return "false";
    }

	let text = num.toString();
 
    // Return true if the str
    // matched the ReGex
    if (regex.test(text) == true) {
        return "true";
    }
    else {
        return "false";
    }
  };