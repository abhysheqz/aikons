import React from "react";
const FullSignal: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18.5 5H17v14h1.5m0-14H20v14h-1.5m0-14v14M12 8h-1.5v11H12m0-11h1.5v11H12m0-11v11M5.5 12H4v7h1.5m0-7H7v7H5.5m0-7v7"
      />
    </svg>
  );
};
export default FullSignal;
