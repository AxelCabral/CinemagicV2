import "../../index.css";
import React from "react";
import { useForm } from "react-hook-form";

export function User() {
    const {register, handleSubmit} =useForm();
    
    const onSubmit = (e: any) => {
       console.log(e);
        }

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Registro">
                <div className="Input">
                <input className="field" type="text" placeholder="text" {...register("firstName")}/>
            </div>
            <div className="Registro">
                <input className="field" type="text" placeholder="text" {...register("lastName")}/>
            </div>
            <div className="Registro">
                <input type="Email" placeholder="Email" {...register("email")}/>
            </div>
            <div className="Registro"></div>
                <input type="password" placeholder="password" {...register("password")}/>
            </div>
        </form>
        </div>
    </div>
    )
}