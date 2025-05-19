import React from "react";
const Pendulum: React.FC<
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
        d="M1 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 2a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M11.5 2a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M16.25 18.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.848 2.012a1 1 0 0 1 1.14.836l2 13a1 1 0 0 1-1.976.304l-2-13a1 1 0 0 1 .836-1.14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pendulum;
