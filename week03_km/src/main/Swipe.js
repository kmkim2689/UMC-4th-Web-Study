import './Swipe.css';
import SwipeItem from './SwipeItem.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Swipe({swiper}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>

                {swiper.list.map((item, index) => (
                    <SwipeItem key={index} background={item.background} title={item.title} button={item.button}/>
                ))}

        </Slider>
    );
};

export default Swipe;