import React from "react";
const BorderFull: React.FC<
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
        d="M4.752 1A2.75 2.75 0 0 0 2 3.75v15.999a2.75 2.75 0 0 0 2.75 2.75h14a2.75 2.75 0 0 0 2.75-2.75V3.76a2.75 2.75 0 0 0-2.748-2.75zM6.75 8.249a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0 5a1 1 0 0 0 0 2h4.556a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderFull;
