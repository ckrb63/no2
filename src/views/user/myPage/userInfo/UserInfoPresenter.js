import React, {useState, useEffect} from 'react';
import {checkId, checkEmail, checkNickname, checkPassword, checkNameLength, checkPhoneNumber} from "../../validCheck/ValidCheck";


const EditUserForm = (props) => {
    // useEffect(() => {
    //     setUser(props.currentUser)
    // }, [props])
    
    const [user, setUser] = useState(props.currentUser);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }
    
    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.password && user.email && user.nickname && user.phoneNumber) props.updateUser(user);
    }

    const nameBlurHandler = () => {
        checkNameLength(user.name);
    };
    const emailBlurHandler = () => {}
    
    
    return (
        <form>
            <label>이름</label>
            <input className="u-full-width" type="text" value={props.name} name="name" onChange={props.nameChange} onBlur={props.checkNameLength}/>
            <label>비밀번호</label>
            <input className="u-full-width" type="text" value={props.password} name="password" onChange={props.passwordChange} onBlur={props.checkPassword}/>
            <label>비밀번호확인</label>
            <input className="u-full-width" type="text" value={props.passwordConfirm} name="password" onChange={props.passwordConfirmChange}/>
            <label>이메일</label>
            <input className="u-full-width" type="text" value={props.email} name="email" onChange={props.emailChange} onBlur={props.checkEmail}/>
            {/* <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} onBlur={props.checkEmail}/> */}
            <button onClick={props.checkId}>중복확인</button>
            <label>닉네임</label>
            <input className="u-full-width" type="text" value={props.nickname} name="nickname" onChange={props.nicknameChange} />
            <button type="submit" onClick={props.checkNickname}>중복확인</button>
            <label>핸드폰번호</label>
            <input className="u-full-width" type="text" value={props.phoneNumber} name="phoneNumber" onChange={props.phoneChange}/>
            {/* <input className="u-full-width" type="text" value={user.phoneNumber} name="phoneNumber" onChange={handleChange} onBlur={props.checkPhoneNumber}/> */}
            <button className="button-primary" type="submit" onClick={handleSubmit} >수정하기</button>
            <button type="submit" onClick={() => props.setEditing(false)} >취소하기</button>
        </form>
    )
}

    const UserTable = (props) => {
        return (
            <form>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, password, email, nickname, phoneNumber} = user;
                        return (
                            <div key={id}>
                                <label>이름</label>
                                <p>{name}</p>
                                <label>비밀번호</label>
                                <p>{password}</p>
                                <label>이메일</label>
                                <p>{email}</p>
                                <label>닉네임</label>
                                <p>{nickname}</p>
                                <label>핸드폰번호</label>
                                <p>{phoneNumber}</p>    
                                <button onClick={() => props.editUser(id, user)}>수정하기</button>
                                <button onClick={() => props.deleteUser(id)}>탈퇴하기</button>
                                </div>
                            )
                        })
                    ) : (
                        <tr>
                            {/* <td colSpan={4}>가입된 회원이 아닙니다.</td> */}
                        </tr>
                    )   
                    }
            </form>
        )
    }

    const UserExpPoint = (props) => {
        return (
            <div>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, exp, point} = user;
                        return (
                            <div key={id}>
                                <p>{exp} {point}</p>
                                </div>
                            )
                        })
                    ) : (
                        <tr>
                        </tr>
                    )   
                    }
            </div>
        )
    }
    

export {EditUserForm, UserTable, UserExpPoint};