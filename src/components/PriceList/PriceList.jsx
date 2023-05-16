import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-12">
      <h1 className="text-5xl text-purple-950 bg-purple-300 font-bold text-center p-4 mt-4">
        Awesome Affordable Price
      </h1>
      {/* 3 price option in js array of object. give meaningful name of the price options and features name also add a few more features. not this rather give a proper name of each price like basic. For my gym give me three price options in js objects inside an array. add id and give a sorter features name. give it in json formate */}

      <div className="grid md:grid-cols-3 gap-4">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>

    </div>
  );
};

export default PriceList;
