import React from "react";
const Badminton: React.FC<
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
        d="M2.391 21.639a1.278 1.278 0 0 1 .149-1.964l3.631-2.578a.526.526 0 0 1 .683.064.52.52 0 0 1 .05.662L4.34 21.456a1.29 1.29 0 0 1-1.948.183ZM11.5 12.5 7 17M19.43 12.577c-1.896 1.896-5.561 1.976-7.772-.235-2.21-2.211-2.13-5.876-.235-7.771 2.489-2.49 7.175-3.59 9.385-1.38 2.211 2.212 1.11 6.897-1.379 9.386Z"
      />
    </svg>
  );
};
export default Badminton;
