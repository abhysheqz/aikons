import React from "react";
const Copy_01: React.FC<
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
        d="M11 22a2 2 0 0 1-2-2v-8.999a2 2 0 0 1 2.001-2l9 .007a2 2 0 0 1 1.999 2V20a2 2 0 0 1-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8.429v-4.42a2 2 0 0 0-1.999-2l-11-.008a2 2 0 0 0-2.001 2V15a2 2 0 0 0 2 2h4.429"
      />
    </svg>
  );
};
export default Copy_01;
