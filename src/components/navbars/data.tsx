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
		title: 'Ecommerce',
		icon: 'fas fa-shopping-bag',
	//	link: '/order',
		children: [
			{ id: uuid(), link: '/ecommerce/orders', name: 'Orders', icon: 'fas fa-truck', },
			{ id: uuid(), link: '/ecommerce/invoices', name: 'Invoices',icon:"fas fa-circle"},
			{ id: uuid(), link: '/ecommerce/products', name: 'Products' ,icon:"fas fa-circle"},
			{ id: uuid(), link: '/ecommerce/product-categories', name: 'Product Categories',icon:"fas fa-circle"},
			{ id: uuid(), link: '/ecommerce/product-tags', name: 'Product Tags',icon:"fas fa-circle"},
			{ id: uuid(), link: '/ecommerce/product-attributes', name: 'Product Attributes',icon:"fas fa-circle"},
			{ id: uuid(), link: '/ecommerce/product-collections', name: 'Product Collections',icon: 'fas fa-database',},
			{ id: uuid(), link: '/ecommerce/product-labels', name: 'Product Labels',icon: 'fas fa-tags',},
			{ id: uuid(), link: '/ecommerce/brands', name: 'Brands',icon: 'fas fa-registered',},
			{ id: uuid(), link: '/ecommerce/reviews', name: 'Reviews',icon:"fas fa-circle"},
			{ id: uuid(), link: '/ecommerce/flash-sale', name: 'Flash sale', icon: "fas fa-bolt"},
			{ id: uuid(), link: '/ecommerce/discount', name: 'Discount', icon: "fas fa-bolt"},
			{ id: uuid(), link: '/ecommerce/customers', name: 'Customers', icon: "fas fa-users"},
		]
	},
    {
		id: uuid(),
		title: 'Pages',
		icon: 'fas fa-file',
		link: '/pages'
	},
    {
		id: uuid(),
		title: 'Blogs',
		icon: 'fas fa-newspaper',
		children: [
			{ id: uuid(), link: '/blog/posts', name: 'Post' ,icon:"fas fa-file-o"},
			{ id: uuid(), link: '/blog/categories', name: 'Categories', icon:"fas fa-folder"},
			{ id: uuid(), link: '/blog/tags', name: 'Tags' ,icon:"fas fa-tag"},
		]
	},
    {
		id: uuid(),
		title: 'Payments',
		icon: 'fas fa-money-check-alt',
		children: [
			{ id: uuid(), link: '/payments/transactions', name: 'Transactions' ,icon:"fas fa-circle"},
			{ id: uuid(), link: '/payments/logs', name: 'Payments Logs', icon:"fas fa-circle"},
			{ id: uuid(), link: '/payments/method', name: 'Payments Methods' ,icon:"fas fa-circle"},
		]
	},
    {
		id: uuid(),
		title: 'Testimonials',
		icon: 'fas fa-user-cog',
		link: '/testimonials'
	},
    {
		id: uuid(),
		title: 'Contacts',
		icon: 'fas fa-id-card',
		link: '/contacts'
	},
	{
		id: uuid(),
		title: 'Media',
		icon: 'fas fa-folder',
		link: '/media'
	},
	{
		id: uuid(),
		title: 'Tools',
		icon: 'fas fa-wrench',
		children: [
			{ id: uuid(), link: '/tools/data', name: 'Export/Import' ,icon:"fas fa-file-export"},
		]
	},
	{
		id: uuid(),
		title: 'Calendar',
		icon: 'fas fa-calendar-alt',
		link: '/calendar'
	},
	{
		id: uuid(),
		title: 'Settings',
		icon: 'fas fa-cogs',
		link: '/settings'
	},
	{
		id: uuid(),
		title: 'Admin',
		icon: 'fas fa-user-shield',
		link: '/admin'
	},
	{
		id: uuid(),
		title: 'LAYOUTS & PAGES',
		grouptitle: true
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