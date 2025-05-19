import React from "react";
const GoogleLens: React.FC<
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
        d="m16.866 5-.034-.055-1-1.5A1 1 0 0 0 15 3h-4a1 1 0 0 0-.832.445l-1 1.5L9.134 5H7a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a1 1 0 1 0 2 0V9a4 4 0 0 0-4-4zM5 16a1 1 0 1 0-2 0v3a4 4 0 0 0 4 4h7a1 1 0 1 0 0-2H7a2 2 0 0 1-2-2zm4.25-2a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleLens;
