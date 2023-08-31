console.log('hello');
let logged = 0;

logged = localStorage.getItem("loginstatus");

let user1 = localStorage.getItem("userdata");


if (user1 == null) {
	let id = "admin@admin";
	let pass = "adminadmin";
	let user = [];
	user.push(id);
	user.push(pass);
	user.push(0);
	// console.log(user);
	usersobj = [];
	usersobj.push(user);
	// console.log(usersobj);
	// localStorage.setItem("userdata", JSON.stringify(users));
	localStorage.setItem("userdata", JSON.stringify(usersobj));
	console.log(usersobj);
} else {
	usersobj = JSON.parse(user1);
	console.log(usersobj);
}



if (logged == 1) {
	let logins = document.getElementsByClassName("login");
	let addresslink = document.getElementsByClassName("addressc");

	logins[0].innerText = "Log Out";
	logins[1].innerText = "Log Out";
	addresslink[0].href = "index2.html";
	addresslink[1].href = "index2.html";
	console.log(logins[0].innerText);
} else {
	let logins = document.getElementsByClassName("login");
	let addresslink = document.getElementsByClassName("addressc");
	// console.log(logins);

	logins[0].innerText = "Log In";
	logins[1].innerText = "Log In";
	addresslink[0].href = "";
	addresslink[1].href = "";

}


function loginpage() {
	if (logged == 1) {
		console.log('hi');
		logged = 0;
		localStorage.setItem("loginstatus", JSON.stringify(logged));
		window.reload();
	} else {
		window.location.href = "index3.html";
	}

}


// for (val of usersobj) {
// console.log(val[0]);
// }

function loginkro() {

	let id = document.getElementById("inputlogin").value;
	let pass = document.getElementById("inputlogin3").value;
	console.log(id, pass);


	for (val of usersobj) {
		console.log(val);
		if (id == val[0] && pass == val[1]) {
			window.location.href = "index2.html";
			logged = 1;
			localStorage.setItem("loginstatus", JSON.stringify(logged));
			alert('logged in done ');
			continue;
		}
	}
	if (logged == 0) {
		alert('wrong id or password');
	}
}

function registerkro() {
	let id = document.getElementById("inputlogin").value;
	let pass = document.getElementById("inputlogin3").value;

	let user = [];
	user.push(id);
	user.push(pass);

	// console.log(user);
	usersobj = [];
	usersobj = JSON.parse(user1);
	user.push(usersobj.length);
	usersobj.push(user);
	// console.log(usersobj);
	// localStorage.setItem("userdata", JSON.stringify(users));
	localStorage.setItem("userdata", JSON.stringify(usersobj));

}













var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
	let addTxt = [];
	let d0 = document.getElementById("addTxt");
	let d1 = document.getElementById("addTxt1");
	let d2 = document.getElementById("addTxt2");
	let d3 = document.getElementById("addTxt3");
	let d4 = document.getElementById("addTxt4");
	let d5 = document.getElementById("addTxt5");

	addTxt.push(d0.value);
	addTxt.push(d1.value);
	addTxt.push(d2.value);
	addTxt.push(d3.value);
	addTxt.push(d4.value);
	addTxt.push(d5.value);
	d0.value = "";
	d1.value = "";
	d2.value = "";
	d3.value = "";
	d4.value = "";
	d5.value = "INDIA";


	// console.log(d0.value);
	let notes = localStorage.getItem("notes");
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	notesObj.push(addTxt);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addTxt.value = "";
	//   console.log(notesObj);
	showNotes();
});

// Function to show elements from localStorage
function showNotes() {
	let notes = localStorage.getItem("notes");
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	// notesObj.sort();

	let html = "";
	notesObj.forEach(function (element, index) {
		html +=
			`<tr class="noteCard"> 
      		<td>${index + 1} </td>
      		<td> <p>${element[0]}</p> </td>
      		<td>${element[1]} </td>
	  	<td>${element[2]} </td>
	  	<td>${element[3]} </td>
	  	<td>${element[4]} </td>
	  	<td>${element[5]} </td>
	  	<td><button id="${index}"onclick="deleteNote(this.id)" class="btn colornav1">Delete</button></td>
    		</tr>`
	});
	let notesElm = document.getElementById("notes");
	if (notesObj.length != 0) {
		notesElm.innerHTML = html;
	} else {
		notesElm.innerHTML = `<br>Nothing to show! Use "Add a Contact" section above to add contact.`;
	}
}

// Function to delete a note
function deleteNote(index) {
	//   console.log("I am deleting", index);

	let notes = localStorage.getItem("notes");
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}

	notesObj.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

	let inputVal = search.value.toLowerCase();
	console.log('Input event fired!', inputVal);
	let noteCards = document.getElementsByClassName('noteCard');
	Array.from(noteCards).forEach(function (element) {
		let cardTxt = element.getElementsByTagName("p")[0].innerText;
		cardTxt = cardTxt.toLowerCase();

		if (cardTxt.includes(inputVal)) {
			element.style.display = 'table-row';
			console.log(cardTxt);
		}
		else {
			element.style.display = 'none';
		}
	})
})




