import React from "react";
const ThreeFinger_01: React.FC<
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
        d="M11.874 11.499a.375.375 0 0 1-.75 0V5.135c0-.638-.471-1.125-1.077-1.125A.4.4 0 0 1 9.96 4 1.5 1.5 0 0 0 8.5 5.499v8l-2.132-2.081a1.736 1.736 0 0 0-2.487.234 1.74 1.74 0 0 0 .008 2.183L8.5 20.5v1.242a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V20.5l1.123-1.404a4 4 0 0 0 .877-2.5V12.5a2 2 0 0 0-2-2h-.625v2a.375.375 0 0 1-.75 0V5.135a1.125 1.125 0 0 0-2.25 0v6.364a.375.375 0 0 1-.75 0V3.135a1.125 1.125 0 0 0-2.25 0z"
      />
    </svg>
  );
};
export default ThreeFinger_01;
