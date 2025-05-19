import React from "react";
const Sun_03: React.FC<
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
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v2.5m0 15V22M19.072 4.929l-1.768 1.768M6.698 17.303 4.93 19.071M22.002 12h-2.5m-15 0h-2.5M19.072 19.071l-1.768-1.768M6.698 6.698 4.93 4.929"
      />
    </svg>
  );
};
export default Sun_03;
