import React from "react";
const CursorInfo_02: React.FC<
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
        d="m10.047 3.449 5.363 2.098c3.093 1.21 4.64 1.816 4.589 2.776s-1.666 1.4-4.894 2.28c-.961.263-1.442.394-1.775.727s-.464.814-.726 1.775c-.88 3.228-1.321 4.843-2.281 4.894s-1.565-1.496-2.776-4.589L5.45 8.047C4.18 4.808 3.548 3.189 4.369 2.368c.82-.82 2.44-.187 5.678 1.08Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 21.99V22m-2-6.002c0-1.104.895-1.998 2-1.998a1.999 1.999 0 0 1 1.363 3.46c-.606.563-1.363 1.206-1.363 2.034"
      />
    </svg>
  );
};
export default CursorInfo_02;
