import React from "react";
const Typescript_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM7.75 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-5.25H8.5a.75.75 0 0 1-.75-.75m6.5 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 0 1 17 18.75h-2a.75.75 0 0 1 0-1.5h2a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1A1.75 1.75 0 0 1 14.25 14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Typescript_01;
