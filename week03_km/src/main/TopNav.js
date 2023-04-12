import './TopNav.css';
import TopNavBtn from './TopNavBtn.js';
import { FaBitcoin, FaHands } from "react-icons/fa";

function TopNav() {
    const eduIcon = <FaBitcoin />;

    const recruitIcon = <FaHands />;

    return (
        <nav className="menu">
            <div className="menu-left">
                <TopNavBtn text="교육" icon={eduIcon}  />
                <TopNavBtn text="채용" icon={recruitIcon} />
            </div>
            <div className="menu-right">
                지식공유 참여
            </div>
        </nav>

    );
};

export default TopNav;
