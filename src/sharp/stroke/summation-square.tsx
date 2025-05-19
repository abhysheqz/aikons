import React from "react";
const SummationSquare: React.FC<
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
        d="M3 21h18V3H3z"
      />
      <path
        fill="currentColor"
        d="M15 8h.75a.75.75 0 0 0-.75-.75zm-6 .002v-.75a.75.75 0 0 0-.564 1.244zm3.5 3.996.565.493.432-.494-.432-.494zm-3.5 4-.564-.494A.75.75 0 0 0 9 16.748zm6-.003v.75a.75.75 0 0 0 .75-.75zm0-8.745-6 .002v1.5l6-.002zM8.436 8.496l3.5 3.996 1.129-.989-3.5-3.995zm3.5 3.008-3.5 4 1.128.987 3.5-4zM9 16.748l6-.003v-1.5l-6 .003zm5.25-2.75v1.997h1.5v-1.997zm1.5-4V8h-1.5v1.998z"
      />
    </svg>
  );
};
export default SummationSquare;
