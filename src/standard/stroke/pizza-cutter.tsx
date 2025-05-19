import React from "react";
const PizzaCutter: React.FC<
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
        strokeWidth={2}
        d="M18 7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.828 9.828a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656ZM14.002 8.5 11 11m5.504-.5L13 13.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 14.522 10 10l-7.07 6.122a2.85 2.85 0 0 0 .007 4.218c1.492 1.341 3.368.415 4.563-.794v-1.037c0-.298.132-.58.36-.772l2.64-2.21c2.5.502 3.5-1.005 3.5-1.005"
      />
    </svg>
  );
};
export default PizzaCutter;
