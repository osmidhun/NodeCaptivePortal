/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `HomeController.indexs()`
   */
  index: function (req, res) {
    return res.render('home', {name: 'Midhun'});
  }
};

