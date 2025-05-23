import React from "react";
const AiChemistry_02: React.FC<
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
        d="M15 22H6.407a2.408 2.408 0 0 1-2.132-3.525L9.5 8.5V2h5v6.5l2 3.818M8 2h8M8 11.5h8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 15-.258.697c-.338.914-.507 1.371-.84 1.704-.334.334-.791.503-1.705.841L15 18.5l.697.258c.914.338 1.371.507 1.704.84.334.334.503.791.841 1.705L18.5 22l.258-.697c.338-.914.507-1.371.84-1.704.334-.334.79-.503 1.705-.841L22 18.5l-.697-.258c-.914-.338-1.371-.507-1.704-.84-.334-.334-.503-.791-.841-1.705z"
      />
    </svg>
  );
};
export default AiChemistry_02;
