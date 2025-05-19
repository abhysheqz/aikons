import React from "react";
const Touchpad_04: React.FC<
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
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.546 13.858v-1.633a1.2 1.2 0 0 0-.076-.425m2.803 2.528v-1.253a1.2 1.2 0 0 0-.076-.425m-5.379-1.7v2.058m0-2.058h1.404c.576 0 1.066.355 1.248.85m-2.652-.85V6.342c0-.741-.61-1.342-1.364-1.342-.753 0-1.363.6-1.363 1.342v8.914L9.618 13.8a1.547 1.547 0 0 0-2.282.125 1.5 1.5 0 0 0-.03 1.854L11.092 22h8.262C20.815 22 22 20.858 22 19.45v-5.525c0-.704-.593-1.275-1.323-1.275h-1.48m-2.727-.85h1.48c.576 0 1.066.355 1.247.85"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10.01V2H2v16h3"
      />
    </svg>
  );
};
export default Touchpad_04;
