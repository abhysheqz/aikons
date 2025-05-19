import React from "react";
const TextCreation: React.FC<
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
        d="M18 2h4v4h-4zM2 2h4v4H2zM2 18h4v4H2zM18 18h4v4h-4zM20 18V6M6 20h12m0-16H6M4 6v12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 16h-3M12 8v8M8 9.5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.5"
      />
    </svg>
  );
};
export default TextCreation;
