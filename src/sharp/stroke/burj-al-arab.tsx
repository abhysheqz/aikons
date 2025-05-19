import React from "react";
const BurjAlArab: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 22h18M7 22V2M7 4c5.675.961 10 5.943 10 11.944 0 2.206-.584 4.274-1.605 6.056M5 9h12M7 13h4m-4 4h4"
      />
    </svg>
  );
};
export default BurjAlArab;
