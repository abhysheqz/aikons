import React from "react";
const Twitter: React.FC<
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
        d="M12.114 8.989c-3.985.33-7.597-2.836-8.694-4.836-.005-.008-.016-.006-.018.003-1.205 4.542.106 9.578 3.054 12.216-.196.23-1.726 2.114-4.446 2.13-.01.001-.014.015-.005.02 7.5 4.328 18.001-1.387 18.001-10.133l1.985-3.874a.01.01 0 0 0-.01-.014l-3.338.514c-4.107-2.99-7.099 1.319-6.53 3.974Z"
      />
    </svg>
  );
};
export default Twitter;
