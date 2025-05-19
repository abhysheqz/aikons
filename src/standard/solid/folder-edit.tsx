import React from "react";
const FolderEdit: React.FC<
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
        d="M19.47 12.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-.53.22h-2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .22-.53z"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h8.145A2 2 0 0 1 12 21v-2a2 2 0 0 1 .586-1.414l6-6a2 2 0 0 1 2.828 0l1.336 1.336V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderEdit;
