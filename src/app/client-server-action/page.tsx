'use client'

import { useEffect, useState } from 'react';

import { getCookie } from '@/app/actions/cookie';
import { random } from '@/app/actions/action';

export default function Page() {
  const [ cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    // NextJS magic, getCookie will be called as server action and will be converted into RPC call
    getCookie("CookieVar").then(x => setCookieValue(x?.value || ""));
  }, []);

  return <div>
    <div>Cooke Value: { cookieValue }</div>
    <button onClick={async () => {
      const val = await random(); // NextJS magic
      console.log("In client "+val);
    }}>Click Me</button>
  </div>;
}
