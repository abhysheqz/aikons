import React from "react";
const PoolTable: React.FC<
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
      <path fill="currentColor" d="M5.23 18h1.828l-2.44 3.5-1.237-.847z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2.5a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h3.23l4.65-6.673 1.239.847L7.059 18H22a.75.75 0 0 0 .75-.75v-14A.75.75 0 0 0 22 2.5zM2.75 4v2.155A3 3 0 0 0 4.905 4zm0 12.5h2.155a3 3 0 0 0-2.155-2.155zm7.395 0a2 2 0 0 1 3.71 0zm11.105 0v-2.155a3 3 0 0 0-2.155 2.155zM19.095 4h2.155v2.155A3 3 0 0 1 19.095 4m-5.24 0h-3.71a2 2 0 0 0 3.71 0M12 8.25a1 1 0 1 0 0 2h.012a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoolTable;
