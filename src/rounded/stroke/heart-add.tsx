import React from "react";
const HeartAdd: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.59 19.968c-.95.71-2.23.71-3.18 0C7.59 17.858 2 13.035 2 8.694 2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5 2-2 3.5-2.5 5-2.5 2.895 0 5 2.326 5 5.194 0 1.089-.351 2.207-.922 3.306M14 16h3.5m0 0H21m-3.5 0v-3.5m0 3.5v3.5"
      />
    </svg>
  );
};
export default HeartAdd;
