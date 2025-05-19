import React from "react";
const Notebook: React.FC<
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
        d="M4 1.25a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zm5.5 9.25h8v-2h-8zm0 5h4v-2h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5h4v2h-4zm0 6h4v2h-4zm0 6h4v2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notebook;
