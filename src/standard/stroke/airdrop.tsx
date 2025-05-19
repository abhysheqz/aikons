import React from "react";
const Airdrop: React.FC<
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
        d="M4.8 16.5A8.55 8.55 0 0 1 3 11.25C3 6.416 7.03 2.5 12 2.5s9 3.917 9 8.75c0 1.97-.67 3.787-1.8 5.25m-10.927-2A4.68 4.68 0 0 1 7 11.3c0-2.651 2.239-4.8 5-4.8s5 2.149 5 4.8c0 1.23-.481 2.35-1.273 3.2m-2.227-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.203 16.928a.955.955 0 0 1 1.594 0l2.04 3.076c.425.64-.031 1.496-.796 1.496H9.959c-.765 0-1.22-.856-.797-1.496z"
      />
    </svg>
  );
};
export default Airdrop;
