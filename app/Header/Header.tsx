import Headerstyles from "./header.module.css";
import React from "react";

/*const printTable = (attr: number)=>{
    for(let i=0; i< 10;i++){


    }
}
const  Header = (props: any) => {
    const obj = {
        name: "hamza",
        age: 18
    }
    obj.age;
console.log(props.abc)
*/


const Header = () => {
    return (
        <header className={Headerstyles.header}>
            <h1 className={Headerstyles.headerTitle}>This is an Header Section</h1>
        </header>
    );
};

export default Header;