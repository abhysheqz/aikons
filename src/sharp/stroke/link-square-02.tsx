import React from "react";
const LinkSquare_02: React.FC<
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
        d="M12 3H3v18h18v-9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.988 13.002 9.596-9.586M21 8.992V3h-5.99"
      />
    </svg>
  );
};
export default LinkSquare_02;
