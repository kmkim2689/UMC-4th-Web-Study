import './CurationItem.css'

function CurationItem({src, title}) {
    return (
        <div className="curation-item">
            <div className="curation-img">
                <img src={src}></img>
            </div>
            <div className="curation-title">
                {title}
            </div>
        </div>
    );
};

export default CurationItem;