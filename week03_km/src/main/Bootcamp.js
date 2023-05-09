import React, { createContext, useState } from 'react';
import './Bootcamp.css';
import BannerContentContainer from './Bootcamp/BannerContentContainer';

export const BootcampContext = createContext(null);



function Bootcamp() {
    const [title, setTitle] = useState("관리형 부트캠프");
    const [desc, setDesc] = useState("첫 시작부터 취업까지! 꼼꼼한 관리로 동기를 불어넣는 부트캠프 🔥");
  return (
    
    <BootcampContext.Provider value={{ title, desc }}>
        <section id="boot-camp-banner">
        <BannerContentContainer />

    </section>

    <section id="intro">
        오직, 인프런이 검증한 양질의 교육 과정만!
    </section>

    <section id="intro2">
        <div id="question">우후죽순 생기는 부트캠프! 믿을 수 있을까?</div>
        <h3>
            10년, 20년 성장하는 개발자로 키우는 부트캠프를 선별해서 소개합니다.
        </h3>
        <div class="description1">
            개발자로 성장하는 건 마냥 쉽지 않습니다.
        </div>
        <div class="description1">
            우후죽순 생기는 부트캠프 교육 중 10년이 지나도 좋은 개발자로 성장할 수 있는 교육을 제공하는 곳은 정말 드뭅니다. 그래서 인프런이 정말 좋은 교육을 제공하는 부트캠프들을 만나 검증하고 선정한 커리큘럼을 소개합니다.
        </div>
        <div id="description2">
            ✅ 실무자의 노하우로 생생하게 ✅ 기초부터 실전까지
        </div>
        <div id="description3">
            ✅ 1:1 멘토링 관리 ✅ 팀 프로젝트  ✅ 관리형 부트캠프
        </div>
    </section>
    
    <section id="image_description">
        <div>
            <div class="img_container">
                <img src="https://cdn.inflearn.com/public/files/posts/0cfe0379-e7ee-405d-aca4-2b99fd8197cd/108569-3.gif" alt="움짤1"/>
            </div>
            <div class="text_container">
                웹 개발 (Node.js/React)
            </div>
        </div>
        <div>
            <div class="img_container">
                <img src="https://cdn.inflearn.com/public/files/posts/87f72344-8397-4fb8-8968-c32ef6e71d53/108569-5.gif" alt="움짤2"/>
            </div>
            <div class="text_container">
                모바일 앱 개발 (iOS/Swift)
            </div>
        </div>

    </section>

    <section class="ratings">
        <div>
            <div class="rating_item">
                이 강의를 듣고 수강평을 적고 있었는데 어쩌다보니 벅차오른 감정을 적고있는 저를 발견하게 되었습니다! 처음에 금액만 보면 비싸다고 생각할 수 있습니다. 하지만 시간과 돈이 전혀 아깝지 않다는 생각이 들 정도로 Swift 문법 최고의 강의라고 생각합니다. 정말 어디에도 이런 스위프트 강의는 없을 것이라고 생각합니다!
            </div>
        </div>
        <div>
            <div class="rating_item">
                만약, 다시 개발자가 되기 이전으로 돌아가 부트캠프를 선택해야 한다면 저는 다시 한 번 코드캠프를 선택할 것입니다. 공부하는 방법과 방향을 잡을 수 있게끔 A부터 Z까지 하나라도 더 알려주시고 싶어하는 모습이 느껴져 더 열심히 공부했던 것 같습니다. 혹시라도 고민하시는 분이 있다면 꼭 추천하고 싶습니다.
            </div>
        </div>
    </section>
        
    <section class="ratings">
        <div>
            <div class="rating_item">
                개발 관련된 지식은 아무것도 없는 비전공자로서 iOS 공부를 앨런 Swift 문법 강의로 시작했습니다! 개념 하나하나 비전공자도 알아들을 수 있게, 정말 이해하기 쉽게 설명해주십니다. 앨런의 Swift 문법 강의가 없었더라면 막막했을 것 같습니다! iOS 개발자로 사는 동안 평생 감사하겠습니다!
            </div>
        </div>
        <div>
            <div class="rating_item">
                개발자가 된 이후 개발자의 시선으로 이 커리큘럼을 말씀드리자면, 프로젝트의 성능을 고려하는 주니어가 되고 싶다면 완벽한 커리큘럼인 것 같습니다! 주니어도 흔히 접할 수 있는 기술뿐만 아니라, 브라우저 렌더링 원리를 기반으로 한 기술까지 배우다 보니 확실히 리팩토링할 때 고려할 수 있는 폭이 넓어졌습니다!
            </div>
        </div>
    </section>

    <div id="start">
        <b>개발자 취업</b>으로 이끌어줄 검증된 부트캠프 모음
        <br/>
        👇 성장하는 개발자의 길, 인프런에서 시작해보세요. 👇
    </div>
    <div id="start_desc">
        안드로이드, 데이터 분석, 인공지능 등 더 많은 과정이 추가될 예정입니다!
    </div>

    <div id="bottom_banner">
        수년 뒤 모습까지 생각한 ‘진짜’ 부트캠프를 만나보세요. (계속 추가 예정~😉)
    </div>

    <section id="courses">
        <div id="courses_title">관리형 부트캠프</div>
        <div id="chip">전체</div>
    </section>
    

    </BootcampContext.Provider>

  )
}

export default Bootcamp