Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
	projectname: {
		type: String,
		label: "Project Name",
		max: 200
	},

	teamname: {
		type: String,
		label: "Team Name",
		max: 200
	},

	teammembers: {
		type: String,
		label: "Team Members"
	},

	batchyear: {
		type: String,
		label: "EIT Batch Year",
		autoform: {
			options: [{
				label: "2016",
				value: "2016"
			}, {
				label: "2015",
				value: "2015"
			}, {
				label: "2014",
				value: "2014"
			}]
		}
	},

	problemstatement: {
		type: String,
		label: "Problem Statement",
		autoform: {
			rows: 5
		}
	},

	solutionstatement: {
		type: String,
		label: "Solution Statement",
		autoform: {
			rows: 5
		} 
	},

	pitchdate: {
		type: Date,
		label: "When was the idea pitched?"
	},

	pitchdeck: {
		type: String,
		label: "Pitch Deck (.pdf only)"
	},

	pitchvideo: {
		type: String,
		label: "Pitch Video (youtube link)"
	},

	marketresearch: {
		type: String,
		label: "Market research resources gathered."
	}

	//category or tag


}));

