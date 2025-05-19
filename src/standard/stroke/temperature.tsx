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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2a3 3 0 0 0-3 3v8a5 5 0 1 0 6 0V5a3 3 0 0 0-3-3Z"
      />
    </svg>
  );
};
export default Temperature;
