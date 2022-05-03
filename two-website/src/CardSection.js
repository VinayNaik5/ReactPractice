import React from "react";
import Card from "./Card";

const CardSection = () =>{
    return (
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="MyappwithClomp1" btnText="clikme button1" imgUrl= "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"/>
          </div>
          <div className="col-4">
          <Card title="MyappwithClomp2" btnText="clikme button2" imgUrl="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"/>
          </div>
          <div className="col-4">
          <Card title="MyappwithClomp3" btnText="clikme button3"/>
          </div>
        </div>
      </div>
    </section>
    );
}

export default CardSection;