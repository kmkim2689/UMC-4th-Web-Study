import ArticleItem from './ArticleItem';
import './Articles.css';

function Articles({articles}) {
    return (
        <div className="article-container">
            <div className="article-title">읽어보기</div>
            <div className='article-container-articles'>
                {articles.list.map((item) => 
                    (
                        <ArticleItem thumbnail={item.thumbnail} title={item.title} desc={item.desc} />
                    )
                )}
            </div>
        </div>
    );
};

export default Articles;