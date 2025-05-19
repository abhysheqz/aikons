import React from "react";
const Stumbleupon: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM12 6a3 3 0 0 0-3 3v6a1 1 0 1 1-2 0v-2a1 1 0 1 0-2 0v2a3 3 0 1 0 6 0V9a1 1 0 1 1 2 0v1a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3m3 7a1 1 0 1 0-2 0v2a3 3 0 1 0 6 0v-2a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stumbleupon;
