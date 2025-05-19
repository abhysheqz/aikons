import React from "react";
const Spatula: React.FC<
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
        d="m16.988 2.38.76.55a15 15 0 0 1 3.32 3.318l.551.759c.577.793.49 1.888-.204 2.581l-4.53 4.527a2 2 0 0 1-1.813.543l-2.038-.418a2 2 0 0 0-1.813.543L4.648 21.35c-.392.41-1.273 1.132-2.225.18-.864-.862-.203-1.804.207-2.196l6.574-6.566a2 2 0 0 0 .543-1.811L9.33 8.92a2 2 0 0 1 .544-1.81l4.531-4.527a2 2 0 0 1 2.584-.204"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.22 10.686 2.155-2.154M13.375 8.841l2.154-2.154"
      />
    </svg>
  );
};
export default Spatula;
