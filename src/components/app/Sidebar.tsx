import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDashboard, MdPictureInPictureAlt, MdSettings } from "react-icons/md";
import { RiBankFill, RiHandbagFill, RiLeafFill } from "react-icons/ri";
import { FaArtstation, FaLock, FaSeedling, FaUser } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { TiFeather } from "react-icons/ti";

interface LinkItemProp {
	itemName: string;
	icon: React.ReactElement;
	eqmIcon?: React.ReactElement;
	rightIcon?: boolean;
}

type ItemProp = {
	rightIcon?: boolean;
};

const LinkItem = ({ itemName, icon, eqmIcon, rightIcon }: LinkItemProp) => {
	return (
		<LinkTo to="#">
			<Item rightIcon={rightIcon}>
				{icon}
				<span>{itemName}</span>
				{eqmIcon}
			</Item>
		</LinkTo>
	);
};

const Sidebar = () => {
	return (
		<Container>
			<Logo src="/sitelogo.png" alt="Site Logo" />

			<LinkItem itemName="Dashboard" icon={<MdDashboard />} />
			<LinkItem itemName="Grower" icon={<FaUser />} />
			<LinkItem itemName="Seeding" icon={<RiLeafFill />} />
			<LinkItem itemName="Transplanting" icon={<FaSeedling />} />
			<LinkItem itemName="Harvesting" icon={<TiFeather />} />
			<LinkItem itemName="Tasks" icon={<MdPictureInPictureAlt />} />
			<LinkItem itemName="Compliance" icon={<RiBankFill />} />
			<LinkItem itemName="Logistics" icon={<RiHandbagFill />} />
			<LinkItem itemName="Sales" icon={<HiCurrencyDollar />} />
			<LinkItem
				itemName="EQM"
				icon={<FaArtstation />}
				eqmIcon={<FaLock fontSize="15px" className="rightIcon" />}
				rightIcon={true}
			/>
			<LinkItem itemName="Settings" icon={<MdSettings />} />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: 10px 16px;
	min-height: 100vh;

	position: absolute;
	top: 0;
	left: 0;

	box-sizing: border-box;
	background: #3a4c54;

	@media (max-width: 500px) {
		width: 50px;
	}
`;

const Item = styled.div<ItemProp>`
	display: flex;
	align-items: center;
	color: ${(props) => (props.rightIcon ? "#99CC00" : "#FCFCFC")};
	font-size: 22.5px;

	span {
		margin-left: 12px;
		font-size: ${(props) => (props.rightIcon ? "14px" : "12.5px")};
		letter-spacing: 0.02rem;
		margin-right: ${(props) => (props.rightIcon ? "auto" : "0")};

		@media (max-width: 500px) {
			display: none;
		}
	}

	@media (max-width: 500px) {
		.rightIcon {
			display: none;
		}
	}
`;

const Logo = styled.img`
	align-self: center;
	margin-bottom: 1.5rem;
	user-select: none;

	@media (max-width: 500px) {
		width: 78px;
	}
`;

const LinkTo = styled(Link)`
	text-decoration: none;
	margin-bottom: 20px;

	:last-of-type {
		margin-top: 205px;
	}
`;

export default Sidebar;
