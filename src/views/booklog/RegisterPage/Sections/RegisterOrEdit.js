import React,{useState} from "react";

function RegisterOrEdit(props) {
    const [TitleValue, setTitleValue] = useState("");
    const [ContentValue, setContentValue] = useState("");
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };
    // console.log(TitleValue);

    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    };
    // console.log(ContentValue);

    const onSubmitArticle = (event) => {
        event.preventDefault();
        const article = { title: TitleValue, content: ContentValue};
        // console.log(article);
    };
    return(
        <div>
            <form onSubmit>
            <button onClick={props.handleSubmit}>
                    저장
                </button>
                <br />
                <div style={{maxWidth: "700px", margin:"2rem"}}>
                    <input 
                        onChange={onContentChange}
                        value={TitleValue} 
                        type="text" 
                        name="title"
                        placeholder="제목을 입력해주세요."
                    />
                    <hr></hr>
                    <textarea 
                        onChange={onSubmitArticle}
                        value={ContentValue} 
                        name="content"
                        placeholder="텍스트를 입력해주세요."
                    />
                </div>
                
            </form>
        </div>
    );
}

export default RegisterOrEdit;