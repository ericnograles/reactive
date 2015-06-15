/**
 * PublicController
 *
 * @description :: Server-side logic for managing publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    var markup = "<h1>MERN</h1><br /><h2>Ermahgerd Isomorphic JavaScript</h2>";
    return res.render('index', {markup: markup});
  }
};

