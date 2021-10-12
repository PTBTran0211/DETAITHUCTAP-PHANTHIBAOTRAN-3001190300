import React,{useState} from 'react'
import {Form,Button } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function SignUpForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const history = useHistory();

    const submitHandle = async e =>{
        e.preventDefault();
        if (password === confirmPassword){
            await axios.post("http://localhost:8000/signup",
                {
                    "email": email,
                    "password": password
                }
            )
            .then((res)=>{
                console.log(res)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                localStorage.setItem("access-token",JSON.stringify(res.data.accessToken))
                window.location.reload(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else{
            console.log("SAi r")
        }
        
    }
    return (
        <>
            <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="username" placeholder="Nhập Email"  onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Nhập mật khẩu"  onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Xác Nhận Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Xác nhận mật khẩu"  onChange={(e) => setConfirmPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Đăng Ký
            </Button>
            </Form>
        </>
        
    )
}
