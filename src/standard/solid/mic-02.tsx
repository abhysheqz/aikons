import React from "react";
const Mic_02: React.FC<
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
        d="M6.25 7a5.75 5.75 0 1 1 11.5 0v4a5.75 5.75 0 0 1-11.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 10a1 1 0 0 1 1 1 7 7 0 1 0 14 0 1 1 0 1 1 2 0c0 4.633-3.5 8.448-8 8.945V21h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H11v-1.055C6.5 19.448 3 15.633 3 11a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mic_02;
