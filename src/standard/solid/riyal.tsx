import React from "react";
const Riyal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M18.75 11a.75.75 0 0 0-1.5 0v1A2.25 2.25 0 0 1 15 14.25a.75.75 0 0 0 0 1.5A3.75 3.75 0 0 0 18.75 12zM11 7.25a.75.75 0 0 1 .75.75v4.5c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25.75.75 0 0 1 1.5 0A1.75 1.75 0 0 1 13 14.25h-1a1.75 1.75 0 0 1-1.75-1.75V8a.75.75 0 0 1 .75-.75M9.25 8a.75.75 0 0 0-1.5 0v4.5a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25.75.75 0 0 0-1.5 0c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75zM11 14.74a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m2.75.76a.75.75 0 0 0-1.5 0v.01a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Riyal;
