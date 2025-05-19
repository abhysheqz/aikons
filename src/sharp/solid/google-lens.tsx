import React from "react";
const GoogleLens: React.FC<
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
        d="M9.465 2h5.07l1.333 2H18a4 4 0 0 1 4 4v7h-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3.5H2V8a4 4 0 0 1 4-4h2.131zM4 14.5V18a2 2 0 0 0 2 2h8v2H6a4 4 0 0 1-4-4v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 13a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <circle cx={19} cy={19} r={2} fill="currentColor" />
    </svg>
  );
};
export default GoogleLens;
