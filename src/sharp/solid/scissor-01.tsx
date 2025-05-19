import React from "react";
const Scissor_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm11.5 4a2.25 2.25 0 0 0-2.054 3.17l-1.854 1.597L7.48 8.424l-.96 1.152L9.428 12 6.52 14.424l.96 1.152 3.122-2.602 1.873 1.544a2.25 2.25 0 1 0 1.075-1.058l-1.786-1.472 1.719-1.48A2.25 2.25 0 1 0 14.5 6.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Scissor_01;
