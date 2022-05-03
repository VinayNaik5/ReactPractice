import React from "react";
import Card from "./Card";
import cabin from "./assets/img/portfolio/cabin.png";
import cake from "./assets/img/portfolio/cake.png";
import circus from "./assets/img/portfolio/circus.png";
import game from "./assets/img/portfolio/game.png";
import safe from "./assets/img/portfolio/safe.png";
import submarine from "./assets/img/portfolio/submarine.png";

const Portfolio = () =>{
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <Card img={cabin}/>
                    {/* <!-- Portfolio Item 2--> */}
                    <Card img={cake}/>
                    {/* <!-- Portfolio Item 3--> */}
                    <Card img={circus}/>
                    {/* <!-- Portfolio Item 4--> */}
                    <Card img={game}/>
                    {/* <!-- Portfolio Item 5--> */}
                    <Card img={safe}/>
                    {/* <!-- Portfolio Item 6--> */}
                    <Card img={submarine}/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;