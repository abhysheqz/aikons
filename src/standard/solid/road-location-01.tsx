import React from "react";
const RoadLocation_01: React.FC<
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
        d="M4.5 15a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M12 1.25c-2.632 0-4.75 2.158-4.75 4.8 0 1.536.785 2.762 1.631 3.637.848.878 1.821 1.474 2.36 1.768.475.26 1.043.26 1.518 0 .539-.294 1.512-.89 2.36-1.768.846-.875 1.631-2.1 1.631-3.637 0-2.642-2.118-4.8-4.75-4.8m0 3.25a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 10a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RoadLocation_01;
