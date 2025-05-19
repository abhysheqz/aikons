import React from "react";
const AdobePhotoshop: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm3.5 4.25h6v5.5h-4.5v4h-1.5zm1.5 4h3v-2.5h-3zm11-2h-5.5v4.5h4v1.5h-2.5v-.48h-1.5v1.98h5.5v-4.5h-4v-1.5h2.5v.473h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobePhotoshop;
