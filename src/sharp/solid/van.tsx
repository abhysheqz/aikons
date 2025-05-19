import React from "react";
const Van: React.FC<
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
        d="M2.441 6.673H1.28V4.75h13.653c.297 0 .577.133.763.36l3.775 4.644 2.74 1.347a.96.96 0 0 1 .54.86v4.327a.97.97 0 0 1-.977.962h-1.056q.033-.245.033-.499a3.75 3.75 0 1 0-7.467.499h-2.566q.033-.245.033-.499a3.75 3.75 0 1 0-7.467.499h-.078a.98.98 0 0 1-.928-.657L1.3 13.708a.95.95 0 0 1-.02-.538l1.406-5.535zm12.02 0 3.112 3.827H13.5L10.82 6.673z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.502 16.751a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M9.502 16.751a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
    </svg>
  );
};
export default Van;
