import React, { useState } from "react";

import iconImg from "../assets/icon-list.svg";

const List = () => {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Product discovery and building what matters",
    },
    {
      id: 2,
      text: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      text: "And much more!",
    },
  ]);

  return (
    <div>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <div className="flex flex-row justify-start items-start gap-[1rem] mb-[0.62rem]">
            <img src={iconImg} alt="Verified Icon" />
            <p className="text-darkNavy text-[1rem] font-regular w-[18.12rem] sm:w-[21.18rem]">
              {item.text}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default List;
