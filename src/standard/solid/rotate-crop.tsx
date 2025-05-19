import React from "react";
const RotateCrop: React.FC<
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
        d="M2 13.5a1 1 0 0 0-1 1c0 4.552 3.448 8 8 8a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v.926c-2.93-.442-5-2.821-5-5.926a1 1 0 0 0-1-1M15.5 3.074c2.93.442 5 2.821 5 5.926a1 1 0 1 0 2 0c0-4.552-3.448-8-8-8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 4.25a1 1 0 0 1 1 1v1.5h5a3 3 0 0 1 3 3v5h1.5a1 1 0 1 1 0 2h-1.5v1.5a1 1 0 1 1-2 0v-1.5h-5a3 3 0 0 1-3-3v-5h-1.5a1 1 0 0 1 0-2h1.5v-1.5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default RotateCrop;
