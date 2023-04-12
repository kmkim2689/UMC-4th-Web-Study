import './SwipeItem.css';

function SwipeItem({key, background, title, button}) {
    // return 빼먹으면 안된다.
    return (
        <div id={key} className='swipe-item'>
        <img className="swiper-image" src={background}>
        </img>
        <div className='swiper-title'>
            {title}
        </div>
        <button className='swiper-button'>
            {button}
        </button>
    </div>
    );
};

export default SwipeItem;