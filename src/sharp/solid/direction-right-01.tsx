import React from "react";
const DirectionRight_01: React.FC<
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
        fill="currentColor"
        d="M9.498 19.5v-7.252l6.357-.01 3.643-4.25-3.643-4.25-6.357.01V2.5h-2v17h-3v2h8v-2z"
      />
    </svg>
  );
};
export default DirectionRight_01;
