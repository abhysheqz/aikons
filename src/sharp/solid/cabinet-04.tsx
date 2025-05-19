import React from "react";
const Cabinet_04: React.FC<
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
        d="m3.03 21.765 1-4 1.94.485-1 4zm16 .485-1-4 1.94-.485 1 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 7.75v11.5H2a.75.75 0 0 1-.75-.75v-10A.75.75 0 0 1 2 7.75zm7.75 0h-6.25v11.5H22a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.75-.75m-16 5h4v-1.5H6zm0 3h4v-1.5H6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 1.75h7.5v7.5H4zm1.875 1.875v3.75h3.75v-3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cabinet_04;
