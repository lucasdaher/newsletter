import React from "react";

import { useEffect } from "react";

import Form from "../components/Form";
import List from "../components/List";
import Image from "../components/Image";
import Title from "../components/Title";
import Desc from "../components/Desc";

const App = () => {
  useEffect(() => {
    document.body.className =
      "bg-white flex flex-col justify-start items-center sm:px-[1.5rem] sm:py-[9.31rem] sm:bg-darkNavy sm:justify-center";
  }, []);

  return (
    <div className="flex flex-col-reverse w-screen justify-center items-start lg:w-[58rem] sm:bg-white sm:p-[1.5rem] sm:w-full sm:h-auto sm:rounded-[2.25rem] sm:flex-col-reverse lg:flex-row transition-all duration-200">
      {/* <div className="flex flex-col-reverse sm:flex-row w-[58rem] h-auto bg-white p-[1.5rem] rounded-[2.25rem] transition-all duration-200"> */}
      <main className="p-2 w-full sm:p-2 md:p-[2.5rem] flex flex-col gap-[1.5rem]">
        <Title text="Stay updated!" />
        <Desc text="Join 60,000+ product managers receiving monthly updates on:" />
        <List />
        <Form />
      </main>

      <aside>
        <Image />
      </aside>
    </div>
  );
};

export default App;
