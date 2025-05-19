import React from "react";
const Keyboard: React.FC<
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
        d="M14 1.125a1 1 0 0 1 1 1v.97a2.32 2.32 0 0 1-1.758 2.25.32.32 0 0 0-.242.31v1.47a1 1 0 1 1-2 0v-1.47a2.32 2.32 0 0 1 1.758-2.25.32.32 0 0 0 .242-.31v-.97a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 10.125A3.75 3.75 0 0 1 5 6.375h14a3.75 3.75 0 0 1 3.75 3.75v9a3.75 3.75 0 0 1-3.75 3.75H5a3.75 3.75 0 0 1-3.75-3.75zm15.75 3h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m-11-1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m4.5 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-3.5 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Keyboard;
