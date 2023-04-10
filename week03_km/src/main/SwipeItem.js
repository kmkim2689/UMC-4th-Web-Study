import './SwipeItem.css';

function SwipeItem({key, background, title, button}) {
    <div key={key} className='swipe-item'>
        <img background={background}>
        </img>
        <div>
            {title}
        </div>
        <button>
            {button}
        </button>
    </div>
};

export default SwipeItem;