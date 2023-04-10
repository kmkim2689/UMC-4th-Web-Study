import './TopNavBtn.css';

function TopNavBtn({text, icon}) {
    return (
        <button className="top-nav-btn">
            <svg className="top-nav-icon">
                {icon}
            </svg>
            <div>
                {text}
            </div>
        </button>
    );
};

export default TopNavBtn;
