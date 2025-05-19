import React from "react";
const CursorLoading_02: React.FC<
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
        d="m8.547 3.449 5.363 2.098c3.093 1.21 4.64 1.816 4.589 2.776s-1.666 1.4-4.894 2.28c-.961.263-1.442.394-1.775.727s-.464.814-.726 1.775c-.88 3.228-1.321 4.843-2.281 4.894s-1.565-1.496-2.776-4.589L3.95 8.047C2.68 4.808 2.048 3.189 2.869 2.368c.82-.82 2.44-.187 5.678 1.08Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 17.5c1.933 0 3.5-1.511 3.5-3.375 0-.621-.522-1.125-1.167-1.125h-4.666c-.645 0-1.167.504-1.167 1.125 0 1.864 1.567 3.375 3.5 3.375m0 0c1.933 0 3.5 1.511 3.5 3.375 0 .621-.522 1.125-1.167 1.125h-4.666c-.645 0-1.167-.504-1.167-1.125 0-1.864 1.567-3.375 3.5-3.375"
      />
    </svg>
  );
};
export default CursorLoading_02;
