import React from "react";
const NodeEdit: React.FC<
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
        d="M3 1.25A1.75 1.75 0 0 0 1.25 3v4c0 .966.784 1.75 1.75 1.75h1.998v8.75a3 3 0 0 0 3 3h4.252v.5c0 .966.784 1.75 1.75 1.75h3.997a1.75 1.75 0 0 0 1.75-1.75v-3a1.75 1.75 0 0 0-1.75-1.75H14A1.75 1.75 0 0 0 12.25 18v.5H7.998a1 1 0 0 1-1-1v-5h5a1 1 0 1 0 0-2h-5V8.75h1.997A1.75 1.75 0 0 0 10.745 7V3a1.75 1.75 0 0 0-1.75-1.75zm17.343 3.22a.75.75 0 0 0-1.06 0L14.47 9.282a.75.75 0 0 0-.22.53V12c0 .414.336.75.75.75h2.188a.75.75 0 0 0 .53-.22l4.812-4.812a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeEdit;
