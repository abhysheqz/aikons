import React from "react";
const Conference: React.FC<
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
        d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M22 7v10M2 7v10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.503 16.5H8.5a3.5 3.5 0 0 1 3.502-3.5 3.5 3.5 0 0 1 3.501 3.5M13.752 9.25a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0"
      />
    </svg>
  );
};
export default Conference;
