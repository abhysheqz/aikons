import React from "react";
const Chair_02: React.FC<
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
        d="M17.5 9.8q.363.151.689.359l.476-4.761A4 4 0 0 0 14.685 1h-5.37a4 4 0 0 0-3.98 4.398l.476 4.76q.325-.206.689-.358a14.3 14.3 0 0 1 11 0M7 11a13 13 0 0 1 10 0 3.25 3.25 0 0 1 2 3v1a1 1 0 0 1-1 1v6a1 1 0 1 1-2 0v-3H8v3a1 1 0 1 1-2 0v-6a1 1 0 0 1-1-1v-1a3.25 3.25 0 0 1 2-3m1 5h8v1H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chair_02;
