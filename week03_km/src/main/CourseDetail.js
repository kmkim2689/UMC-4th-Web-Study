import React from 'react';
import './CourseDetail.css';

function CourseDetail() {
  return (
    <>
    <section id="course_intro">
        <div id="course_thumbnail_container">
            <img src="https://cdn.inflearn.com/public/courses/329676/cover/b1039bd7-039d-4d63-a480-6bd57d622413/329676-eng.png" alt=""/>
        </div>

        <div id="course_intro_container">
            <span id="category">개발 · 프로그래밍  프로그래밍 언어</span>
            <h1 id="course_title">즐거운 자바</h1>
            <div id="course_participants">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#ffc807" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#ffc807" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#ffc807" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#ffc807" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#ffc807" fill-rule="evenodd" d="M8 1.3c.133 0 .263.037.375.108.113.07.203.17.262.29l1.778 3.637 3.978.583c.131.02.254.075.355.161.101.086.176.199.217.326.041.126.046.262.014.392-.031.13-.098.247-.193.34l-2.878 2.831.68 3.996c.022.131.007.267-.042.39-.05.124-.133.23-.24.31-.107.078-.234.125-.366.134-.132.01-.263-.018-.38-.08L8 12.831l-3.558 1.887c-.117.062-.248.09-.38.08-.132-.01-.259-.056-.365-.134-.107-.079-.19-.186-.24-.31-.05-.123-.065-.258-.043-.39l.68-3.997-2.88-2.83c-.094-.093-.161-.21-.193-.34-.032-.13-.027-.266.014-.393.04-.127.116-.24.217-.326.102-.086.225-.142.356-.16l3.978-.583 1.779-3.637c.059-.12.15-.22.262-.29.112-.07.242-.108.374-.108z" clip-rule="evenodd"></path></svg>
                <span>(5.0)</span>
                <span>16개의 수강평</span>
                <span> ∙ </span>
                <span>1648명의 수강생</span>
            </div>
            <div id="course_tutor">
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16"  viewBox="0 0 16 16"><path fill="#ffffff"  fill-rule="evenodd" d="M8 1.667c-2.025 0-3.667 1.641-3.667 3.666 0 1.26.636 2.371 1.603 3.031-2.243.822-3.859 2.945-3.933 5.454-.009.277.209.507.485.515.276.008.506-.209.514-.485C3.082 11.158 5.29 9 8 9c2.71 0 4.918 2.157 4.998 4.848.008.276.238.493.514.485.276-.008.493-.239.485-.514-.074-2.51-1.69-4.633-3.933-5.455.967-.66 1.603-1.771 1.603-3.03 0-2.026-1.642-3.667-3.667-3.667zM5.333 5.333c0-1.472 1.194-2.666 2.667-2.666 1.473 0 2.667 1.194 2.667 2.666C10.667 6.806 9.473 8 8 8 6.527 8 5.333 6.806 5.333 5.333z" clip-rule="evenodd"/></svg>
                <span><u><b>부부 개발단 토토(김성박)</b></u></span>
            </div>
            <div id="course_tech">
                <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16"  viewBox="0 0 16 16"><path fill="#ffffff"  fill-rule="evenodd" d="M5.773 1.455c-.283 0-.518.216-.542.498L5 4.727H2.545c-.3 0-.545.244-.545.546 0 .301.244.545.545.545H4.91l-.364 4.364h-2c-.3 0-.545.244-.545.545 0 .301.244.546.545.546h1.91l-.224 2.684c-.027.317.224.588.542.588.282 0 .518-.216.541-.498l.231-2.774H9.91l-.224 2.684c-.026.317.224.588.542.588.283 0 .518-.216.542-.498L11 11.273h2.454c.302 0 .546-.245.546-.546 0-.301-.244-.545-.546-.545h-2.363l.364-4.364h2c.3 0 .545-.244.545-.545 0-.302-.244-.546-.546-.546h-1.909l.224-2.684c.027-.317-.224-.588-.542-.588-.282 0-.518.216-.541.498l-.232 2.774H6.091l.224-2.684c.026-.317-.224-.588-.542-.588zM6 5.818l-.364 4.364H10l.364-4.364H6z" clip-rule="evenodd"/></svg>
                <span>Java</span>
            </div>
        </div>
    </section>

    <section id="course_nav_bar">
        내비게이션
    </section>
    
    <div id="course_detail_container">
        <section id="course_detail">
            <h1>
                입문자를 위해 준비한<br/>[프로그래밍 언어, 백엔드] 강의입니다.
            </h1>

            <div id="detail_subtitle">
                기업에서 가장 많이 사용하는 프로그래밍 언어중 대표적인 언어를 말하라고 하면 Java언어를 말할 것 같아요. 즐거운 자바 교육과 함께 즐겁게 자바 공부를 진행해보세요.
            </div>

            <div id="detail_learning_list">
                <div id="learning_list_left">
                    ✍️<br/>이런 걸<br/>배워요!
                </div>
                <div id="learning_list_right">
                    <ul>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>Java 기본 문법</li>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>Java 객체지향 문법</li>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>Java IO</li>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>Java Thread</li>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>Java 네트워크 프로그래밍</li>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>간단한 웹 서버 만들기</li>
                        <li><svg width="16" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path fill="#00C471" fill-rule="evenodd" d="M13.78 4.22c.14.14.22.331.22.53s-.08.39-.22.53l-7.25 7.25c-.14.14-.331.22-.53.22s-.39-.08-.53-.22L2.22 9.28c-.133-.142-.205-.33-.201-.525.003-.194.082-.38.22-.517.137-.137.322-.216.516-.22.195-.003.383.07.525.202L6 10.94l6.72-6.72c.14-.14.331-.22.53-.22s.39.08.53.22z" clip-rule="evenodd"></path></svg>간단한 채팅 서버 & 채팅 클라이언트 만들기</li>
                    </ul>
                </div>
            </div>

            <div id="banner_desc">
                자바(Java), 사전지식 없이 들어가서<br/>간단한 프로젝트와 함께 나오세요! 🤩
            </div>

            <div id="detail_image_container">
                <img src="https://cdn.inflearn.com/public/files/courses/330438/5f664612-4def-49f2-95cb-1d273b06c3d6/Animation9.gif" alt=""/>
            </div>
        </section>

        <section id="course_register">
            <div id="course_register_container">
                <span id="price">무료</span>
                <span id="register_button">바로 수강신청 하기</span>
                <div id="dashboard">
                    <span>폴더에 추가  </span><span>153  </span><span>공유</span>
                </div>
                <div id="list">
                    <ul>
                        <li>지식공유자: 부부 개발단 토토(김성박)</li>
                        <li>총 69개 수업 (24시간 31분)</li>
                        <li>수강기한: 무제한</li>
                        <li>수료증: 미발급</li>
                        <li>난이도: 입문</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <div class="floating-button" id="contact-btn">
        <img src="https://cf.channel.io/file/4627/5e6a5d75a92dc24b92e4/deskimage-d800cd849d6339739fcda00ca21eadb9" alt="인프런 문의하기"/>
    </div>

    <div id="contact-form">
        <div id="top-navigation">
            <img width="30" height="30" src="https://cf.channel.io/thumb/200x200/pub-file/4627/616e19a1bda4a905d2b0/inflearn_green_310.png" alt="avatar"/>
            <span>인프런</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" foundation="[object Object]" class="InnerIconstyled__Icon-ch-front__sc-197h5bb-0 jeqCBZ" defaultopacity="1" hoveredopacity="1" margintop="0" marginright="0" marginbottom="0" marginleft="0" withtheme="true"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.83354 10.0001C5.83354 7.69939 7.69881 5.83342 10.0002 5.83342C12.3009 5.83342 14.1669 7.69939 14.1669 10.0001C14.1669 12.3008 12.3009 14.1667 10.0002 14.1667C7.69881 14.1667 5.83354 12.3008 5.83354 10.0001ZM18.3335 11.2501V8.75008L16.4752 8.44008C16.3094 7.75508 16.0394 7.11175 15.6794 6.52675L16.776 4.99091L15.0085 3.22341L13.4727 4.32091C12.8877 3.96091 12.2452 3.69091 11.5602 3.52508L11.2502 1.66675H8.7502L8.4402 3.52508C7.7552 3.69091 7.11187 3.96091 6.52687 4.32091L4.99104 3.22341L3.22354 4.99091L4.3202 6.52675C3.96104 7.11175 3.6902 7.75508 3.5252 8.44008L1.66687 8.75008V11.2501L3.5252 11.5601C3.6902 12.2451 3.96104 12.8884 4.3202 13.4734L3.22354 15.0092L4.99104 16.7767L6.52687 15.6792C7.11187 16.0384 7.7552 16.3092 8.4402 16.4751L8.7502 18.3334H11.2502L11.5602 16.4751C12.2452 16.3092 12.8877 16.0384 13.4727 15.6792L15.0085 16.7767L16.776 15.0092L15.6794 13.4734C16.0394 12.8884 16.3094 12.2451 16.4752 11.5601L18.3335 11.2501Z"></path></svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" foundation="[object Object]" class="InnerIconstyled__Icon-ch-front__sc-197h5bb-0 jeqCBZ" id="exit" defaultopacity="1" hoveredopacity="1" margintop="0" marginright="0" marginbottom="0" marginleft="0" withtheme="true"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.4818 4.69668L15.3033 3.51817L10 8.82147L4.69671 3.51817L3.5182 4.69668L8.8215 9.99998L3.51819 15.3033L4.6967 16.4818L10 11.1785L15.3033 16.4818L16.4818 15.3033L11.1785 9.99998L16.4818 4.69668Z"></path></svg>
        </div>
        <div id="form-desc">
            성장기회의 평등 🌱<br/>궁금한 점은 언제든지 문의해주세요.
        </div>
        <div id="form-detail">
            <div id="form-info">
                <div id="form-profile">
                    <img width="36" height="36" src="https://cf.channel.io/thumb/200x200/pub-file/4627/616e1a5a481cc127ffdd/inflearn_white_310.png" alt="avatar"/>
                </div>
                <div id="form-content">
                    <div>인프런</div>
                    <div>안녕하세요 <b>인프런</b>입니다.<img src="https://cf.channel.io/asset/emoji/images/80/grinning.png" alt="grinning" data-context-type="emoji" size="18" width="18" height="18" class="Emojistyled__Emoji-ch-front__sc-kwanmh-0 dIpZCO"/></div>
                    <div>
                        오늘도 인프런을 이용해주셔서 감사해요.
                    </div>
                    <div>
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="m21.324 11.116-15.588-9a1 1 0 0 0-1.471 1.106l1.92 7.774 11.145.636v.702l-11.148.662-1.976 7.775a.998.998 0 0 0 .97 1.246c.171 0 .344-.044.5-.133l15.648-9.036a1 1 0 0 0 0-1.732Z"></path>문의할 서비스 유형을 선택해주시면 자세히 안내 드릴게요!
                    </div>
                </div>           
            </div>
            <div id="button-inquiry">
                <div>
                    새 문의하기
                </div>
            </div>
        </div>
    </div>

    <div id="inquire-form">
        <div id="top-nav-inquire">
            <div>
                <svg width="20" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg" foundation="[object Object]" class="InnerIconstyled__Icon-ch-front__sc-197h5bb-0 jeqCBZ" defaultopacity="1" hoveredopacity="1" margintop="0" marginright="0" marginbottom="0" marginleft="0" withtheme="true"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.17255 16.4226C8.84711 16.748 8.31947 16.748 7.99404 16.4226L2.1607 10.5893C1.83527 10.2638 1.83527 9.73619 2.1607 9.41075L7.99404 3.57742C8.31947 3.25198 8.84711 3.25198 9.17255 3.57742C9.49799 3.90285 9.49799 4.43049 9.17255 4.75593L3.92847 10L9.17255 15.2441C9.49799 15.5695 9.49799 16.0972 9.17255 16.4226Z"></path></svg>
            </div>
            <div id="inflearn-inqiury">인프런</div>
            <div id="inflearn-inquiry-exit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" foundation="[object Object]" class="InnerIconstyled__Icon-ch-front__sc-197h5bb-0 jeqCBZ" defaultopacity="1" hoveredopacity="1" margintop="0" marginright="0" marginbottom="0" marginleft="0" withtheme="true"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.4818 4.69668L15.3033 3.51817L10 8.82147L4.69671 3.51817L3.5182 4.69668L8.8215 9.99998L3.51819 15.3033L4.6967 16.4818L10 11.1785L15.3033 16.4818L16.4818 15.3033L11.1785 9.99998L16.4818 4.69668Z"></path></svg>
            </div>
        </div>
        <div>
            <img width="36" height="36" src="https://cf.channel.io/thumb/200x200/pub-file/4627/616e19a1bda4a905d2b0/inflearn_green_310.png" alt="avatar"/>
            <div>인프런에 문의하기</div>
            <div>성장기회의 평등🌱<br/>궁금한 점은 언제든지 문의해주세요</div>
            <div><img id="alert-icon"/>화요일 10:00부터 운영</div>
            <div><span id="month">4</span>월 <span>3</span>일 오후 11:31</div>
            <div id="talk">
                <div id="profile">
                    <img src="https://cf.channel.io/thumb/200x200/pub-file/4627/616e1a5a481cc127ffdd/inflearn_white_310.png" alt=""/>
                </div>
                <div id="talk-content">
                    <div>인프런</div>
                    <div>안녕하세요 인프런입니다<br/>오늘도 인프런을 이용해주셔서 감사해요.<br/>문의할 서비스 유형을 선택히주시면 자세히 안내 드릴게요!</div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseDetail