var User = require('../db/userModel.js');
var Q = require('q');

module.exports = {
  updateLocation: function(req, res, next) {
    console.log('updateLocation: ', req.body);
    User.findOne({
      provider_id: req.user.provider_id,
    }, function(err, user) {
      if (err) {
        console.log('Error updating location for user: ', user);
        res.send('Error fetching user for update' + err);
      } else {
        console.log('fetched user for update: ', user);
        user.loc.coordinates = [req.body.lng, req.body.lat];
        user.save(function(err) {
          if (err) {
            console.log('errror updating user', err);
            res.send('Error updating user' + err);
          } else {
            console.log('Successfully updated user');
            res.send('Successfully updated user');
          }
        });
      }
    });
  }
};