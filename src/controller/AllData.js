const { Projects, Archetecturas, Order } = require('../models')

exports.getAll = async (req, res) => {
	try {
		const allProjects = await Projects.find().sort({ _id: -1 })
		const allArchetecturas = await Archetecturas.find().sort({ _id: -1 })
		const soldOutArch = await Archetecturas.find({ soldOut: true }).sort({
			_id: -1,
		})
		const soldOutArchNot = await Archetecturas.find({ soldOut: false }).sort({
			_id: -1,
		})
		const orderArchetecturas = await Order.find().sort({ _id: -1 })

		const stats = [
			{
				name: 'Loyihalar',
				value: allProjects.length,
			},
			{ name: 'Kvartiralar', value: allArchetecturas.length },
			{ name: 'Sotilgan', value: soldOutArch.length },
			{ name: 'Qolgan', value: soldOutArchNot.length },
			{ name: 'Buyurtmalar', value: orderArchetecturas.length },
		]
		const chartData = [
			{ name: 'Loyihalar', value: allProjects.length },
			{ name: 'Kvartiralar', value: allArchetecturas.length },
			{ name: 'Sotilgan', value: soldOutArch.length },
			{ name: 'Qolgan', value: soldOutArchNot.length },
			{ name: 'Buyurtmalar', value: orderArchetecturas.length },
		]
		res.status(200).json({
			stats,
			chartData,
			allProjects: allProjects.length,
			soldOutArch: soldOutArch.length,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err.message, success: false })
	}
}
