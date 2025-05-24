const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const archetecturasSchema = new Schema(
	{
		kvartiraNumber: {
			type: Number,
			required: [true, "Kvartiraning raqami bo'lishi majburiy"],
			min: [0, "Kvartira raqami 0 dan kam bo'lmasligi kerak"],
		},
		maydon: {
			type: Number,
			required: [true, "Kvartiraning maydoni bo'lishi majburiy"],
			min: [0, "Kvartira maydoni 0 dan kam bo'lmasligi kerak"],
		},
		xonalar: {
			type: Number,
			required: [true, "Kvartiraning xonalari soni bo'lishi majburiy"],
			min: [0, "Kvartiraning xonalari soni 0 dan kam bo'lmasligi kerak"],
		},
		qavat: {
			type: Number,
			required: [true, "Kvartira nechanchi qavatta ekanligi bo'lishi majburiy"],
		},
		endDate: {
			type: Date,
			required: [
				true,
				"Kvartira nechanchi yilda topshirilishi bo'lishi majburiy",
			],
		},
		seksiya: {
			type: Number,
			required: [
				true,
				"Kvartira nechta seksiyadan iborat ekanligi bo'lishi majburiy",
			],
			min: [0, "Kvartiraning seksiyalari soni 0 dan kam bo'lmasligi kerak"],
		},
		navbat: {
			type: Number,
			required: [
				true,
				"Kvartira nechanchi navbatda ekanligi bo'lishi majburiy",
			],
			min: [
				0,
				"Kvartira nechanchi navbatda ekanligi 0 dan kam bo'lmasligi kerak",
			],
		},
		soldOut: {
			//sotildimi degani agar false bolsa sotilmagan bo'ladi
			type: Boolean,
			default: false,
		},
		projects: {
			type: Schema.Types.ObjectId,
			ref: 'projects',
			required: [
				true,
				"Ushbu kvartira qaysi loyihaga tegishli ekanligi bo'lishi shart!",
			],
		},
	},
	schemaOptions
)

module.exports = model('Archetecturas', archetecturasSchema)
