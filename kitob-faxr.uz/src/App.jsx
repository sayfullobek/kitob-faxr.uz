import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardLayouts } from './layout/DashboardLayout'
import { Login } from './pages/auth/Login'
import { GoSubNews } from './pages/dashboard/news/GoSubNews'
import { News } from './pages/dashboard/news/News'
import { NewsAddAndUpdate } from './pages/dashboard/news/NewsForAddAndUpdate'
import { SubNewsAddAndUpdate } from './pages/dashboard/news/SubNewsAddAndUpdate'
import { Sales } from './pages/dashboard/sales/Sales'
import { SalesAddAndUpdate } from './pages/dashboard/sales/SalesForAddAndUpdate'
import { DASHBOARD_URL } from './utils/Utils'
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={`/${DASHBOARD_URL.login}`} element={<Login />} />
				<Route
					path={`/${DASHBOARD_URL.dashboard}`}
					element={<DashboardLayouts />}
				>
					<Route path={`/${DASHBOARD_URL.sales}`} element={<Sales />} />
					<Route
						path={`/${DASHBOARD_URL.salesAdd}`}
						element={<SalesAddAndUpdate />}
					/>
					<Route
						path={`/${DASHBOARD_URL.salesUpdate}/:id`}
						element={<SalesAddAndUpdate />}
					/>

					<Route path={`/${DASHBOARD_URL.news}`} element={<News />} />
					<Route
						path={`/${DASHBOARD_URL.goNews}/:id`}
						element={<GoSubNews />}
					/>
					<Route
						path={`/${DASHBOARD_URL.newsAdd}`}
						element={<NewsAddAndUpdate />}
					/>
					<Route
						path={`/${DASHBOARD_URL.newsUpdate}/:id`}
						element={<NewsAddAndUpdate />}
					/>
					<Route
						path={`/${DASHBOARD_URL.subNewsAdd}/:newsId`}
						element={<SubNewsAddAndUpdate />}
					/>
					<Route
						path={`/${DASHBOARD_URL.subNewsUpdate}/:newsId/:id`}
						element={<SubNewsAddAndUpdate />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
