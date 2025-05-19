import React from "react";
const Manager: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 22v-5c0-1.885 0-2.828-.586-3.414S17.886 13 16 13l-4 9-4-9c-1.886 0-2.828 0-3.414.586S4 15.115 4 17v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 15-.5 4 .5 1.5.5-1.5zm0 0-1-2h2zM15.5 6.5v-1a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 1 0 7 0"
      />
    </svg>
  );
};
export default Manager;
