import React from "react";
const GitCompare: React.FC<
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
        d="m11.586 17.75-.793-.793 1.414-1.414 2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5-1.414-1.414.793-.793H5a1 1 0 0 1-1-1V7.25h2v10.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.25a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.414 6.25.793.793-1.414 1.414-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5 1.414 1.414-.793.793H19a1 1 0 0 1 1 1v11.5h-2V6.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.25 18.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default GitCompare;
