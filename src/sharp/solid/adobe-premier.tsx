import React from "react";
const AdobePremier: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm4 4.25H11a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H7.75v4h-1.5zm1.5 4h2.5v-2.5h-2.5zM14 9.75a.75.75 0 0 0-.75.75v6.25h1.5v-5.5h2.5v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobePremier;
