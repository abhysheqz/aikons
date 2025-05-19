import React from "react";
const Sharing: React.FC<
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
        d="M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17 5h5v5m-6.5 1.5 6.02-6.02M7 5H2v5m6.5 1.5L2.47 5.47"
      />
    </svg>
  );
};
export default Sharing;
