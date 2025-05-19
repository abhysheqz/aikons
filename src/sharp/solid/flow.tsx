import React from "react";
const Flow: React.FC<
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
        d="M13.25 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M2.25 3.25A.75.75 0 0 1 3 2.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM2.25 14.25A.75.75 0 0 1 3 13.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM13.25 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 7.75h-4v-2h4zm2.5 6.5v-4h2v4zm-6.5 2.5h4v2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flow;
