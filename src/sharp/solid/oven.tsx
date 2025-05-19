import React from "react";
const Oven: React.FC<
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
        d="M4 1.25a.75.75 0 0 0-.75.75v5.25h17.5V2a.75.75 0 0 0-.75-.75zm6.125 3.746h-4v-1.5h4zm7.75.009v-1.51h-1.5v1.51zM22 22.75H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 8.75h17.5V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM7 11h10v8H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Oven;
