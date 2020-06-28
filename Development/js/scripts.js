// السؤال الأول
	// 1
	const name = "جود";
	

	// 2
	let age = 15;
	

	// 3 and 4
	// console.log("اسمي",+ name, + "و عمري", + age);
	console.log("أنا "+ name + " " + "و عمري "+ age)
	

	// 5 and 6
	let five_times_age = age*5;
	console.log(five_times_age)
	

	console.log(age*5)
	

	// age *=5
	console.log(age)
	// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
	

	// السؤال الثاني
	// 1
	let hobbies = ["Basketball",
	"Painting and drawing",
	"reading"]
	

	

	// 2
	hobbies.push(age)
	

	hobbies[4] = 15
	console.log(hobbies)
	

	console.log(hobbies.length)
	

	// 3
	hobbies.pop()
	

	console.log(hobbies)
	// 4
	let student = {
	    track: "مسار الويب",
	    language: "JavaScript",
	}
	

	// 5
	student["TAs"] = ["نانسي",
	"موضي",
	"حسين",
	"رهف"]
	console.log(student)
	

	

	// 6
	console.log(student["track"])
	console.log(student.track)
	

	// 7
	console.log(student["TAs"][0])
	

	// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
	

	// البونص
	// 1
	student["SayHello"] = function() {
	    console.log("مرحبا")
	}
	

	

	console.log(student)
	

	// 2
	student["SayHello"]()
	

	// console results => console.png
