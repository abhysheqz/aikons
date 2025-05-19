import React from "react";
const BedDouble: React.FC<
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
        d="M4.5 11V6.51C6.78 4.903 9.082 4 12 4s5.22.902 7.5 2.51V11h-1.25V9.5c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25V11h-.5V9.5c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25V11zm-2 .401V6.503c0-.628.297-1.238.83-1.615C5.887 3.082 8.587 2 12 2s6.114 1.082 8.67 2.888c.533.377.83.987.83 1.615v4.898A3 3 0 0 1 23 14v7a1 1 0 1 1-2 0v-2.5H3V21a1 1 0 1 1-2 0v-7c0-1.11.603-2.08 1.5-2.599"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedDouble;
