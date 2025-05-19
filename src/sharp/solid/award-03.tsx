import React from "react";
const Award_03: React.FC<
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
        d="M6.5 16.75a1 1 0 0 0-1 1v3H4v2h16v-2h-1.5v-3a1 1 0 0 0-1-1zm10 4v-2h-9v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.007 1.447a.75.75 0 0 1 .229.7l-3.18 16a.75.75 0 0 1-.736.603H8.668a.75.75 0 0 1-.739-.622L5.646 4.968 18.29 1.28a.75.75 0 0 1 .717.167"
      />
    </svg>
  );
};
export default Award_03;
