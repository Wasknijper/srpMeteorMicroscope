if (Posts.find().count() === 0){
	Posts.insert({
		title:'Blalalala',
		url:'http://blahblah.nl'
	});

	Posts.insert({
		title:'Meteor',
		url:'http://meteor.com'
	});

	Posts.insert({
		title: 'The Meteor Book',
		url:'http://themeteorbook.com'
	});
}