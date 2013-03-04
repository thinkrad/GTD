Session.setDefault("username", "");
Session.setDefault("password", "");

Template.login.usernameAcquired = function() {
    return Session.get('username');
}

Template.login.passwordAcquired = function() {
    return Session.get('password');
}

Template.login.events = {
    'keypress': function (event) {
        if (event.keyCode == 13) {
            if (!Template.login.usernameAcquired()) {
                Session.set("username", event.currentTarget.value);
                event.currentTarget.value = "";
            }
            else {
                Meteor.loginWithPassword(Session.get('username'),
                    event.currentTarget.value);
                event.currentTarget.value = "";
                Session.set('username', '');
                Meteor.flush();
            }
        }
    }
}

Template.loggedIn.events = {
    'click': function(event) {
        Meteor.logout();
    }
}

Meteor.startup(function() {
});
