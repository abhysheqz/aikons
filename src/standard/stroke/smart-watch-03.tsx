import React from "react";
const SmartWatch_03: React.FC<
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
        d="M17.5 19.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.4 9.248c-1.397-.713-2.4.339-2.4.339s-1.003-1.052-2.4-.339c-1.692.865-1.814 4.25 2.4 5.752 4.214-1.503 4.092-4.887 2.4-5.752M9 22h6M9 2h6"
      />
    </svg>
  );
};
export default SmartWatch_03;
