import React from "react";
const FolderZip: React.FC<
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
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V8.994A2.75 2.75 0 0 0 20 6.244h-4v2.753h1a1 1 0 1 1 0 2h-1V13h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2.003h-1a1 1 0 1 1 0-2h1V6.244z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FolderZip;
