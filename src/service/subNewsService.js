const { SubNews, News } = require('../models')

const createSubNews = async (data, photo) => {
	const dat = { description: data.description, news: data.news, photo }
	return await SubNews.create(dat)
}
const getSubNews = async ({ page = 1, limit = 10, newsId }) => {
	const skip = (page - 1) * limit

	const news = await News.findById(newsId)
	if (!news) throw new Error('Bunday ID ga ega yangilik topilmadi')

	const [total, data] = await Promise.all([
		SubNews.countDocuments({ news: newsId }),
		SubNews.find({ news: newsId }).populate('news').skip(skip).limit(limit),
	])

	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data,
	}
}

const getSubNewsById = async id => {
	return await SubNews.findById(id).populate('news', 'name')
}

const updateSubNews = async (id, data) => {
	return await SubNews.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	}).populate('news', 'name')
}

const deleteSubNews = async id => {
	return await SubNews.findByIdAndDelete(id)
}

module.exports = {
	createSubNews,
	getSubNews,
	getSubNewsById,
	updateSubNews,
	deleteSubNews,
}
