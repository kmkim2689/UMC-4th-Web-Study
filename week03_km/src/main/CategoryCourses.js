import { Link } from 'react-router-dom';
import './CategoryCourses.css';
import Course from './Course.js'

function CategoryCourses({title, courses}) {

    // 반복문 사용 시, return 문을 사용하는 것을 잊지 않기
    // 각 course를 렌더링하는 부분에서 Course 컴포넌트를 반환하는 화살표 함수에 return 키워드가 없기 때문입니다. map 함수를 사용할 때 중괄호({})를 사용하는 경우, 반환할 JSX 코드에 return을 명시해주어야 합니다. 또는 아래와 같이 괄호()를 사용하여 JSX 코드를 감싸준 후 중괄호를 사용하여 화살표 함수를 감싸면 return 키워드를 생략할 수 있습니다.
    return(
        <section className='courses-container'>
            <div className='courses-container-title'>{title}</div>
            <div className='courses-container-courses'>
                {courses.list.map((item, index) => (<Link to={`/course/${index}`}><Course thumbnail={item.thumbnail} courseTitle={item.courseTitle} courseOwner={item.courseOwner} rating={item.rating} price={item.price} /></Link>)
                )}
            </div>
            
        </section>
    );
};

export default CategoryCourses;