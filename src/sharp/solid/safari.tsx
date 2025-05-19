import React from "react";
const Safari: React.FC<
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
        d="M11.25 1.25v2.23h1.503V1.25a10.78 10.78 0 0 1 9.998 9.998h-2.23v1.504h2.23a10.78 10.78 0 0 1-9.998 9.998v-2.23h-1.504v2.23a10.78 10.78 0 0 1-9.998-9.998h2.23v-1.504H1.25a10.78 10.78 0 0 1 9.998-9.998m5.5 6-2.328 6.11-3.783-3.782zm-9.501 9.5 2.329-6.112 3.784 3.783z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Safari;
