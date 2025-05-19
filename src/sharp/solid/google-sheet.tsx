import React from "react";
const GoogleSheet: React.FC<
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
        d="M4 1.25h10.25v6.5h6.5V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V2A.75.75 0 0 1 4 1.25m11.75.44 4.56 4.56h-4.56zM7.5 11.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75zm.75 3v-1.5h3v1.5zm4.5 0v-1.5h3v1.5zm0 3v-1.5h3v1.5zm-1.5-1.5v1.5h-3v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleSheet;
