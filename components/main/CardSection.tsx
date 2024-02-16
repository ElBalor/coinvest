import React from "react";
import Card from "../sub/Card";
import Cards from "../sub/Cards";
import Card1 from "../sub/Card1";
import Card2 from "../sub/Card2";
import Card3 from "../sub/Card3";

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 items-center justify-between p-5">
      <Cards />
      <Card1 />
      <Card2 />
      <Card3 />
      {/* <Card
        image="/bronze.jpg"
        description="5000"
        title="Bronze"
        amount={100}
        tits="10,000"
        days="10days"
      />
      <Card
        image="/silver.jpg"
        description=""
        title="Silver"
        amount={30}
        tits="10,000"
        days="10days"
      />
      <Card
        image="/blackhood.jpg"
        description=""
        title=""
        amount={10}
        tits="10,000"
        days="10days"
      />
      <Card
        image="/blackhood.jpg"
        description="This iss a rangrover because of it's cause is ectra ordinary"
        title=""
        amount={23}
        tits="10,000"
        days="10days"
      />
      <Card
        image="/blackhood.jpg"
        description="This iss a rangrover because of it's cause is ectra ordinary"
        title=""
        amount={30}
        tits="10,000"
        days="10days"
      /> */}
    </div>
  );
};

export default CardSection;
