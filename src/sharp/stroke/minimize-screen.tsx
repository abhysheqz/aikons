import React from "react";
const MinimizeScreen: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.988 16v-2M8.997 22h5.996M2.002 9v6M9.996 2H7.998m13.99 16v4H17.99M5.999 22H2.002v-4m0-12V2h3.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.984 10.96H22V2.05a.01.01 0 0 0-.01-.01h-9.006zM11.483 15.997h-3.55v-3.502m5.035-1.56L8.43 15.499"
      />
    </svg>
  );
};
export default MinimizeScreen;
