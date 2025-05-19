import React from "react";
const Briefcase_08: React.FC<
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
      <path fill="currentColor" d="M5 1.75h4v3H5zM15 1.75h4v3h-4z" />
      <path
        fill="currentColor"
        d="M13.75 3.25h-3.5V6h-6.5V3.25H2.5a.75.75 0 0 0-.75.75v3.5a5.75 5.75 0 0 0 5.75 5.75h9a5.75 5.75 0 0 0 5.75-5.75V4a.75.75 0 0 0-.75-.75h-1.25V6h-6.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 21.5v-8.523A7.22 7.22 0 0 0 7.5 14.75h9a7.22 7.22 0 0 0 4.75-1.773V21.5a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75M7 19.75h3v-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Briefcase_08;
