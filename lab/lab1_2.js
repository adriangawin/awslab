//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();

var task =  function(request, callback){

	var params = {
		DryRun : false,
		
		InstanceIds : ['i-0fdfa2e6928d178a4',  ],	
		
	};
	
	var data2;
	
	ec2.describeInstances(params, function(err, data) {
		if ( err ) console.log(err, err.stack);
		else { console.log(data); 
		data2 = data; 
		var state;
		
		callback(null, 
			String("owner id: "+  data.Reservations[0].OwnerId + "<br>"
				 + "state: " + data.Reservations[0].Instances[0].State.Name + "<br>")
		)};
	});
	
	console.log(data2);
//	callback(null, String('ok') );

};

exports.lab = task;
