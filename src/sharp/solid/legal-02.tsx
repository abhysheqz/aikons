import React from "react";
const Legal_02: React.FC<
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
        d="M14.58 17.665a.75.75 0 0 1 .67-.415h4a.75.75 0 0 1 .67.415l1.293 2.585h1.037v1.5h-10v-1.5h1.037zM21.5 2.25v1.5h-.629c.038.273.081.598.124.96.126 1.07.255 2.478.255 3.79s-.129 2.72-.255 3.79c-.043.362-.086.687-.124.96h.629v1.5h-9v-1.5h.629c-.038-.273-.081-.598-.124-.96-.126-1.07-.255-2.478-.255-3.79s.129-2.72.255-3.79c.043-.362.086-.687.124-.96H12.5v-1.5zM11.597 6.25H2.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h9.097c-.057-.725-.097-1.5-.097-2.25s.04-1.524.097-2.25"
      />
    </svg>
  );
};
export default Legal_02;
