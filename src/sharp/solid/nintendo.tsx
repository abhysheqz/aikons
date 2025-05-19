import React from "react";
const Nintendo: React.FC<
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
        d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm5.5 14.25h10.5V5.25H6.75zm14.004-2.5h-1.51v-1.5h1.51zm-17.51-7h1.51v-1.5h-1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Nintendo;
