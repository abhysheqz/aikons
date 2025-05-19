import React from "react";
const Film_01: React.FC<
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
        d="M2 7h20M2 17h20M12 17V7M21.5 21.5v-19h-19v19zM8 7V3m8 4V3M8 21v-4m8 4v-4"
      />
    </svg>
  );
};
export default Film_01;
