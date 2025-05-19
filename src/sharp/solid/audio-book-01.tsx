import React from "react";
const AudioBook_01: React.FC<
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
        d="M6.5 1.25A3.75 3.75 0 0 0 2.75 5l-.004 14c0 2.07 1.766 3.75 3.944 3.75h14.557v-1.875h-1.736v-3.75h1.736L21.25 1.25zm.19 15.875h10.85v3.75H6.69c-1.088 0-1.971-.84-1.971-1.875v-.001c0-1.035.883-1.874 1.972-1.874M10 5.5 16 9l-6 3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AudioBook_01;
