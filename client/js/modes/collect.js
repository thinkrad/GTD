Template.collect.events({
    'keyup': function (event) {
        if (event.keyCode == 13) {
            if (event.currentTarget.value.trim() !== '') {
                Tasks.insert({
                    userId: Meteor.userId(),
                    value: event.currentTarget.value.trim(),
                    processed: false,
                    completed: false,
                    startDate: 0,
                    endDate: 0,
                    section: "next_actions",
                    // timestamp: 
                });    
                event.currentTarget.value = '';
                event.currentTarget.placeholder = 'collected!';
                Meteor.flush();
                Meteor.setTimeout(function() {
                    $("#collector").attr('placeholder', 'new task'); 
                }, 1500);
            }
            else {
                event.currentTarget.value = '';
            }
        }
    }
});

