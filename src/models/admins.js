const { model, Schema } = require('mongoose')
const bcrypt = require('bcryptjs')
const { schemaOptions } = require('./modelOptions')

const adminsSchema = new Schema(
	{
		firstName: {
			type: String,
			required: [true, 'Ism majburiy'],
			trim: true,
			minlength: [2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak"],
		},
		lastName: {
			type: String,
			required: [true, 'Familiya majburiy'],
			trim: true,
			minlength: [2, "Familiya kamida 2 ta belgidan iborat bo'lishi kerak"],
		},
		phoneNumber: {
			type: String,
			required: [true, 'Telefon raqami majburiy'],
			unique: true,
			trim: true,
			match: [
				/^\+998\d{9}$/,
				"Iltimos, '+998' bilan boshlanuvchi to‘g‘ri telefon raqamini kiriting",
			],
		},
		password: {
			type: String,
			required: [true, 'Parol majburiy'],
			minlength: [6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak"],
		},
		role: {
			type: String,
			enum: ['ADMIN'],
			default: 'ADMIN',
		},
	},
	schemaOptions
)

// adminsSchema.pre('save', async function (next) {
// 	if (!this.isModified('password')) return next()
// 	this.password = await bcrypt.hash(this.password, 10)
// 	next()
// })

module.exports = model('Admins', adminsSchema)
