import React from "react";
const DistributeVerticalCenter: React.FC<
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
        d="M14.502 4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75v-3c0-.966.783-1.75 1.75-1.75zM4.75 15.75c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-11a1.75 1.75 0 0 1-1.75-1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 7.25a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m13 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m-13 10a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DistributeVerticalCenter;
