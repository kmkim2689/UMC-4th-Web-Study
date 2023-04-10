import './Curation.css';
import CurationItem from './CurationItem.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// react에서 carousel을 사용하기 위하여, react-slick라이브러리 이용
/*
https://sirong.tistory.com/38
사용 방법
1. 터미널에 npm install react-slick --save
npm install slick-carousel
2. 설치 완료 후 , css 파일 불러오기
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
3. import Slider from "react-slick";
*/
function Curation() {
    // react-slick에 사용될 속성들을 객체로 정의
    /*
    dots : dot indicator를 보여줄지 여부
    infinite : 끝나면 거기서 멈출지 아니면 처음으로 돌아올지
    speed: 흘러가는 속도
    slidestoshow :  슬라이더에서 보여질 슬라이드의 수를 설정합니다.
    slidestoscroll : 슬라이드 한 번 할 때 넘어갈 슬라이드 수 */
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 2.5
    };
    
    return(
        <section className='curation'>
            <div id='curation-slider'>
                <Slider {...settings}>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/byManage.png" title="# 관리형 부트캠프" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/_byMyself.png" title="# 독학형 부트캠프" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/spring.png" title="# 스프링" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/game.png" title="# 게임개발" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/ux-ui.png" title="# UX UI" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/work-skills.png" title="# 코딩테스트" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/front-end.png" title="# 프론트엔드" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/security.png" title="# 보안" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/marketing.png" title="# 마케팅" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/datascience.png" title="# 데이터" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/mobile.png" title="# 모바일" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/python.png" title="# 파이썬" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/excel.png" title="# 엑셀" />
                    </div>
                    <div>
                        <CurationItem src="https://cdn.inflearn.com/public/curation/dev-ops.png" title="# 데브옵스" />
                    </div>

                </Slider>
            </div>
        </section>

    );
};

export default Curation;