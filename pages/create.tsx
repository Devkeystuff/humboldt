import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Map } from "../components/Map";
import { useState } from "react";

const Create: NextPage = () => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <div>
      <Map isSelect={isSelect} />
      <button onClick={() => setIsSelect(!isSelect)}>Select</button>
    </div>
  );
};

export default Create;
