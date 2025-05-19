import React from "react";
const Printer: React.FC<
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
      <path fill="currentColor" d="M17.75 6H6.25V1.25h11.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 8A.75.75 0 0 1 2 7.25h20a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-4.25V22a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-3.25H2a.75.75 0 0 1-.75-.75zm6.5 8.75v4.5h8.5v-4.5zM19 11h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Printer;
