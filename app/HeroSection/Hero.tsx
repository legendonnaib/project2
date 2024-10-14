import HeroStyles from "./Hero.module.css";
import React from "react";


const Hero = () => {
    return(
<div>
    <section className={HeroStyles.herosection}>
        <h1 className={HeroStyles.h1}> This is an Hero Section</h1>
        <p className={HeroStyles.p}><b> In Our Last Class, We learn about how to create Header, Hero, and Footer Section,<br/> later Sir Hamza alvi taught us about function, objects and <br/> debugging Errors in terminal.</b></p>
        </section>
    
</div>

);

}

export default Hero;