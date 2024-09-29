"use client";

import { useRouter } from "next/navigation";

const Button = ({ children }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/`)}
      className="mt-6 rounded px-6 py-3 bg-blue-600 font-semibold text-white"
    >
      {children}
    </button>
  );
};
export default Button;
