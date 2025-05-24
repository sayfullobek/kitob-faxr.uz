const { Projects } = require('../models')

const createProject = async data => {
	return await Projects.create(data)
}

const getProjects = async ({ page = 1, limit = 10 }) => {
	const skip = (page - 1) * limit
	const [total, data] = await Promise.all([
		Projects.countDocuments(),
		Projects.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
	])
	return {
		total,
		page: Number(page),
		limit: Number(limit),
		data,
	}
}

const getProjectById = async id => {
	return await Projects.findById(id)
}

const updateProject = async (id, data) => {
	return await Projects.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	})
}

const deleteProject = async id => {
	return await Projects.findByIdAndDelete(id)
}

module.exports = {
	createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProject,
}
