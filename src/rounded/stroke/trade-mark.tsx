import React from "react";
const TradeMark: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.994 9.476H8.51m0 0h2.484m-2.484 0v6.02m4.481-.01v-6.01c.336-.107 2.51 2.001 2.51 2.001s2.172-2.108 2.508-2.001v6.01"
      />
    </svg>
  );
};
export default TradeMark;
