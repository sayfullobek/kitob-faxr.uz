const { model, Schema } = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const orderSchema = new Schema(
	{
		archetectura: {
			type: Schema.Types.ObjectId,
			ref: 'Archetecturas',
			required: [true, 'Arxitektura majburiy!'],
		},
		name: {
			type: String,
			required: [true, 'Nomi majburiy!'],
			trim: true,
			unique: true,
		},
		phone: {
			type: String,
			required: [true, 'Telefon raqami majburiy!'],
			trim: true,
			validate: {
				validator: function (v) {
					return /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(v)
				},
				message: props => `${props.value} noto'g'ri telefon raqami!`,
			},
		},
	},
	schemaOptions
)

module.exports = model('Order', orderSchema)
