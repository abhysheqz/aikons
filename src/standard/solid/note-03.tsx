import React from "react";
const Note_03: React.FC<
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
        d="M2.75 5.5A2.75 2.75 0 0 1 5.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75V20a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20zm9.5 4.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-2.531-6.836a.75.75 0 0 1 .117 1.055l-2 2.5a.75.75 0 0 1-1.116.061l-1-1a.75.75 0 1 1 1.06-1.06l.408.407 1.476-1.846a.75.75 0 0 1 1.055-.117m.117 7.055a.75.75 0 0 0-1.172-.937l-1.476 1.845-.408-.407a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.116-.062z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_03;
