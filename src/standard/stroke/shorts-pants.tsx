import React from "react";
const ShortsPants: React.FC<
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
        d="m11 15-.861 6.027a1 1 0 0 1-1.114.851l-6.033-.754a1 1 0 0 1-.868-1.116L4 5V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2l1.876 15.008a1 1 0 0 1-.868 1.116l-6.033.754a1 1 0 0 1-1.114-.85L13 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 13.5.914.914a2 2 0 0 0 1.414.586h2.344a2 2 0 0 0 1.414-.586l.914-.914M4 5h16M3.5 11S7 11 7 5M17 5c0 6 3.5 6 3.5 6"
      />
    </svg>
  );
};
export default ShortsPants;
