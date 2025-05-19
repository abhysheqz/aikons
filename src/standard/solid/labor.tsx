import React from "react";
const Labor: React.FC<
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
        d="M7 13.5H5.75A2.75 2.75 0 0 0 3 16.25v5c0 .414.336.75.75.75H7zM8.5 22H15v-8.5h-1.25a.75.75 0 0 0-.53.22l-1.47 1.47-1.47-1.47a.75.75 0 0 0-.53-.22H8.5zm11.25 0H16.5v-8.5h1.25a2.75 2.75 0 0 1 2.75 2.75v5a.75.75 0 0 1-.75.75M9 6.5v1.75a2.75 2.75 0 1 0 5.5 0V6.5H16v1.75a4.25 4.25 0 0 1-8.5 0V6.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75.5a.75.75 0 0 1 .75.75v.816A4.25 4.25 0 0 1 15.993 6h.257a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h.257A4.25 4.25 0 0 1 11 2.066V1.25a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Labor;
