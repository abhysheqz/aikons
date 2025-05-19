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
        d="M6.004 1.25A2.75 2.75 0 0 0 3.254 4v16a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75V4a2.75 2.75 0 0 0-2.75-2.75zM9 8.5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 6a1 1 0 0 1 1-1H5a1 1 0 0 1 0 2H2.5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1H5a1 1 0 1 1 0 2H2.5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1H5a1 1 0 1 1 0 2H2.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notebook;
