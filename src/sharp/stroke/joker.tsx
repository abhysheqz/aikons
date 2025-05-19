import React from "react";
const Joker: React.FC<
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
      <circle
        cx={4}
        cy={5}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={20}
        cy={7}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.252 18c-.967-4 .745-10.575 6.932-12m.316 2c-1.5.5-2.664 1.91-1.85 3.426C18.007 13.954 19 14 19 17c-5.672 1.209-8.816 1.452-14.033 0-3.524-5.5 4.023-6-.008-10M10 8c0-2-2.517-3-3.621-3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 20c5.963 1.452 9.518 1.209 16 0"
      />
    </svg>
  );
};
export default Joker;
