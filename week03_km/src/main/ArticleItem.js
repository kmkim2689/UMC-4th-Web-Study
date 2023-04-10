import './ArticleItem.css'

function ArticleItem({ thumbnail, title, desc }) {
    return (
        <div className='article'>
            <div className='thumbnail'>
                <img src={thumbnail}></img>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='desc'>
                {desc}
            </div>
        </div>
    );
};

export default ArticleItem;