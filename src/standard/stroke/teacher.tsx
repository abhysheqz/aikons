import React from "react";
const Teacher: React.FC<
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
        d="M3 3h16a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-8.5M11 7h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12.5 12.5H6.99M3 21v-4m0 0v-3.5a1 1 0 0 1 1-1h2.99M3 17h4m0 0-.01-4.5M7 17v4"
      />
    </svg>
  );
};
export default Teacher;
