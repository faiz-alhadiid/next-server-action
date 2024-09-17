'use client'

import { useEffect } from "react";

export default function SomeContainer(props: { cookieValue?: string }) {
  useEffect(() => {
    console.log("Loaded")
    localStorage.setItem("CookieVar", props.cookieValue || "")
  }, []);

  return <div>
    <h1>Sample Component</h1>
    <div>Cooke Value: {props.cookieValue}</div>
    <button onClick={() => {
      console.log(localStorage.getItem("CookieVar"))
    }}>Local Storage</button>
  </div>;
}
