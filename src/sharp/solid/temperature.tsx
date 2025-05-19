import React from "react";
const Temperature: React.FC<
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
        d="M9 1.25a.75.75 0 0 0-.75.75v10.641a5.75 5.75 0 1 0 7.501 0V2a.75.75 0 0 0-.75-.75zM14.75 17c0-1.259-.846-2.32-2-2.646V7.25h-1.5v7.104A2.751 2.751 0 1 0 14.75 17"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Temperature;
