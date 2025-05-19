import React from "react";
const FileUnlocked: React.FC<
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
        d="M16.5 14.75a1 1 0 0 0-1 1v.5H20a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h1v-.5a2.5 2.5 0 0 1 4.25-1.786.75.75 0 0 1-1.05 1.072 1 1 0 0 0-.7-.286"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h4.954A2 2 0 0 1 11 22v-5a2 2 0 0 1 1.823-1.992 3.751 3.751 0 0 1 6.302-1.936A2 2 0 0 1 19.662 15H20c.265 0 .518.052.75.145v-6.09a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileUnlocked;
