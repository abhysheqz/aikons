import React from "react";
const Cpp: React.FC<
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
        d="M21.5 18.5v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 10a1 1 0 0 0-1-1h-.75c-.702 0-1.053 0-1.306.169a1 1 0 0 0-.275.276C5 9.697 5 10.048 5 10.75v2.5c0 .702 0 1.053.169 1.306a1 1 0 0 0 .275.276C5.697 15 6.048 15 6.75 15h.75a1 1 0 0 0 1-1M12 10.5v3M10.5 12h3M17.5 10.5v3M16 12h3"
      />
    </svg>
  );
};
export default Cpp;
