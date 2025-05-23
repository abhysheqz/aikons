import React from "react";
const Connect: React.FC<
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
        d="M4.457 19.543a4.974 4.974 0 0 1 0-7.033l1.302-1.303a1 1 0 0 1 1.414 0l5.62 5.62a1 1 0 0 1 0 1.414l-1.303 1.302a4.974 4.974 0 0 1-7.033 0m0 0L2 22M19.543 4.457a4.974 4.974 0 0 1 0 7.033l-1.302 1.303a1 1 0 0 1-1.414 0l-5.62-5.62a1 1 0 0 1 0-1.414l1.303-1.302a4.974 4.974 0 0 1 7.033 0m0 0L22 2M12 8l-1.5 1.5M16 12l-1.5 1.5"
      />
    </svg>
  );
};
export default Connect;
