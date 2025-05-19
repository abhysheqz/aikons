import React from "react";
const ComputerChartUp: React.FC<
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
        d="M10.5 16.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v10A2.75 2.75 0 0 0 4 17.75h16A2.75 2.75 0 0 0 22.75 15V5A2.75 2.75 0 0 0 20 2.25zM14 6a1 1 0 1 0 0 2h.586L12.5 10.086l-1.293-1.293a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 1 0 1.414 1.414l2.793-2.793 1.293 1.293a1 1 0 0 0 1.414 0L16 9.414V10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerChartUp;
