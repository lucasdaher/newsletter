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
      "bg-white flex flex-col justify-start items-center w-auto px-[1.5rem] py-[9.31rem] sm:bg-dark-navy sm:justify-center";
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-row w-container h-auto bg-white p-container rounded-container transition-all duration-200">
      <main className="p-formContainer flex flex-col gap-1">
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
