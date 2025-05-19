import React from "react";
const Nintendo: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4.5H2v15h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 4.5v15M7 4.5v15" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 15.5h-.009M4.508 8.5h-.009"
      />
    </svg>
  );
};
export default Nintendo;
