import React from "react";
const Bootstrap: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.882 12c1.17 0 2.118.895 2.118 2s-.948 2-2.118 2H9v-4m3.882 0c1.17 0 2.118-.895 2.118-2s-.948-2-2.118-2H9v4m3.882 0H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v6a2 2 0 0 1-2 2 2 2 0 0 1 2 2v6h16v-6a2 2 0 0 1 2-2 2 2 0 0 1-2-2V4z"
      />
    </svg>
  );
};
export default Bootstrap;
