import React from "react";
const JavaScript: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 21.5a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 12v3.837A2.163 2.163 0 0 1 9.337 18c-.765 0-1.475-.276-1.837-1m10.386-4c-.274-.583-1.015-1-1.886-1-1.105 0-2 .672-2 1.5 0 2.067 4 .933 4 3 0 .828-.895 1.5-2 1.5-.87 0-1.612-.417-1.886-1"
      />
    </svg>
  );
};
export default JavaScript;
