import './FooterMenu.css';

function FooterMenu({title, menu}) {
    return (
        <div className="footer-item">
            <div className="footer-title">
                {title}
            </div>
            {menu.map((item) => (
                <div className="footer-list">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default FooterMenu;