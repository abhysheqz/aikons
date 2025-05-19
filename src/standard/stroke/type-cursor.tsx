import React from "react";
const TypeCursor: React.FC<
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
        d="M5.502 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.502m7 8h7.499a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-7.499M7.002 3h2m2 0h-2m0 0v18m0 0h-2m2 0h2"
      />
    </svg>
  );
};
export default TypeCursor;
