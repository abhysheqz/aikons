import React from "react";
const IceSkating: React.FC<
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
        d="M3.495 13.5H7.5L12 17h7c1.546 0 2-1.106 2-2.526 0-1.554-4.088-2.323-6.04-4.055S12 5.448 12 3c-1.5 0-5.498 0-7.498 2.5.148.819.01 1.937-.466 2.719-.566.93-1.034 1.763-1.034 2.781 0 1 .162 1.628.493 2.5m0 0C3.885 14.527 4 16 4 17h4l.502-2.72M13.5 9.5l-1 1M12.5 7l-2 1M20.03 17l1.26 2.558A1 1 0 0 1 20.392 21H2.5M15 17v4m-9-4v4"
      />
    </svg>
  );
};
export default IceSkating;
