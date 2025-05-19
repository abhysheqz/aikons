import React from "react";
const Quran_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.011 19.104V6.162C3.84 3.3 4.98 2.221 6.891 2.007H20.98v13.999l-2 .01M4.01 19.104c0 1.654 1.322 2.9 2.974 2.9H18.98m-14.969-2.9c0-1.653 1.322-3.088 2.974-3.088H18.98m0 0v5.989m2.015 0H18.98"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.66 6.152-1.08-1.099a.1.1 0 0 0-.143 0l-1.112 1.13H9.758a.1.1 0 0 0-.1.102l.025 1.547-1.107 1.112a.1.1 0 0 0 .001.142l1.095 1.059.019 1.583a.1.1 0 0 0 .1.098h1.537l1.093 1.117a.1.1 0 0 0 .143 0l1.095-1.117h1.58a.1.1 0 0 0 .1-.1v-1.578l1.086-1.08a.1.1 0 0 0 0-.143l-1.116-1.103v-1.57a.1.1 0 0 0-.1-.1z"
      />
    </svg>
  );
};
export default Quran_02;
