import React from "react";
const AiSearch_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m16 16.5 4 4M18 11.5a7 7 0 1 1-7-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m15.5 3.5.258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L19 7l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705l-.258.697-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L12 7l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
    </svg>
  );
};
export default AiSearch_02;
