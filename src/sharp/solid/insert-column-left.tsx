import React from "react";
const InsertColumnLeft: React.FC<
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
        d="m7.579 9.002-2 2h6.585v2H5.58l2 2-1.415 1.414-4.414-4.414 4.414-4.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.75 2.25v19.5H3.5a.75.75 0 0 1-.75-.75v-6.23l3.414 3.414 3.182-3.182-.75-.75h4.818v-4.5H8.596l.75-.75L6.164 5.82 2.75 9.235V3a.75.75 0 0 1 .75-.75zM22.25 8.25V3a.75.75 0 0 0-.75-.75h-5.25v6zM22.25 9.75v4.5h-6v-4.5zM21.5 21.75h-5.25v-6h6V21a.75.75 0 0 1-.75.75"
      />
    </svg>
  );
};
export default InsertColumnLeft;
