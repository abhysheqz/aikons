import React from "react";
const MinusPlus_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M22 3.768 3.768 22 2 20.232 20.232 2zM15.75 15.75V13h2.5v2.75H21v2.5h-2.75V21h-2.5v-2.75H13v-2.5zM3 5.75h8v2.5H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlus_02;
