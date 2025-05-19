import React from "react";
const Chemistry_03: React.FC<
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
        fillRule="evenodd"
        d="M22 9.5h-6.5v-2H22zm-10.5 0H2v-2h9.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 20.5v-18h2v17h16v2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.052 4.5h.95v-2h-7v2h.95v4.144c-1.603.871-2.7 2.545-2.7 4.481 0 2.85 2.37 5.125 5.25 5.125s5.25-2.275 5.25-5.125c0-1.936-1.098-3.61-2.7-4.48z"
      />
    </svg>
  );
};
export default Chemistry_03;
