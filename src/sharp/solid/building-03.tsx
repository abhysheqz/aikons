import React from "react";
const Building_03: React.FC<
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
        d="m19.857 12.845-4.137-1.717.703-1.824 5.327 2.211v10.489h-1.893z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 16.25a.75.75 0 0 0-.75.75v5h-4V2a.75.75 0 0 1 .937-.726L16.75 4.758V22h-4v-5a.75.75 0 0 0-.75-.75zM11.25 22h-3.5v-4.25h3.5zM12 9.75H7v-1.5h5zm0 4H7v-1.5h5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 20.75h22v2H1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_03;
