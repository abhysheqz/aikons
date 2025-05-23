import React from "react";
const Contact_01: React.FC<
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
        d="M3.5 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 17h-8c0-2.148 1.79-3.889 4-3.889s4 1.741 4 3.889M14.5 8.944c0 1.074-.896 1.945-2 1.945s-2-.87-2-1.945c0-1.073.895-1.944 2-1.944s2 .87 2 1.944M5 6H2m3 6H2m3 6H2"
      />
    </svg>
  );
};
export default Contact_01;
