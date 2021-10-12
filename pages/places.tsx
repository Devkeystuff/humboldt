import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Places: NextPage = () => {

  return (
  <div>
    <Link href="places/1">Some info with id 1</Link>
    <br />
    <Link href="places/2">Some info with id 2</Link>
  </div>
  )};

export default Places;