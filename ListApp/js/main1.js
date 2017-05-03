var id = 1; 

$(document).ready(function(e) {
	editButton();

	$("tbody").on("click", ".cross", function() {
		$(this).closest("tr").remove();
	});

	$("button").on("click", getInput);

	$("tbody").on("click", ".box", function() {
		$(this).closest("tr").find("span").toggleClass("checked");
	});

});


$(document).on("keydown", function(e) {
	if(e.keyCode === 13) {
		getInput();
	}
});




function editButton() {
	$(".edit1").on("click", "span", function() {
		$(".cross").toggle();
	});
}



function getInput() {
	var custInput = $(".custinput1");
	var input = custInput.val();

	if ((input !== "") && ($.trim(input) !== "")) {
		addItem(input);
		custInput.val("");
	}
}


function addItem(message) {

	$(".cross").hide(); // hiding the delete icon

	var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";

	var content = "<td class=\"content\"><span>" + message + "</span></td>";

	var delIcon = "<td><img src=\"img/cross.png\" alt=\"cross\" class=\"cross\"></td>";

	$("tbody").append("<tr>" + checkbox + content + delIcon + "</tr>");

	id++;
}