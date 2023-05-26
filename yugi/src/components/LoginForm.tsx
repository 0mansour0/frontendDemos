import { Container } from './styled/container.styled';
import { Main } from './styled/main.styled';
import { Input } from './reusable/Input';
import { Button } from './reusable/Button';
import { useEffect } from 'react';
import axios from 'axios';
import { StyledLabel } from './styled/Label.styled';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { DevTool } from "@hookform/devtools";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormValues = {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
}).required();

export const Login = () => {

    const { watch, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/dashboard')
        }
    });

    const login = async () => {
        await axios.post('http://127.0.0.1:3333/login', watch())
            .then(function (response) {
                localStorage.setItem('token', response.data.data.refreshToken)
                navigate('/dashboard')
            })
            .catch(function (error) {
                alert("Email or Password Incorrect")
                console.log(error)
            });
    }

    const handelClick = () => {
        if (!errors)
            login();
    }

    const onSubmit: SubmitHandler<FormValues> = () => {
        login()
    }

    return (
        <Main bg="bg">
            <Container bg="white" onSubmit={handleSubmit(onSubmit)}>
                <StyledLabel color="secondary" mb="2rem">Login</StyledLabel>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required", pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }}
                    render={({ field: { ref, ...others } }) => <Input type="text" placeholder="email" bg="white" m="1rem" {...others} />}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "password is required", minLength: 8 }}
                    render={({ field: { ref, ...others } }) => <Input type="password" placeholder="password" bg="white" m="1rem" {...others} />}
                />
                <Button text="Login" handelClick={handelClick} mt="2rem" color="bg" bg="primary" />
                <DevTool control={control} />
            </Container>
        </Main>
    )
}
