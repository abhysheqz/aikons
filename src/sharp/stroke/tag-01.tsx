import React from "react";
const Tag_01: React.FC<
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
        d="M18.498 7.023a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM7.98 13.023l3 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 21.985a.05.05 0 0 1-.07 0l-9.917-9.96a.05.05 0 0 1 0-.071L12.008 2l9.994.028v9.987z"
      />
    </svg>
  );
};
export default Tag_01;
