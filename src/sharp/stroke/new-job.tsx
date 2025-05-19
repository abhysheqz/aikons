import React from "react";
const NewJob: React.FC<
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
        d="m17.5 13 1.25 1.152 1.687-.066.229 1.698L22 16.834l-.9 1.45.357 1.676-1.607.523L19.063 22l-1.563-.648-1.563.648-.787-1.517-1.607-.523.357-1.675-.9-1.45 1.334-1.051.229-1.699 1.687.067z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11V5.5H2V21h9M16 5.5 15 2H8L7 5.5"
      />
    </svg>
  );
};
export default NewJob;
