import React from "react";
const Wanted: React.FC<
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
        d="M15.05 17.986H9.023M13.544 7.495c0 .827-.675 1.498-1.507 1.498a1.503 1.503 0 0 1-1.506-1.498c0-.828.675-1.499 1.506-1.499.832 0 1.507.671 1.507 1.499ZM9.024 14.489h6.025a3.005 3.005 0 0 0-3.012-2.998 3.005 3.005 0 0 0-3.013 2.998Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.957 1.983H4.498v4.02l1.535 2.485-1.517 2.502v6.996a.1.1 0 0 1-.007.035l-1.442 3.825a.1.1 0 0 0 .094.135h16.407V4.994l1.479-2.866a.1.1 0 0 0-.09-.145Z"
      />
    </svg>
  );
};
export default Wanted;
