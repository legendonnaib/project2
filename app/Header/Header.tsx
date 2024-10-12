import Headerstyles from "./header.module.css"

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
const  Header = () => {
    return (
        <div>
            <header className={Headerstyles.h1}>
            <h1>This is an Header</h1>
            </header>

        </div>
    )
}

export default Header;