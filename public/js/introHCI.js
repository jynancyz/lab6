'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */

function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	//var that = this;

	console.log("User clicked on project " + idNumber);
 
 /*Click handler*/
	$.get("/project/" + idNumber, function(response){
		console.log(response);
		$("#project" + projectID + ".details").html(addProject(response));
	});
}

function callback(result){
	console.log(result);
}

$("#project").click(function(e){
	$.get("/project/random", addProject);

});

/*Adding project with result*/
function addProject(result) {
  return '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="detailsImage">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 

    $("#project-container").html(projectHTML);
    $("#project-description").html(result['summary']);
}

