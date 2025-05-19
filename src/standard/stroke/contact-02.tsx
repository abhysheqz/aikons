import React from "react";
const Contact_02: React.FC<
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
        d="M3.75 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 6H2m3 6H2m3 6H2M8.75 12l2-2-1.5-3-.914.914c-.375.375-.597.885-.546 1.413a8.5 8.5 0 0 0 7.633 7.633c.527.051 1.038-.17 1.413-.546l.914-.914-3-1.5-2 2"
      />
    </svg>
  );
};
export default Contact_02;
