import React from "react";
const Fan_02: React.FC<
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
        strokeWidth={1.5}
        d="M9.579 12.624A5 5 0 0 0 12 22v-7.5a2.5 2.5 0 0 1-2.421-1.876ZM12.624 14.421A2.5 2.5 0 0 0 14.5 12H22a5 5 0 0 1-9.376 2.421ZM2 12a5 5 0 0 1 9.376-2.421A2.5 2.5 0 0 0 9.5 12zM12 9.5V2a5 5 0 0 1 2.421 9.376A2.5 2.5 0 0 0 12 9.5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default Fan_02;
