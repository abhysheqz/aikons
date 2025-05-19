import React from "react";
const GoldIngots: React.FC<
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
        d="M2 20h12l-2.5-8h-7zM17.5 9.5l-2-5.5h-7l-2 5.5M16.5 20H22l-2.5-8H14"
      />
    </svg>
  );
};
export default GoldIngots;
