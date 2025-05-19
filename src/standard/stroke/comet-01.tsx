import React from "react";
const Comet_01: React.FC<
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
        strokeWidth={1.5}
        d="M4.05 10.05a7 7 0 0 0 9.9 9.9L17.899 16M12 2 6.5 7.5M22 12l-2 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.121 12.88a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m18 2-2 2m6 2-7 7m-1-7-7 6.759"
      />
    </svg>
  );
};
export default Comet_01;
