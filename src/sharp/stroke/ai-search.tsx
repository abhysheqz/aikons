import React from "react";
const AiSearch: React.FC<
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
        d="M17.5 17.5 22 22M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M7.294 12.195h3.633m0 0h.078m-.078 0-.67-1.709-1.179-2.898-1.194 2.898-1.66 4.256m4.703-2.548 1 2.548m2.562-7.502v7.512"
      />
    </svg>
  );
};
export default AiSearch;
