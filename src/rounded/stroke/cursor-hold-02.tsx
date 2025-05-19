import React from "react";
const CursorHold_02: React.FC<
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
        d="m8.047 3.449 5.363 2.098c3.093 1.21 4.64 1.816 4.589 2.776s-1.666 1.4-4.894 2.28c-.961.263-1.442.394-1.775.727s-.464.814-.726 1.775c-.88 3.228-1.321 4.843-2.281 4.894s-1.565-1.496-2.776-4.589L3.45 8.047C2.18 4.808 1.548 3.189 2.369 2.368c.82-.82 2.44-.187 5.678 1.08Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m17.05 17.95 1.8-1.8M22 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      />
    </svg>
  );
};
export default CursorHold_02;
