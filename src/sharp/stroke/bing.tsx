import React from "react";
const Bing: React.FC<
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
        d="M4.001 19.444V2.008A.01.01 0 0 1 4.016 2L7.97 3.967a.01.01 0 0 1 .005.01v13.025l7.085-4.02-4.092-.995V7.97l9.022 2.484a.01.01 0 0 1 .008.01v4.55a.01.01 0 0 1-.005.008L7.98 22a.01.01 0 0 1-.01 0l-3.965-2.549A.01.01 0 0 1 4 19.444Z"
      />
    </svg>
  );
};
export default Bing;
