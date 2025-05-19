import React from "react";
const Video_02: React.FC<
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
        d="M1.25 4A.75.75 0 0 1 2 3.25h15a.75.75 0 0 1 .75.75v4.145l3.605-2.258a.89.89 0 0 1 .928-.012.97.97 0 0 1 .467.837v10.577a.97.97 0 0 1-.467.836.89.89 0 0 1-.928-.012l-3.605-2.258V20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm16.5 9.612v-3.224l3.158-1.978v7.18zM10 9h4V7h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Video_02;
