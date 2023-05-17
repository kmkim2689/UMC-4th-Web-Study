import TopNav from './TopNav.js';
import MainNav from './MainNav.js';
import Container from './Container.js';
import Search from './Search.js';
import Curation from './Curation.js';
import CategoryCourses from './CategoryCourses.js';
import Articles from './Articles.js';
import Swipe from './Swipe.js'
import Service from './Service.js';
import Footer from './Footer.js';
import './Main.css';

function Main() {

    const similarCourses = {
        list: [
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png",
                courseTitle : "프로그래밍 시작하기 : 파이썬 입문(Inflearn Original)",
                courseOwner : "인프런",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326750/cover/d7815167-2a01-42c1-aacf-bbd32a3705bc/326750-eng.png",
                courseTitle : "자바(Java) 알고리즘 문제풀이 입문: 코딩테스트 대비",
                courseOwner : "김태원",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/324119/course_cover/07c45106-3cfa-4dd6-93ed-a6449591831c/%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%204.png",
                courseTitle : "실전! 스프링 부트와 JPA 활용1",
                courseOwner : "김영한",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
                courseTitle : "애플 웹사이트 인터랙션 클론!",
                courseOwner : "1분코딩",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
                courseTitle : "스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술",
                courseOwner : "김영한",
                rating: 5,
                price: "33,000"
            }
        ]
    };

    const javaCourses = {
        list: [
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png",
                courseTitle : "프로그래밍 시작하기 : 파이썬 입문(Inflearn Original)",
                courseOwner : "인프런",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326750/cover/d7815167-2a01-42c1-aacf-bbd32a3705bc/326750-eng.png",
                courseTitle : "자바(Java) 알고리즘 문제풀이 입문: 코딩테스트 대비",
                courseOwner : "김태원",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/324119/course_cover/07c45106-3cfa-4dd6-93ed-a6449591831c/%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%204.png",
                courseTitle : "실전! 스프링 부트와 JPA 활용1",
                courseOwner : "김영한",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
                courseTitle : "애플 웹사이트 인터랙션 클론!",
                courseOwner : "1분코딩",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
                courseTitle : "스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술",
                courseOwner : "김영한",
                rating: 5,
                price: "33,000"
            }
        ]
    };

    const articles = {
        list: [
            {
                thumbnail: "https://cdn.inflearn.com/public/files/pages/06a782d7-12de-416f-92e4-a544df5550b8/[이벤트]창립기념일_7th_628.png",
                title: "🌳 인프런과 나무 일곱그루",
                desc: "!!! 와 !!!인프랩이 7번째 창립 기념일을 맞았어요.창립기념일은 4월 5일 식목일입니다.꾸준히 성장하는 우리들과 참 잘 어울리는 날이지 않나요?"
            }, 
            {
                thumbnail: "https://cdn.inflearn.com/public/files/pages/9d02d597-374b-41ca-a1e9-d5e9336699d0/infmation-61.png",
                title: "HTML은 프로그래밍 언어인가?",
                desc: "HTML에 대한 모든 것!#HTML #프로그래밍 언어 #마크업 언어 #CSS #Javascript 코딩 공부할 때 가장 먼저 배우게 되는 HTML,기본 중의 기본이라고 볼 수 있죠."
            },
            {
                thumbnail: "https://cdn.inflearn.com/public/files/pages/32b7158f-48d1-4465-a1ae-6278b7684ed0/infmation-60-main.png",
                title: "한눈에 살펴보는 Windows 대 macOS",
                desc: "윈도우 vs 맥, 어떻게 다를까 #Windows #macOS #운영체제 #PC"
            }
        ]
    };

    const springCourses = {
        list: [
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png",
                courseTitle : "프로그래밍 시작하기 : 파이썬 입문(Inflearn Original)",
                courseOwner : "인프런",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326750/cover/d7815167-2a01-42c1-aacf-bbd32a3705bc/326750-eng.png",
                courseTitle : "자바(Java) 알고리즘 문제풀이 입문: 코딩테스트 대비",
                courseOwner : "김태원",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/324119/course_cover/07c45106-3cfa-4dd6-93ed-a6449591831c/%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%204.png",
                courseTitle : "실전! 스프링 부트와 JPA 활용1",
                courseOwner : "김영한",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
                courseTitle : "애플 웹사이트 인터랙션 클론!",
                courseOwner : "1분코딩",
                rating: 5,
                price: "33,000"
            },
            {
                thumbnail : "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
                courseTitle : "스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술",
                courseOwner : "김영한",
                rating: 5,
                price: "33,000"
            }
        ]
    };

    const swiper = {
        list: [
            {
                background: "https://cdn.inflearn.com/public/main_sliders/38744ba0-b12a-491a-9ca2-43375c3905ba/share-you.jpg",
                title: "지식을 나눠주세요.\n쉽게 시작하고 합당한 보상을 받을 수 있어요.",
                button: "지식공유 알아보기"
            },
            {
                background: "https://cdn.inflearn.com/public/main_sliders/3b67a1a1-aae3-442e-8e17-791b7cdfb5f5/bottom-1920-205-%281111%29.jpg",
                title: "모든 팀원이 인프런의 강의들을\n자유롭게 학습하는 환경을 제공해주세요.",
                button: "비즈니스 알아보기"
            },
            {
                background: "https://cdn.inflearn.com/public/main_sliders/39bcb91f-64a4-4a16-8878-e8dc7cd342e8/bottom-1920-205-%28221%29.jpg",
                title: "당신은 더 좋은 곳에 갈 수 있어요.\n지금 열려있는 채용공고를 확인해보세요.",
                button: "공고 확인하기"
            }
        ]
    };

    const service = {
        list: [
            {
                serviceTitle: "지식공유자 되기",
                serviceDesc: "9개월간 온라인 기술 강의로만 1억원! 나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.",
                button: "지식공유자 참여하기"
            },
            {
                serviceTitle: "인프런 비즈니스 신청",
                serviceDesc: "모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을 제공해주세요. 업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할 수 있습니다.",
                button: "비즈니스 신청하기"
            },
            {
                serviceTitle: "인프런 제휴",
                serviceDesc: "다양한 대학 및 기업과 연계된 인프런만의 혜택을 만나보세요. 여러분의 성장에 밑거름이 되어드릴 수 있는 여러 기회를 누릴 수 있습니다.",
                button: "제휴 둘러보기"
            } 
        ]
    };

    return (
        <div>
            
            <TopNav />
            <MainNav />
            <Container />
            <Search />
            <Curation />
            <CategoryCourses title="나와 비슷한 사람들이 수강한 강의" courses={similarCourses}/>
            <CategoryCourses title="내가 학습한 Java 분야 인기 강의" courses={javaCourses}/>
            <CategoryCourses title="내가 학습한 Spring 분야 인기 강의" courses={springCourses}/>
            <Articles articles={articles} />
            <Swipe swiper={swiper}/>
            <Service title="다양한 서비스를 신청하세요." desc="인프런의 지식공유자 '비즈니스' 대학생 신청방법에 대해 알아보세요." service={service}/>
            <Footer />
        </div>
    )
}

export default Main;