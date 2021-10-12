import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import axios from 'axios';

export default function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    
    
    useEffect(() => {
        if (localStorage.getItem("user")){
            history.push("/")
        }
        
    }, [])


    const submitHandle = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/login",
                {
                    "email": email,
                    "password": password
                }
            
        )
        .then((res)=>{
            console.log(res)
            localStorage.setItem("user",JSON.stringify(res.data.user))
            localStorage.setItem("access_token",JSON.stringify(res.data.accessToken))
            window.location.reload(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return (
            <Form onSubmit={submitHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Nhập Email"  onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lưu tài khoản"  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng nhập
                </Button>
            </Form>
    )
}

