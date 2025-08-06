'use client'

import { FC } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props{}
const Page:FC<Props>=(props)=> {
  return (
    <div><Heading title="ELearn" description="ELearn is a platform for students to learn and get help from teachers" keywords="Programming,MERN,React,Machine learng" />
    <Header/></div>
  );
}

export default Page;