import React from "react";
const Anonymous: React.FC<
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
        d="M19.621 10.766c1.038.304 1.988.67 2.826 1.089a1 1 0 0 1-.894 1.789c-2.283-1.141-5.69-1.895-9.553-1.895-3.862 0-7.27.754-9.553 1.895a1 1 0 1 1-.894-1.79 17 17 0 0 1 2.827-1.088l.895-6.424c.295-2.115 2.813-3.052 4.46-1.733l.032.027c.759.68 1.521.974 2.234.974.712 0 1.474-.294 2.234-.974l.031-.027c1.647-1.32 4.166-.382 4.46 1.733zM7 15.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 0 1 7.465-2h3.07a4 4 0 1 1-.535 2h-2a4 4 0 1 1-8 0m14-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Anonymous;
