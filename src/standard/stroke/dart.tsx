import React from "react";
const Dart: React.FC<
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
        d="M19.5 4.5 22 2M2 18.5l4.5-1-1 4.5H2zM14 6l4 4M7.5 16.5l11.053-6.599a3.216 3.216 0 1 0-4.454-4.454zM6.5 17.5l1-1"
      />
    </svg>
  );
};
export default Dart;
