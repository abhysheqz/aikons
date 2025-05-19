import React from "react";
const NewTwitterRectangle: React.FC<
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
        d="M3 3h18v18H3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m7 17 4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.612-1.613L17 17h-2.778l-3.028-4.193"
      />
    </svg>
  );
};
export default NewTwitterRectangle;
