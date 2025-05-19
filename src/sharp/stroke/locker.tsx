import React from "react";
const Locker: React.FC<
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
        d="M2 19h20V3H2z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M6 19v3m12-3v3" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 8v11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 12.5v2M15 12.5v2M2 8h20"
      />
    </svg>
  );
};
export default Locker;
