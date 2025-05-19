import React from "react";
const Filter: React.FC<
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
        strokeWidth={1.5}
        d="M3 3.103v3.88l6.008 5 .955 8.925a.1.1 0 0 0 .145.078l3.865-1.99 1.042-7.013L21 6.969V3.103a.1.1 0 0 0-.1-.1H3.101a.1.1 0 0 0-.1.1Z"
      />
    </svg>
  );
};
export default Filter;
