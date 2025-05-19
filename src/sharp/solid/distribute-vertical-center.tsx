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
        fillRule="evenodd"
        d="M22 18h-3v-2h3zM2 16h3v2H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.472 3.97a.75.75 0 0 1 .53-.22h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .22-.53M4.252 14.5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 8h-6V6h6zM2 6h6v2H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DistributeVerticalCenter;
