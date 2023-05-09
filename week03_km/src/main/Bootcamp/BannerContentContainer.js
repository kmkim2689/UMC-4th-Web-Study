import React, { useContext } from 'react'
import './BannerContentContainer.css';
import { BootcampContext } from '../Bootcamp';

function BannerContentContainer() {
    const { title, desc } = useContext(BootcampContext);
  return (
    <div id='banner-content-container'>
        <div id="banner_title">
                {title}
            </div>
            <div id="banner_desc">
                {desc}
            </div>
            <div id="course_container">
                <div id="course_img_container">
                    <img src="https://cdn.inflearn.com/public/courses/327472/cover/84059e1b-882e-4b51-8a71-801f129fb105/swift.png" alt=""/>
                </div>
                <div id="banner_desc_container">
                    <div>
                        <div id="banner_desc_title">
                            앨런 Swift문법 마스터 스쿨 (온라인 BootCamp -  2개월과정)
                        </div>
                        <div id="banner_desc_content">
                            Swift문법을 제대로 이해, 활용해보고자 하는 철학을 바탕으로 과정이 설계되었습니다. 코딩에 대해 1도 모르는 비전공자를 시작으로 네카라쿠배에 입사할 수 있는 초고급 수준까지 올리는 것을 목표로 하고 있습니다. 그림을 통한 메모리 구조 등의 이해를 통해  직관적으로 이해하고, 전공자의 지식 수준이상으로 올라갈 수 있는 2개월 과정의 부트캠프 입니다.
                        </div>
                        <div id="chip_review">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"></svg>

                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default BannerContentContainer