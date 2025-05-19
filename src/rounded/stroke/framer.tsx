import React from "react";
const Framer: React.FC<
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
        d="m12 9 6 6H6v-5c0-.827.173-1 1-1zm0 0L6 3h11c.827 0 1 .173 1 1v4c0 .827-.173 1-1 1zM12 21l-6-6h6z"
      />
    </svg>
  );
};
export default Framer;
