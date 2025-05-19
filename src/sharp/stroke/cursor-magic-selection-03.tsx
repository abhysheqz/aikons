import React from "react";
const CursorMagicSelection_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 4V2M5 5 3.5 3.5M4 9H2m3 4-1.5 1.5m11-11L13 5M12.455 22 8 8l14 4.454-4.775 2.885 4.457 4.434-1.918 1.917-4.445-4.445z"
      />
    </svg>
  );
};
export default CursorMagicSelection_03;
