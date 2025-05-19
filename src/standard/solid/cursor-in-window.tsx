import React from "react";
const CursorInWindow: React.FC<
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
        fillRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5.5a1 1 0 0 1-2 0V8H3v10a1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.357 12.774a1.25 1.25 0 0 1 1.419-1.418l7.795 1.146c1.017.15 1.429 1.394.702 2.12l-1.544 1.544 2.45 2.45a1.25 1.25 0 0 1 0 1.768l-1.793 1.792a1.25 1.25 0 0 1-1.768 0l-2.45-2.449-1.544 1.544c-.726.727-1.97.315-2.12-.702z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorInWindow;
