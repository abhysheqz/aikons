import React from "react";
const ChinaTemple: React.FC<
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
        d="M22 12c-2.4 0-4.333-1.333-5-2H7c-.667.667-2.6 2-5 2 .57 1.14 1.646 2 3 2h14c1.354 0 2.43-.86 3-2M16 6H8c-1.354 0-2.43-.86-3-2 1.5 0 3.496-.56 4.678-1.662.217-.202.493-.338.789-.338h3.066c.296 0 .572.136.789.338C15.504 3.439 17.5 4 19 4c-.57 1.14-1.646 2-3 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 10V6M7 10V6M19 22v-8M5 22v-8M3 22h18M10 22v-3a2 2 0 1 1 4 0v3"
      />
    </svg>
  );
};
export default ChinaTemple;
