import React from "react";
const Mouse_15: React.FC<
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
        d="M5.25 3.5V1.25h1.5v1.5H12a.75.75 0 0 1 .75.75V6h-1.5V4.25H6a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25c-2.797 0-4.681.986-5.823 2.685C5.077 9.574 4.75 11.758 4.75 14s.326 4.426 1.427 6.065C7.32 21.764 9.203 22.75 12 22.75s4.681-.986 5.823-2.685c1.1-1.639 1.427-3.823 1.427-6.065s-.326-4.426-1.427-6.065C16.68 6.236 14.797 5.25 12 5.25M11 8v3h2V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_15;
