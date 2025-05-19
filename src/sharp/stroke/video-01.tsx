import React from "react";
const Video_01: React.FC<
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
        d="M17 20V4H2v16zM17 9.5l5-3v11l-5-3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M13 8h-3v3h3z" />
    </svg>
  );
};
export default Video_01;
