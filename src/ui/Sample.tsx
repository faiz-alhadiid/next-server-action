'use client'

import { useEffect } from "react";

export default function Sample(props: {cookieValue?: string}){
  useEffect(() => console.log("Loaded"), []);
  return <div>
    <h1>Sample Component</h1>
    <div>Cooke Value: { props.cookieValue }</div>
  </div>;
}
