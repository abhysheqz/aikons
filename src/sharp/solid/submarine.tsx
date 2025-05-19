import React from "react";
const Submarine: React.FC<
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
        d="M1.25 12.5a.75.75 0 0 1 .75-.75h2.208L6.5 13.125l2.292-1.375H19c2.175 0 3.75 2.015 3.75 4.25s-1.575 4.25-3.75 4.25H8.792L6.5 18.875 4.208 20.25H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M14 3.75a1 1 0 0 0-1 1v4h-1a1 1 0 0 0-.895.553l-1.5 3 1.79.894 1.223-2.447h2.764l1.223 2.447 1.79-.894-1.5-3A1 1 0 0 0 16 8.75h-1v-3h2v-2z"
      />
    </svg>
  );
};
export default Submarine;
