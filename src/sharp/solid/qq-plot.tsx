import React from "react";
const QqPlot: React.FC<
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
        d="M4.499 20V3h-2v18a1 1 0 0 0 1 1h17.992v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.49 4.414 4.707 21.207l-1.414-1.414L20.077 3zM14.494 3h2.009v2h-2.01zM7.497 2h2.01v2h-2.01zM7.497 8h2.01v2h-2.01zM19.492 10H21.5v2h-2.009zM12.495 16h2.009v2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QqPlot;
