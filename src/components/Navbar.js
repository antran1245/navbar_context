import React, { useContext } from "react";
import { Wrapper } from "./Wrapper";
export default function Navbar() {
    const context = useContext(Wrapper)
    return(
        <div style={navbar}>
            <p>Hi {context.name}</p>
        </div>
    );
}

const navbar = {
    backgroundColor: 'lightblue',
    width: '60%',
    margin: '0 auto',
    padding: '6px',
    borderRadius: '10px',
    textAlign: 'right'
}