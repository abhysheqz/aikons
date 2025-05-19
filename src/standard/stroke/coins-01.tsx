import React from "react";
const Coins_01: React.FC<
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
        d="M15.5 13.5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2ZM8.5 6.5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.5 8.5c0 .923 1.67 1.709 4 2M2.5 12.5c0 .923 1.67 1.709 4 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.5 4.5v12c0 .87 1.67 1.725 4 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.5 11.5v8c0 1.105-2.686 2-6 2s-6-.895-6-2v-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.5 15.5c0 1.105-2.686 2-6 2s-6-.895-6-2"
      />
    </svg>
  );
};
export default Coins_01;
