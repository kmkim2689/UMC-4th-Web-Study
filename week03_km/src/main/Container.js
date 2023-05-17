import './Container.css';
import { useState, useEffect } from 'react';
// 배너 이미지 import
import banner1 from '../media/banner1.png';
import banner2 from '../media/banner2.gif';
import banner3 from '../media/banner3.png';
import { FaAngleLeft, FaAngleRight, FaPause } from "react-icons/fa";

function Container() {
    const bannerList = [banner1, banner2, banner3];
    // state를 이용하여, 인덱스의 변화에 따라 보여주는 배너를 달리할 것임.
    const [currentNum, setCurrentNum] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
          setCurrentNum((currentNum + 1) % bannerList.length);
        }, 5000);
        return () => clearInterval(intervalid);
      }, [currentNum]);

    // event.target과 event.currentTarget의 차이
    /*
    function handleClick(event) {
        console.log(event.target); // 버튼 요소
        console.log(event.currentTarget); // div 요소(만약 자식요소가 있는 것인데 click 이벤트를 구현하고 싶다면 이것을 쓴다)
            }

        return (
            <div onClick={handleClick}>
                <button>Click me</button>
            </div>
        );
     */
    const onClick = (event) => {
        console.log(`event ${event}`);
        let clicked = event.currentTarget.id;
        console.log(`clicked ${clicked}`);
        if (clicked === "arrow-left") {
            console.log("왼쪽")
            setCurrentNum((currentNum - 1 + bannerList.length) % bannerList.length);
        } else if (clicked === "arrow-right") {
            console.log("오른쪽")
            setCurrentNum((currentNum + 1) % bannerList.length);
        }
    };

    const onChipClick = (event) => {
        console.log(`event ${event}`);
        let chip = event.target.id;
        event.target.style.color="green"
        event.target.style.border="2px solid green"
        if (chip === '1') {
            setCurrentNum(0);
        } else if (chip === '2') {
            setCurrentNum(1);
        } else {
            setCurrentNum(2);
        }
    }

    return(
        <div className="container">
            <div className="banner-container">
                <div className='banner'>
                    {bannerList.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`Banner ${index}`}
                            style={{ display: index === currentNum ? 'block' : 'none' }}
                        />
                    ))}
                </div>
            </div>
            <div className='banner-controller'>
                <div className='index-controller'>
                    {currentNum + 1}/{bannerList.length}
                    <span id="arrow-left" onClick={onClick}>
                        <FaAngleLeft />
                    </span>
                    <span id="pause" onClick={onClick}>
                        <FaPause />
                    </span>
                    <span id="arrow-right" onClick={onClick}>
                        <FaAngleRight />
                    </span>
                </div>
                <div id='separator'>
                </div>
                <div>
                    <span className='chip-item' id='1' onClick={onChipClick}>7th창립기념일🍀</span>
                    <span className='chip-item' id='2' onClick={onChipClick}>로드맵 🌱</span>
                    <span className='chip-item' id='3' onClick={onChipClick}>무료 부트캠프</span>
                </div>
            </div>
        </div>
    );
};

export default Container;