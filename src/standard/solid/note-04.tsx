import React from "react";
const Note_04: React.FC<
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
        d="M7 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 5.5A2.75 2.75 0 0 1 5.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v9.25H15.5a2.75 2.75 0 0 0-2.75 2.75v5.25H5.5A2.75 2.75 0 0 1 2.75 20zm11.5 17.189a2.75 2.75 0 0 0 1.366-.744l4.829-4.829a2.8 2.8 0 0 0 .585-.866H15.5c-.69 0-1.25.56-1.25 1.25zM7.75 10a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_04;
