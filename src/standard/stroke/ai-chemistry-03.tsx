import React from "react";
const AiChemistry_03: React.FC<
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
        d="M6.5 2h8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 15-.258.697c-.338.914-.507 1.371-.84 1.704-.334.334-.791.503-1.705.841L14 18.5l.697.258c.914.338 1.371.507 1.704.84.334.334.503.791.841 1.705L17.5 22l.258-.697c.338-.914.507-1.371.84-1.704.334-.334.791-.503 1.705-.841L21 18.5l-.697-.258c-.914-.338-1.371-.507-1.704-.84-.334-.334-.503-.791-.841-1.705z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 11.802A7.52 7.52 0 0 0 13 7.427V2H8v5.427a7.5 7.5 0 1 0 5.5 13.95"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 11h13"
      />
    </svg>
  );
};
export default AiChemistry_03;
