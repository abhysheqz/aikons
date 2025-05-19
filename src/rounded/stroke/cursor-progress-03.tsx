import React from "react";
const CursorProgress_03: React.FC<
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
        d="m8.547 3.949 5.363 2.098c3.093 1.21 4.64 1.816 4.589 2.776s-1.666 1.4-4.894 2.28c-.961.263-1.442.394-1.775.727s-.464.814-.726 1.775c-.88 3.228-1.321 4.843-2.281 4.894s-1.565-1.496-2.776-4.589L3.95 8.547C2.68 5.308 2.048 3.689 2.869 2.868c.82-.82 2.44-.187 5.678 1.08Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.259 13.531a4.2 4.2 0 0 0-1.018 0m1.018 7.938a4.2 4.2 0 0 1-1.018 0m4.259-5.52a4 4 0 0 0-.509-.866m-6.482 4.835a4 4 0 0 1-.509-.866m.508-3.97a4 4 0 0 0-.508.867m7.5 3.103a4 4 0 0 1-.509.866"
      />
    </svg>
  );
};
export default CursorProgress_03;
