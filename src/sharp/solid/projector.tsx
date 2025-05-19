import React from "react";
const Projector: React.FC<
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
        d="M15 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 4A.75.75 0 0 1 2 3.25h20a.75.75 0 0 1 .75.75v7.25h-3.059a4.751 4.751 0 0 0-9.382 0H1.25zm18.441 8.75h3.059V20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-7.25h9.059a4.751 4.751 0 0 0 9.382 0M7.008 15H5v2h2.008z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Projector;
