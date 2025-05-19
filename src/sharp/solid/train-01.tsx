import React from "react";
const Train_01: React.FC<
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
        d="m4.104 21.856 2-4 1.788.894-2 4zm14 .894-2-4 1.788-.894 2 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 2.25A.75.75 0 0 1 4 1.5h16a.75.75 0 0 1 .75.75v16A.75.75 0 0 1 20 19H4a.75.75 0 0 1-.75-.75zm1.5.75v14.5h14.5V3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 1.25a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1zM19 11V3.25H5V11zM5 16.125h2.5v-2H5zm11.5 0H19v-2h-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Train_01;
