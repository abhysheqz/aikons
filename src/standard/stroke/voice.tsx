import React from "react";
const Voice: React.FC<
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
        d="M5.5 21.5h13a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.5v9M9 9.5v5M6 11.5v1M15 9.5v5M18 11.5v1"
      />
    </svg>
  );
};
export default Voice;
