import React from "react";
const Borobudur: React.FC<
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
        d="M1.25 19a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.335 17.25H3.665l2.107-8.432A.75.75 0 0 1 6.5 8.25h11a.75.75 0 0 1 .727.568zM8.25 10.5v2h1.5v-2zm6 0v2h1.5v-2zm-3 2.5v2h1.5v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m16.207 7.25-.496-1.487A.75.75 0 0 0 15 5.25H9a.75.75 0 0 0-.711.513L7.793 7.25zM9.664 4.25h4.672l-.608-2.432A.75.75 0 0 0 13 1.25h-2a.75.75 0 0 0-.728.568z"
      />
    </svg>
  );
};
export default Borobudur;
