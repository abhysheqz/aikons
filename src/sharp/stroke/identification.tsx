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
        strokeWidth={1.5}
        d="M9.145 2.5H2.501v6.644M14.857 2.5H21.5v6.644M14.857 21.5H21.5v-6.644M9.145 21.5H2.501v-6.644M8 17c1.838-2.595 6.119-2.737 8 0m-1.5-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default Identification;
