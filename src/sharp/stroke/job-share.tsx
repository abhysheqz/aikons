import React from "react";
const JobShare: React.FC<
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
        strokeWidth={1.5}
        d="M19.158 19.829a1.5 1.5 0 1 0 2.684 1.342 1.5 1.5 0 0 0-2.684-1.342Zm0 0-3.316-1.658m3.316-3a1.5 1.5 0 1 0 2.683-1.342 1.5 1.5 0 0 0-2.683 1.342Zm0 0-3.316 1.658m0 0a1.5 1.5 0 1 0 0 1.342m0-1.342a1.5 1.5 0 0 1 0 1.342"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11V5.5H2V21h10M16 5.5 15 2H8L7 5.5"
      />
    </svg>
  );
};
export default JobShare;
