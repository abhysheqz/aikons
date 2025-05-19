import React from "react";
const UserWarning_01: React.FC<
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
        d="M3.411 18.244c1.32-3.68 4.907-5.494 8.59-5.494 3.681 0 7.268 1.814 8.588 5.494l.161.448-2.523 2.559H5.773L3.25 18.692zM7.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 4v6h-2V4zm0 7v2.01h-2V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserWarning_01;
