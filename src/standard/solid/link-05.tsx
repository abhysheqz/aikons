import React from "react";
const Link_05: React.FC<
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
        d="M7 8a4 4 0 1 0 0 8h3a1 1 0 1 1 0 2H7A6 6 0 0 1 7 6h3a1 1 0 1 1 0 2zm6-1a1 1 0 0 1 1-1h3a6 6 0 0 1 0 12h-3a1 1 0 1 1 0-2h3a4 4 0 0 0 0-8h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 12a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_05;
