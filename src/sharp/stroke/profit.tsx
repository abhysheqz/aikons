import React from "react";
const Profit: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM15 18c-2 0-3 1.5-3 1.5s1 1.5 3 1.5 3-1.5 3-1.5-1-1.5-3-1.5ZM9 18c-2 0-3 1.5-3 1.5S7 21 9 21s3-1.5 3-1.5S11 18 9 18ZM12 22v-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.438 11.667V6.333m1.562 0V5m0 8v-1.333M10.438 9h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"
      />
    </svg>
  );
};
export default Profit;
