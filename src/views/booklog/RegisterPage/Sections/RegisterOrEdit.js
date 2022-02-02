import React from "react";

function RegisterOrEdit(props) {
    return(
        <div>
            <form onSubmit>
            <button onClick={props.handleSubmit}>
                    {props.updateRequest ? "수정" : "저장"}
                </button>
                <br />
                <div style={{maxWidth: "700px", margin:"2rem"}}>
                    <input 
                        onChange={props.handleTitleChange}
                        value={props.titleValue} 
                        type="text" 
                        name="title"
                        placeholder="제목을 입력해주세요."
                    />
                    <hr></hr>
                    <textarea 
                        onChange={props.handleContentChange}
                        value={props.contentValue} 
                        name="content"
                        placeholder="텍스트를 입력해주세요."
                    />
                </div>
                
            </form>
        </div>
    );
}

export default RegisterOrEdit;