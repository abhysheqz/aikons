import React from "react";
const WattpadSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.12 8.72c.2-.566.36-1.81-.6-2.261-1.2-.566-3.001.848-2.4 4.239.6 3.391 3 4.804 5.1-.283.768 3.906 3.163 2.192 4.062.478.898-1.714 1.796-2.572 1.796-2.572 1.797-1.714.668-2.857-.838-2.285-1.205.457-2.108 1.532-2.41 2.012 0-4.276-3.48-1.71-4.71.672"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WattpadSquare;
