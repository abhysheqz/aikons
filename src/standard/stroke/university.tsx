import React from "react";
const University: React.FC<
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
        d="M2 22h19.5M3 13v9m18-9v9M7.5 8v14m9-14v14M2 13h5m15 0h-5M6.5 8h11M12 22v-2M10.5 12v.5m3-.5v.5M10.5 16v.5m3-.5v.5M12 8V4.993m0 0v-2.98a.01.01 0 0 1 .012-.01L16 2.992v2.001z"
      />
    </svg>
  );
};
export default University;
