var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://wilfredoivanhoe:chichicuilote05@ds045057.mongolab.com:45057/wilfredoivanhoe');
var parentSchema = new Schema({
	img : {
		name : String,
		gName : String,
		url : String	
	},
	storeData : {
		name : String,
		barcode : String,
		price : Number,
		description : String
	}
});
var parent = mongoose.model('catalog',parentSchema);

module.exports = parent;
