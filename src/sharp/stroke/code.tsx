import React from "react";
const Code: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.973 12.001h.01m3.998 0h.009m3.998 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.004 3.998h2.439a.1.1 0 0 1 .1.1V10l1.44 1.958a.1.1 0 0 1-.001.119l-1.439 1.92v5.9a.1.1 0 0 1-.1.1h-2.455M5.996 4.001H3.557a.1.1 0 0 0-.1.1v5.903l-1.44 1.958a.1.1 0 0 0 .001.119l1.44 1.92-.001 5.9a.1.1 0 0 0 .1.1h2.455"
      />
    </svg>
  );
};
export default Code;
