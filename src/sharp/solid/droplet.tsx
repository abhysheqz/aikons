import React from "react";
const Droplet: React.FC<
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
        d="M12.28 1.457 12 1.25l-.28.207c-.44.325-1.207.89-1.523 1.146-.812.659-1.899 1.6-2.988 2.723-1.086 1.121-2.191 2.44-3.028 3.859-.834 1.413-1.431 2.974-1.431 4.563 0 4.434 3.507 9.002 9.25 9.002s9.25-4.568 9.25-9.002c0-1.59-.597-3.15-1.43-4.563-.838-1.418-1.943-2.738-3.03-3.859a34 34 0 0 0-2.987-2.723c-.316-.256-1.083-.821-1.523-1.146M15 14a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Droplet;
