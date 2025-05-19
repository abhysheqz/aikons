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
        d="M3 2a1 1 0 0 1 1 1v11c0 1.678.002 2.836.12 3.707q.048.367.122.637l16.05-16.051a1 1 0 1 1 1.415 1.414L5.656 19.76q.27.072.637.122c.87.117 2.029.119 3.707.119h11a1 1 0 1 1 0 2H9.928c-1.589 0-2.882 0-3.902-.137-1.064-.143-1.979-.452-2.708-1.181s-1.038-1.644-1.18-2.708C2 16.954 2 15.66 2 14.072V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
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
