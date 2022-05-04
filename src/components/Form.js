import React, { useContext } from "react";
import { Wrapper } from "./Wrapper";
export default function Form() {
    const context = useContext(Wrapper);
    return (
        <form>
            <label>Your Name: </label>
            <input type={'text'}  onChange={(e) => context.setName(e.target.value)}/>
        </form>
    );
}