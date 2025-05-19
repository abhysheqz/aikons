import React from "react";
const CursorMove_02: React.FC<
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
        d="M1.33 2.87c-.37-.964.576-1.91 1.54-1.54l15.117 5.815c1.042.4 1.009 1.887-.051 2.24l-6.413 2.138-2.137 6.413c-.353 1.06-1.84 1.093-2.241.05z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 12.25c.2 0 .39.079.531.22l1.5 1.5a.75.75 0 1 1-1.061 1.06l-.22-.22v.69a.75.75 0 0 1-1.5 0v-.69l-.219.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .53-.22m-2.47 3.22a.75.75 0 0 1 0 1.06l-.22.22h.69a.75.75 0 1 1 0 1.5h-.689l.22.22a.75.75 0 1 1-1.06 1.06l-1.501-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m4.94 0a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.22-.22h-.69a.75.75 0 1 1 0-1.5h.69l-.22-.22a.75.75 0 0 1 0-1.06m-2.47 3.28a.75.75 0 0 1 .75.75v.69l.22-.22a.75.75 0 1 1 1.06 1.06l-1.499 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 1 1 1.06-1.06l.22.22v-.69a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorMove_02;
