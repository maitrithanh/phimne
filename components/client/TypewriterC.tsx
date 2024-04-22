"use client";
import React from "react";
import Typewriter from "typewriter-effect";

interface TypewriterProps {
  text1: string;
  text2: string;
}

const TypewriterC: React.FC<TypewriterProps> = ({ text1, text2 }) => {
  return (
    <>
      <Typewriter
        options={{
          strings: [`${text1}`, `${text2}`],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default TypewriterC;
