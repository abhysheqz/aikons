import React from "react";
const SecurityBlock: React.FC<
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
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.702 15.702C20.485 14.359 21 12.794 21 11V5c-5-.5-9-3-9-3s-1.632 1.02-4.113 1.887m-3.144.856Q3.897 4.91 3 5v6c0 7.5 9 11 9 11s3.357-1.305 5.97-4.03"
      />
    </svg>
  );
};
export default SecurityBlock;
