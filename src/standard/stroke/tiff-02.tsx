import React from "react";
const Tiff_02: React.FC<
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
        d="M19 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2m-.5-2h-4.502a2 2 0 0 1-2-2V2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 14H8m0 0h1.5M8 14v5m13-5h-2v2.5m0 0V19m0-2.5h2M16.5 14h-2v2.5m0 0V19m0-2.5h2M12 14v5"
      />
    </svg>
  );
};
export default Tiff_02;
