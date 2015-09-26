var app = {};

$(function() { //when DOM is ready...
	app.users = new UserCollection([
		{username:'Elijah'},
		{username:'Emi'},
		{username:'Elizabeth'}
	]);

	app.tasks = new TaskCollection([
		// test data here
        {title: 'Pinball repair',
            description: 'Repair flippers on SBM',
            creator: 'Elijah',
            assignee: '',
            status: 'unassigned'
        },
        {title: 'Hack the Planet!',
            description: 'Own a Gibson',
            creator: 'Elizabeth',
            assignee: '',
            status: 'unassigned'
        },
        {title: 'Bike ride',
            description: 'Ride bike for fun',
            creator: 'Emi',
            assignee: '',
            status: 'unassigned'
        }
	]);

	app.gui = new GUI(app.users,app.tasks,'#app');// selector of main div
});
