import React from "react";
const Scheme: React.FC<
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
        d="M16.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM1.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM1.25 2A.75.75 0 0 1 2 1.25h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H2A.75.75 0 0 1 1.25 7zM16.25 2a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM8.75 8.75h6.5v6.5h-6.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 5.5h-7v-2h7zM5.5 7.045V14h-2V7.045zM18.5 17v-7h2v7zm-3.293-3.207 1 1-1.414 1.414-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Scheme;
