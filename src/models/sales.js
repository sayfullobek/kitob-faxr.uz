const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const salesSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Nomi majburiy'],
			trim: true,
			unique: true,
		},
		link: {
			type: String,
			required: [true, "Link bo'lishi majburiy"],
			trim: true,
			length: 2000,
		},
	},
	schemaOptions
)

module.exports = model('Sales', salesSchema)
