import React from "react";
const InLove: React.FC<
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
        d="M12.5 2.012A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.863-.11-1.701-.315-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2M10 9.5H8.707c-.453 0-.887.18-1.207.5m6.5-.5h1.293c.453 0 .887.18 1.207.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.9 2.248c-1.397-.713-2.4.339-2.4.339s-1.003-1.052-2.4-.339c-1.692.865-1.814 4.25 2.4 5.752 4.214-1.503 4.092-4.887 2.4-5.752Z"
      />
    </svg>
  );
};
export default InLove;
