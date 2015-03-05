Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
	projectname: {
		type: String,
		label: "Project Name",
		max: 200
	},

	// projectlogo: {
 //    type: String,
 //    autoform: {
 //      afFieldInput: {
 //        type: 'cfs-file',
 //        collection: 'Images'
 //      }
 //    },
 //    label: 'Upload Project Logo'
 //  }

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
	},

	teammembers: {
		type: String,
		label: "Team Members"
	},

	// teampicture: {
 //    type: String,
 //    autoform: {
 //      afFieldInput: {
 //        type: 'fileUpload',
 //        collection: 'Images'
 //      }
 //    },
 //    label: 'Upload Team Picture'
 //  },

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

	// owner: {
 //        type: String,
 //        autoform: {
 //            omit: true
 //        },
 //        autoValue: function(){
 //            if (this.isInsert){
 //                return Meteor.userId();
 //            }
 //        }
 //    }

	//category or tag


}));

