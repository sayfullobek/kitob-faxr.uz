import { DASHBOARD_URL } from './Utils'

export const SALES_BREADCRUMP = [
	{
		name: 'Asosiy sahifa',
		url: `/${DASHBOARD_URL.dashboard}`,
		primary: false,
	},
	{
		name: "Sotuv bo'limi",
		primary: true,
	},
]

export const SALES_BREADCRUMP_ADD = [
	{
		name: 'Asosiy sahifa',
		url: `/${DASHBOARD_URL.dashboard}`,
		primary: false,
	},
	{
		name: "Sotuv bo'limi",
		url: `/${DASHBOARD_URL.sales}`,
		primary: false,
	},
	{
		name: 'Saqlash',
		primary: true,
	},
]

export const NEWS_BREADCRUMP = [
	{
		name: 'Asosiy sahifa',
		url: `/${DASHBOARD_URL.dashboard}`,
		primary: false,
	},
	{
		name: 'Yangiliklar',
		primary: true,
	},
]

export const NEWS_BREADCRUMP_ADD = [
	{
		name: 'Asosiy sahifa',
		url: `/${DASHBOARD_URL.dashboard}`,
		primary: false,
	},
	{
		name: 'Yangiliklar',
		url: `/${DASHBOARD_URL.news}`,
		primary: false,
	},
	{
		name: 'Saqlash',
		primary: true,
	},
]

export const SUB_NEWS_BREADCRUMP = id => {
	return [
		{
			name: 'Asosiy sahifa',
			url: `/${DASHBOARD_URL.dashboard}`,
			primary: false,
		},
		{
			name: 'Yangiliklar',
			url: `/${DASHBOARD_URL.news}`,
			primary: false,
		},
		{
			name: 'Ichki yangiliklar',
			primary: true,
		},
	]
}

export const SUB_NEWS_BREADCRUMP_ADD = id => {
	return [
		{
			name: 'Asosiy sahifa',
			url: `/${DASHBOARD_URL.dashboard}`,
			primary: false,
		},
		{
			name: 'Yangiliklar',
			url: `/${DASHBOARD_URL.news}`,
			primary: false,
		},
		{
			name: 'Ichki yangiliklar',
			url: `/${DASHBOARD_URL.goNews}/${id}`,
			primary: false,
		},
		{
			name: 'Saqlash',
			primary: true,
		},
	]
}
