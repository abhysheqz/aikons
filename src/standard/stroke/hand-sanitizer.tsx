import React from "react";
const HandSanitizer: React.FC<
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
        d="M11.296 9H7.704a4 4 0 0 0-3.988 3.693l-.55 7.154A2 2 0 0 0 5.16 22h8.68a2 2 0 0 0 1.994-2.153l-.55-7.154A4 4 0 0 0 11.296 9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 13.5v5M12 16H7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 9V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11 4.219 5.38-1.093a1 1 0 0 1 1 .38L18.5 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 10.5c0 1.105-.75 1.5-1.5 1.5s-1.5-.395-1.5-1.5S19.5 8 19.5 8 21 9.395 21 10.5ZM11 5.998V3.494a1.501 1.501 0 0 0-3 0V6"
      />
    </svg>
  );
};
export default HandSanitizer;
