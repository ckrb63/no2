import React from "react";

function RegisterOrEdit(props) {
    return(
        <div>
            <form onSubmit>
                <br />
                <div style={{maxWidth: "700px", margin:"2rem"}}>
                    <label>Title:</label>
                    <input 
                        onChange={props.handleTitleChange}
                        value={props.titleValue} 
                        type="text" 
                        name="title"
                    />
                    <hr></hr>
                    <textarea 
                        onChange={props.handleContentChange}
                        value={props.contentValue} 
                        name="content"
                    />
                </div>
                <button onClick={props.handleSubmit}>
                    {props.updateRequest ? "수정" : "등록"}
                </button>
            </form>
        </div>
    );
}

export default RegisterOrEdit;