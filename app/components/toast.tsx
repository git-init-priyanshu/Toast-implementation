import { useEffect, useState } from "react";
import { toastType } from "../page";

export default function Toast({
  toast,
  setToastArr
}: {
  toast: toastType,
  setToastArr: React.Dispatch<React.SetStateAction<toastType[]>>
}) {
  const [pos, setPos] = useState(String((toast.toastId + 1) * 1.5 + (toast.toastId * 5)));
  useEffect(() => {
    setPos(String((toast.toastId + 1) * 1.5 + (toast.toastId * 5)));
  }, []);

  const removeToast = () => {
    setToastArr((prevArr: toastType[]) => prevArr.filter((currToast) => currToast.toastId !== toast.toastId));
  };

  useEffect(() => {
    setTimeout(() => {
      removeToast();
    }, 5000)
  }, [])
  return (
    <div className={`absolute right-10`} style={{ bottom: `${String(pos)}rem` }}>
      <div className={`relative w-40 h-20 bg-green-50 border-2 border-green-200 rounded-md p-4 text-green-600`}>
        <div className="absolute top-1 right-1 cursor-pointer" onClick={() => { removeToast() }}>X</div>
        {toast.msg}
      </div>
    </div>
  )
}
