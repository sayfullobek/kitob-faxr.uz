const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const projectsSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Loyiha nomi bo'lishi majburiy"],
			trim: true,
			unique: true,
		},
		photo: {
			type: String,
			required: [true, "Loyihaning rasmi bo'lishi majburiy"],
		},
		description: {
			type: String,
			required: [true, "Loyiha haqida ma'lumotlar bo'lishi majburiy"],
			trim: true,
			length: 20000,
		},
		address: {
			type: String,
			required: [true, "Loyiha manzili bo'lishi majburiy"],
			trim: true,
			length: 20000,
		},
		endDate: {
			type: String,
			required: [true, "Loyihaning tugatilish vaqti bo'lishi majburiy"],
		},
		projectType: {
			type: String,
			enum: ['Biznes', 'Premium'],
			default: 'Biznes',
		},
		status: {
			type: String,
			enum: [
				"Eng so'ngi xonadonlar",
				'Barcha xonadonlar sotilgan',
				'Sotuvda bor',
				'Tez orada',
			],
			default: 'Tez orada',
		},
	},
	schemaOptions
)

module.exports = model('Projects', projectsSchema)
