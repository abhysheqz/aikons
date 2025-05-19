import React from "react";
const ModernTvK_4: React.FC<
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
        d="M2 1.75a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-16a.75.75 0 0 0-.75-.75zm5.25 8v-3h-1.5v3.75c0 .414.336.75.75.75h3.25v3h1.5v-7.5h-1.5v3zm7-.75V6.75h-1.5v7.5h1.5V12l2.8 2.1.9-1.2-3.2-2.4 3.2-2.4-.9-1.2zM8 22.25v-1.5h7.998l.001 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ModernTvK_4;
