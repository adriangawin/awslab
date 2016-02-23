var task =  function(request, callback){

	var firstname = request.query.firstname ? request.query.firstname : "missing parameter: fName";
	var lastname = request.query.lastname ? request.query.lastname : "missing parameter: lName";
	callback(null,"<h1>" + firstname + " " + lastname + "</h1>");
}

exports.property = task
