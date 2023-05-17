import { createStore } from "redux";

// action 타입 상수 정의
export const CHANGE = "CHANGE"

// redux state의 초기값 정의
const initialCourse = {
    thumbnail: "",
    courseTitle: "",
    courseOwner: "",
    rating: 0,
    price: "0"
};

// action 객체를 반환하기 위한 함수
export const changeCourse = (thumbnail, title, owner, rating, price) => {
    return {
        type: CHANGE,
        thumbnail: thumbnail,
        courseTitle: title,
        courseOwner: owner,
        rating: rating, 
        price: price
    }
};

export function setCourse(state = initialCourse, action) {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                thumbnail: action.thumbnail,
                courseTitle: action.title,
                courseOwner: action.owner,
                rating: action.rating,
                price: action.price
            }
        default:
            return state
    }
}

export const store = createStore(setCourse);

console.log(store.getState())

// 