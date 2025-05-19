import React from "react";
const Activity_04: React.FC<
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
        d="M16.75 4.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.902 2.75a4 4 0 0 0 5.348 5.348V21.5a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75v-18a.75.75 0 0 1 .75-.75zm-5.77 3.252 3 8 1.25-2.502H18.5v2h-2.882L12.868 19l-3-8-1.25 2.501H4.5v-2h2.882z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_04;
