import { v4 as uuid } from 'uuid';

const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'fas fa-home',
		link: '/admin/dashboard'
	},
    {
		id: uuid(),
		title: 'Order',
		icon: 'fas fa-shopping-cart',
		link: '/order'
	},
    {
		id: uuid(),
		title: 'Table',
		icon: 'fas fa-table',
		link: '/table'
	},
    {
		id: uuid(),
		title: 'Dish',
		icon: 'fas fa-cookie',
		link: '/disc'
	},
    {
		id: uuid(),
		title: 'Analytics',
		icon: 'fas fa-chart-pie',
		link: '/analytics'
	},
    {
		id: uuid(),
		title: 'Users',
		icon: 'fas fa-users',
		link: '/users'
	},
    {
		id: uuid(),
		title: 'Settings',
		icon: 'fas fa-cogs',
		link: '/settings'
	},
	{
		id: uuid(),
		title: 'LAYOUTS & PAGES',
		grouptitle: true
	},
    {
		id: uuid(),
		title: 'Calendar',
		icon: 'fas fa-calendar-alt',
		link: '/calendar'
	},
	{
		id: uuid(),
		title: 'Pages',
		icon: 'fas fa-file-alt',
		children: [
			{ id: uuid(), link: '/pages/profile', name: 'Profile' },
			{ id: uuid(), link: '/pages/settings', name: 'Settings'},
			{ id: uuid(), link: '/pages/billing', name: 'Billing' },
			{ id: uuid(), link: '/pages/pricing', name: 'Pricing'},
			{ id: uuid(), link: '/404', name: '404 Error' }
		]
	},	
	{
		id: uuid(),
		title: 'Authentication',
		icon: 'fas fa-at',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
			{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}			
		]
	},
];

export default DashboardMenu