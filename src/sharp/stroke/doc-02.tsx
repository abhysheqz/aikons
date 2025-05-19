import React from "react";
const Doc_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 15.002V14h-3v5h3v-.992m-5.5-2.505v1.994c0 .83-.672 1.503-1.5 1.503s-1.5-.673-1.5-1.503v-1.994c0-.83.672-1.503 1.5-1.503s1.5.673 1.5 1.503ZM7 14.012V19h1.008c1.107 0 2.003-.9 2-2.01l-.003-.984a2 2 0 0 0-2.007-1.998z"
      />
    </svg>
  );
};
export default Doc_02;
