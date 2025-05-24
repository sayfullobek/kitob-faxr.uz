const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const newsSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Nomi majburiy!'],
			trim: true,
			unique: true,
		},
	},
	schemaOptions
)

module.exports = model('News', newsSchema)
