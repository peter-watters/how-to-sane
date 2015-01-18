import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('album', {user: this.session.get('user.id')});
    }
});
