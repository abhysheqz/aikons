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
        d="M4 3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H5.414L21.707 3.707a1 1 0 0 0-1.414-1.414L4 18.586z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 4A1.5 1.5 0 0 1 15 2.5h.009a1.5 1.5 0 0 1 0 3H15A1.5 1.5 0 0 1 13.5 4M6.5 3A1.5 1.5 0 0 1 8 1.5h.009a1.5 1.5 0 1 1 0 3H8A1.5 1.5 0 0 1 6.5 3M6.5 9A1.5 1.5 0 0 1 8 7.5h.009a1.5 1.5 0 1 1 0 3H8A1.5 1.5 0 0 1 6.5 9M18.5 11A1.5 1.5 0 0 1 20 9.5h.009a1.5 1.5 0 0 1 0 3H20a1.5 1.5 0 0 1-1.5-1.5M11.5 17a1.5 1.5 0 0 1 1.5-1.5h.009a1.5 1.5 0 0 1 0 3H13a1.5 1.5 0 0 1-1.5-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QqPlot;
