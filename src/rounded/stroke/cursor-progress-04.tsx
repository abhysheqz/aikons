import React from "react";
const CursorProgress_04: React.FC<
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
        d="m8.047 3.449 5.363 2.098h0c3.093 1.21 4.64 1.816 4.589 2.776s-1.666 1.4-4.894 2.28c-.961.263-1.442.394-1.775.727s-.464.814-.726 1.775c-.88 3.228-1.321 4.843-2.281 4.894s-1.565-1.496-2.776-4.589h0L3.45 8.047C2.18 4.808 1.548 3.189 2.369 2.368c.82-.82 2.44-.187 5.678 1.08M17.5 13s-1 .818-1 2.454 2 2.455 2 4.092-1 2.454-1 2.454m0-9a4.5 4.5 0 0 0-4.5 4.5m4.5-4.5a4.5 4.5 0 0 1 4.5 4.5M17.5 22a4.5 4.5 0 0 0 4.5-4.5M17.5 22a4.5 4.5 0 0 1-4.5-4.5m9 0s-.818-1-2.454-1-2.455 2-4.091 2-2.455-1-2.455-1"
      />
    </svg>
  );
};
export default CursorProgress_04;
