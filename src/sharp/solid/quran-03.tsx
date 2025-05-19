import React from "react";
const Quran_03: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.002 1.25A3.75 3.75 0 0 0 3.252 5l-.004 14c0 2.07 1.766 3.75 3.944 3.75H21.75v-1.875h-1.737v-3.75h1.736l.003-15.875zm.19 15.875h10.85v3.75H7.191c-1.088 0-1.971-.84-1.971-1.875v-.001c0-1.035.883-1.874 1.972-1.874m4.392-10.268a2.23 2.23 0 1 0 3.062 3.062l1.713 1.031a4.23 4.23 0 1 1-5.807-5.807zm1.485.578a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_03;
