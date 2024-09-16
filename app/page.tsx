"use client"

import { useState } from "react";
import Toast from "./components/toast";

export type toastType = { toastId: number, msg: string };

export default function Home() {
  const [toastArr, setToastArr] = useState<toastType[]>([]);
  const [msg, setMsg] = useState<string>("");

  return (
    <>
      {toastArr.map((toast, i) => {
        return <Toast key={i} toast={toast} setToastArr={setToastArr} />
      })}
      <div className="flex w-full justify-center items-center h-dvh">
        <input
          className="h-10 rounded-md mr-4 text-black px-2 outline-none"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className="bg-white px-8 h-10 text-black rounded-md"
          onClick={() => setToastArr([...toastArr, { toastId: toastArr.length , msg }])}
        >
          Click
        </button>
      </div>
    </>
  );
}
