import React from "react";
const More_01: React.FC<
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
        d="M10.496 16.5h3v3h-3zM16.5 16.5h3v3h-3zM4.5 16.5h3v3h-3zM10.496 10.5h3v3h-3zM10.5 4.5h3v3h-3zM16.5 10.5h3v3h-3zM16.5 4.5h3v3h-3zM4.5 10.5h3v3h-3zM4.5 4.5h3v3h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default More_01;
