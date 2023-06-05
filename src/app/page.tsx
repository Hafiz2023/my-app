"use client";
import { Beau_Rivage } from "next/font/google";
import { Input } from "postcss";
import { useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const [radio, setRadioVal] = useState("");

  return (
    <main className="flex justify-center items-center flex-col ps-24">
      <h1 className="text-[36px] mb-6 mt-40 bg-blue-200 rounded-lg underline"> On Change Handle</h1>
      <input
        type="text"
        value={inputVal}
        placeholder="write some thing here"
        className="border text-[30px] justify-center bg-gray-100 rounded-lg"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <br />
      <label>
        <input
          type="radio"
          value="haan"
          name="abc"
          onChange={(e) => setRadioVal(e.target.value)}
        />{" "}
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="nahi"
          name="abc"
          onChange={(e) => setRadioVal(e.target.value)}
        />{" "}
        No
      </label>
      <br />
      <p className="text-[30px] text-blue-500 ">
        {inputVal} {radio}
      </p>
    </main>
  );
}
