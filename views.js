var GUI = (function(){ //IIFE for all Views
    
    var TaskView = Backbone.View.extend({
    
    });
    
    var CreateTaskView = Backbone.View.extend({
    
    });
    
    var UnassignedTasksView = Backbone.View.extend({
    
    });
    
    var UserTasksView = Backbone.View.extend({
    
    });
    
    var UserView = Backbone.View.extend({
        // default model, will be overwritten when created
        model: UserModel,
        render: function() {
            // XXX this is working! leave for now
            console.log(this.model.attributes.username);
            
            var logoutBtn = '<button id = "logout">Logout</button>';
            // XXX append this button last
            this.$el.html(logoutBtn);
        },
        events: {
            // attach listeners
            'click #logout' : 'logout'
        },
        logout: function() {
            // close this view and return to login view
            var loginScreen = new LoginView();
            this.remove();
        }
    });
    
    var LoginView = Backbone.View.extend({
        el: '#app',
        render: function() {
            // drop down selector of users and login button
            // XXX would rather do it this way...
            //var selectUser = document.createElement('select');
            //var loginButton = document.createElement('button');
            var selectUser = '<select id = "userSelect">';
            var loginBtn = '<button id = "login">Login</button>';
            var welcomeMessage = '<p> Welcome! Please log in. </p>';

            app.users.each(function(model) {
                var user = model.attributes.username;
                var userOpt = '<option>' + user + '</option>';
                selectUser += userOpt;
            });
            selectUser += '</select>';

            // add select and button to page
            this.$el.html(welcomeMessage + selectUser + loginBtn);
        },
        events: {
            // attach listeners where needed
            'click #login' : 'login'
        },
        login: function() {
            // get current selection from dropdown
            var e = document.getElementById('userSelect');
            var currentUser = e.options[e.selectedIndex].text;
            // create a new UserView and set model
            var newUserView = new UserView({model : app.users.where({username : currentUser})[0]});
            newUserView.render();
            this.remove();
        },
        initialize: function() {
            // render on init
            this.render();
        }
    });
    
    
    // generic ctor to represent interface:
    function GUI(users,tasks,el) {
    	// users is collection of User models
    	// tasks is collection of Task models
    	// el is selector for where GUI connects in DOM
        
        // XXX this is just a test
        this.login = new LoginView();
        this.user = UserView;
    }
    
    return GUI;
}())
