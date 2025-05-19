import React from "react";
const AdobeIndesign: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm13.5 4.25v9.5H11a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h3.25v-3zm-4 4.5v3.5h2.5v-3.5zm-3 5v-9.5h-1.5v9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobeIndesign;
