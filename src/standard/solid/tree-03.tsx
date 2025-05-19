import React from "react";
const Tree_03: React.FC<
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
        d="M11.25 18.525v2.725H10a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-2.726a6.8 6.8 0 0 1-1.5 0M12 1.25a6.75 6.75 0 0 0-6.744 6.474 1 1 0 0 0-.006.092V12q0 .047.006.092a6.75 6.75 0 0 0 5.994 6.432V13.31l-2.28-2.28a.75.75 0 1 1 1.06-1.06l1.22 1.22V9a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.28 2.28v3.214a6.75 6.75 0 0 0 5.994-6.432A1 1 0 0 0 18.75 12V7.816a1 1 0 0 0-.006-.092A6.75 6.75 0 0 0 12 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_03;
