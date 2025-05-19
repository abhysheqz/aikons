import React from "react";
const Blockchain_02: React.FC<
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
        d="m5 10 7-4 7 4M5 10v8l7 4M5 10l7 4m0 8 7-4v-8m-7 12v-8m7-4-7 4M22 20l-3-2M12 2v4M2 20l3-2"
      />
    </svg>
  );
};
export default Blockchain_02;
