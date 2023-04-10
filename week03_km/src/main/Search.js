import './Search.css';
import { FaSearch } from "react-icons/fa";

function Search() {
    return(
        <section className='search'>
            <div className="search-layout">
                <h1 className='search-title'>인프런에서 성장을 도와드려요</h1>
                <br/>
                <input className='search-course' type='text' placeholder='배우고 싶은 지식을 입력해보세요.'>
                </input>
            </div>
            
        </section>
    );
};

export default Search;