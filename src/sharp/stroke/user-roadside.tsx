import React from "react";
const UserRoadside: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16.847H5.5M12 21.45v2.046M18.5 16.847H17"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.988 6.7c3.038 0 5.15 2.538 5 5.567v1.395H14.92l-1.24 5.231h-3.384l-1.222-5.231H7.006V11.82c.113-2.966 2.068-4.99 4.982-5.12Zm0 0c1.519 0 2.51-1.295 2.51-2.72 0-1.234-1.045-2.48-2.51-2.48S9.493 2.698 9.493 4.064c0 1.365.976 2.635 2.495 2.635Z"
      />
    </svg>
  );
};
export default UserRoadside;
