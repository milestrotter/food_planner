var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.set('debug', true);

var first_nameValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 50],
		message: "First name should be between {ARGS[0] and ARGS[1]} characters"
	}),
	validate({
		validator: 'isAlphanumeric',
		message: 'First name should contain alpha-numeric characters only'
	})
];

var last_nameValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 50],
		message: "Last name should be between {ARGS[0] and ARGS[1]} characters"
	}),
	validate({
		validator: 'isAlphanumeric',
		message: 'Last name should contain alpha-numeric characters only'
	})
];

var d = new Date();
var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	date: {type: Date, default: d}
});

mongoose.model('User', UserSchema);


// var bcrypt = require('bcrypt')
// var UsersSchema = new mongoose.Schema({
//   first_name: {type: String, required: true, minlength: 2, maxlength: 256},
//   last_name: {type: String, required: true, minlength: 2, maxlength: 256},
//   email: {type: String, required: true, minlength: 2, maxlength: 256, unique: true},
//   password: {type: String, required: true, minlength: 8, maxlength: 265}
// }, {timestamps: true})

// UsersSchema.pre('save', function (done) {
//   var user = this
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) return err
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return err
//       user.password = hash
//       done()
//     })
//   })
// })

// UsersSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password)
// }

// mongoose.model('User', UsersSchema)