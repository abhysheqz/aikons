import React from "react";
const Notion_01: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.572 13.38-5.028-6.35H8.475m7.097 6.35v3.607h-2.06l-5.037-6.94m7.097 3.334V7.03m-7.097 3.016V7.03m0 3.017v6.94M6.993 7.03h1.482m0 9.957H7.02m1.455 0h1.522m5.575-9.957h1.409m-1.409 0h-1.554"
      />
    </svg>
  );
};
export default Notion_01;
