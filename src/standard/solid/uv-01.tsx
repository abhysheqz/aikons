import React from "react";
const Uv_01: React.FC<
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
        d="M10.984 3.132a1.25 1.25 0 0 1 2.035.001L14.82 5.66l2.612-.584a1.25 1.25 0 0 1 1.492 1.494l-.585 2.609 2.526 1.804a1.25 1.25 0 0 1 0 2.034L18.34 14.82l.585 2.61a1.25 1.25 0 0 1-1.492 1.493l-2.612-.583-1.802 2.525a1.25 1.25 0 0 1-2.035 0L9.178 18.34l-2.608.583a1.25 1.25 0 0 1-1.493-1.492l.582-2.61-2.526-1.805a1.25 1.25 0 0 1 0-2.034l2.526-1.804-.582-2.61A1.25 1.25 0 0 1 6.57 5.074l2.608.584z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Uv_01;
