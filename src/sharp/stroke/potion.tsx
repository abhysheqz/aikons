import React from "react";
const Potion: React.FC<
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
        d="M19 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 15a2.5 2.5 0 0 1-5 0M16.54 6.032 18 3.486 12.46 2v2.974m4.08 1.058-4.08-1.058m4.08 1.058 1.46.379m-1.46-.379L15.66 9M12.46 4.974 11 4.594m1.46.38-.942 3.023M5 15h14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.008 12h-.009"
      />
    </svg>
  );
};
export default Potion;
