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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 22H5.408a2.408 2.408 0 0 1-2.133-3.525L8.5 8.5V2h5v6.5l2 3.818M7 2h8M7.5 11.5h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m17.5 15-.258.697c-.338.914-.507 1.371-.84 1.704-.334.334-.791.503-1.705.841L14 18.5l.697.258c.914.338 1.371.507 1.704.84.334.334.503.791.841 1.705L17.5 22l.258-.697c.338-.914.507-1.371.84-1.704.334-.334.791-.503 1.705-.841L21 18.5l-.697-.258c-.914-.338-1.371-.507-1.704-.84-.334-.334-.503-.791-.841-1.705z"
      />
    </svg>
  );
};
export default AiChemistry_02;
