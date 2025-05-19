import React from "react";
const FolderUnlocked: React.FC<
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
        d="M18.5 13.75a1 1 0 0 0-1 1v.5H22a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h1v-.5a2.5 2.5 0 0 1 4.25-1.786.75.75 0 0 1-1.05 1.072 1 1 0 0 0-.7-.286"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h9.145A2 2 0 0 1 13 21v-5a2 2 0 0 1 1.823-1.992 3.751 3.751 0 0 1 6.302-1.936A2 2 0 0 1 21.662 14H22c.265 0 .518.052.75.145v-5.15A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderUnlocked;
