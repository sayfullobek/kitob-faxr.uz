const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const subNewsSchema = new Schema(
	{
		photo: {
			type: String,
			required: [true, "Yangilikning rasmi bo'lishi majburiy"],
		},
		description: {
			type: String,
			required: [true, "Yangilik haqida ma'lumotlar bo'lishi majburiy"],
			trim: true,
			length: 20000,
		},
		news: {
			type: Schema.Types.ObjectId,
			ref: 'News',
			required: [true, "Yangilikning ma'lumotlari bo'lishi shart!"],
		},
	},
	schemaOptions
)

module.exports = model('SubNews', subNewsSchema)
