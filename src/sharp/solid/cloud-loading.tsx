import React from "react";
const CloudLoading: React.FC<
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
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 18.75H7A5.75 5.75 0 0 1 1.25 13"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 19.75h4v2h-4zm5.5 0h4v2h-4zm5.5 0h3.5v2h-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CloudLoading;
