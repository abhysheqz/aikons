import React from "react";
const Cash_01: React.FC<
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
        d="M5 20.5h14M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M22 7.5a4 4 0 0 1-4-4M2 7.5a4 4 0 0 0 4-4M22 13.5a4 4 0 0 0-4 4M2 13.5a4 4 0 0 1 4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 3.5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2"
      />
    </svg>
  );
};
export default Cash_01;
