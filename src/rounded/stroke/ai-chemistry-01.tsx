import React from "react";
const AiChemistry_01: React.FC<
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
        d="M13.5 18a4 4 0 0 1-8 0V2h8v8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 10.5-.258.697c-.338.914-.507 1.371-.84 1.704-.334.334-.791.503-1.705.841L12.5 14l.697.258c.914.338 1.371.507 1.704.84.334.334.503.791.841 1.705L16 17.5l.258-.697c.338-.914.507-1.371.84-1.704.334-.334.791-.503 1.705-.841L19.5 14l-.697-.258c-.914-.338-1.371-.507-1.704-.84-.334-.334-.503-.791-.841-1.705z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 2h10M5.5 8h8"
      />
    </svg>
  );
};
export default AiChemistry_01;
