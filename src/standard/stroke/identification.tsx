import React from "react";
const Identification: React.FC<
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
        d="M8.5 2.5h-4a2 2 0 0 0-2 2v4m13-6h4a2 2 0 0 1 2 2v4m-6 13h4a2 2 0 0 0 2-2v-4m-13 6h-4a2 2 0 0 1-2-2v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 17c1.838-2.595 6.119-2.737 8 0m-1.5-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default Identification;
