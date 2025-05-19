import React from "react";
const Corporate: React.FC<
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
        d="M1.25 2.227c0-.54.43-.977.958-.977h9.584c.529 0 .958.438.958.977v19.546c0 .54-.43.977-.958.977H2.208a.97.97 0 0 1-.958-.977zm1.917.978v17.59h7.666V3.206z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 .75-.75zm-3 4h-4v1.5h4zm0 4h-4v1.5h4zM5 5h4v2H5zm0 4h4v2H5zm0 4h4v2H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Corporate;
