import { faCreditCard, faBell, faFileLines, faPager, faNewspaper , faEnvelope,
	 faPaintBrush, faQuestionCircle , faQrcode, faUserAlt, faBagShopping, faTools, faCog } from "@fortawesome/free-solid-svg-icons";
import { faBug, faCode, faGauge, faParagraph} from "@fortawesome/free-solid-svg-icons";
import React, {PropsWithChildren} from "react";
import { Badge } from "react-bootstrap";
import SidebarNavGroup from "./SidebarNavGroup";
import SidebarNavItem from "./SidebarNavItem";
import { getDictionary } from "@/locales/dictionary";

const SidebarNavTitle = (props: PropsWithChildren) =>{
    const { children } = props;
    return (
        <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
    )
}

export default async function SidebarNav(){
    const dict = await getDictionary();

    return (
        <ul className="list-unstyled">
			<SidebarNavItem icon={faGauge} href="/admin">
				{dict.sidebar.items.dashboard}
				<small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
			</SidebarNavItem>
			<SidebarNavItem icon={faCode} href="/admin/pokemons">
				{dict.sidebar.items.sample}
				<small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
			</SidebarNavItem>

          	<SidebarNavTitle>{dict.sidebar.items.components}</SidebarNavTitle>
			<SidebarNavGroup toggleIcon={faBagShopping} toggleText={dict.sidebar.items.ecommerce}>
				<SidebarNavItem href="#">{dict.sidebar.items.report}</SidebarNavItem>
				<SidebarNavItem href="#">
					{dict.sidebar.items.orders}
					<small className="ms-auto"><Badge bg="info" className="ms-auto">7</Badge></small>	
				</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.incomplete_order}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.shipments}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.invoices}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.products}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_prices}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_inventory}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_cate}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_tags}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_attr}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_options}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_collect}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.product_label}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.brands}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.reviews}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.flash_sale}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.discounts}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.customers}</SidebarNavItem>
			</SidebarNavGroup>
    
			<SidebarNavGroup toggleIcon={faNewspaper} toggleText={dict.sidebar.items.blog}>
				<SidebarNavItem href="#">{dict.sidebar.items.posts}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.categories}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.tags}</SidebarNavItem>
			</SidebarNavGroup>
    
          	
			<SidebarNavItem icon={faPager} href="#">{dict.sidebar.items.pages}</SidebarNavItem>
    
			<SidebarNavGroup toggleIcon={faCreditCard} toggleText={dict.sidebar.items.payment}>
				<SidebarNavItem href="#">{dict.sidebar.items.form_control}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.select}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.checks_and_radios}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.range}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.input_group}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.floating_labels}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.layout}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.validation}</SidebarNavItem>
			</SidebarNavGroup>
    

			<SidebarNavItem icon={faEnvelope} href="#">{dict.sidebar.items.contact}</SidebarNavItem>
			<SidebarNavItem icon={faPaintBrush} href="#">{dict.sidebar.items.slider}</SidebarNavItem>
			<SidebarNavItem icon={faQuestionCircle} href="#">{dict.sidebar.items.faq}</SidebarNavItem>
			<SidebarNavItem icon={faFileLines} href="#">{dict.sidebar.items.media}</SidebarNavItem>
			<SidebarNavItem icon={faQrcode} href="#">{dict.sidebar.items.qrCode}</SidebarNavItem>

			<SidebarNavGroup toggleIcon={faTools} toggleText={dict.sidebar.items.tools}>
				<SidebarNavItem href="#">{dict.sidebar.items.data}</SidebarNavItem>
			</SidebarNavGroup>
          
			<SidebarNavItem icon={faCog} href="#">
				{dict.sidebar.items.settings}
			</SidebarNavItem>

			<SidebarNavGroup toggleIcon={faUserAlt} toggleText={dict.sidebar.items.Admin}>
				<SidebarNavItem href="#">{dict.sidebar.items.user}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.roles}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.backup}</SidebarNavItem>
				<SidebarNavItem href="#">{dict.sidebar.items.cronjob}</SidebarNavItem>
			</SidebarNavGroup>

			
		
		</ul>
	)
}