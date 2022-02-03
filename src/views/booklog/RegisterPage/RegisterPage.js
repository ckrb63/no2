import React, { useState } from "react";
import SearchBook from "./SearchBook";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import Toggle from "./Toggle";

function RegisterPage(){
    const [TitleValue, setTitleValue] = useState("");
    const [ContentValue, setContentValue] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };

    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    };
    // console.log(ContentValue);

    const onSubmitArticle = (event) => {
        event.preventDefault();
        const article = { title: TitleValue, content: ContentValue};
        // console.log(article);
    };

    const onSubmitChangeBook = (event) => {
        event.preventDefault();
        const article = { title: TitleValue, content: ContentValue};
        // console.log(article);
    };

    return(
        <div>
            <SearchBook search={setIsSearched}/>
            {isSearched && <div>
            <Toggle/>
            <form onSubmit>
                <button onClick={onSubmitChangeBook}>
                    책 변경
                </button>
                <button onClick={onSubmitArticle}>
                    저장
                </button>
                <br />
                <div style={{maxWidth: "700px", margin:"2rem"}}>
                    <input 
                        onChange={onTitleChange}
                        value={TitleValue} 
                        type="text" 
                        name="title"
                        placeholder="제목을 입력해주세요."
                    />
                    <hr></hr>
                    <textarea 
                        onChange={onContentChange}
                        value={ContentValue} 
                        name="content"
                        placeholder="텍스트를 입력해주세요."
                    />
                </div>
                
            </form>
            </div>}
        </div>
    );
}

export default RegisterPage;