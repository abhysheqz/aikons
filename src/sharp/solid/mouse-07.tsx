import React from "react";
const Mouse_07: React.FC<
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
        d="M5.75 2.75v-1.5h-1.5V3.5a.75.75 0 0 0 .75.75h7.25V6h1.5V3.5a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 5.25c-.78 0-1.544.065-2.28.156-2.31.285-4.095 2.2-4.275 4.463-.106 1.332-.195 2.715-.195 4.13s.09 2.8.195 4.131c.18 2.264 1.964 4.179 4.275 4.464.736.09 1.5.156 2.28.156s1.544-.066 2.28-.156c2.31-.285 4.095-2.2 4.275-4.464.106-1.332.195-2.715.195-4.13s-.09-2.799-.195-4.13c-.18-2.264-1.964-4.18-4.275-4.464A19 19 0 0 0 13 5.25M12.25 8v3h1.5V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_07;
