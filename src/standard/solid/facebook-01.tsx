import React from "react";
const Facebook_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h6.265v-7.5H10a1.25 1.25 0 0 1 0-2.5h.76l-.01-2.738A3.25 3.25 0 0 1 14 6.25h3a1.25 1.25 0 1 1 0 2.5h-3a.75.75 0 0 0-.75.753l.01 2.746H15a1.25 1.25 0 0 1 0 2.5h-1.735v7.501H19.5a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75z"
      />
    </svg>
  );
};
export default Facebook_01;
