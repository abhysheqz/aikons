import React from "react";
const UserSharing: React.FC<
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
        d="M3.25 11a8.75 8.75 0 1 1 16.329 4.376l-.487.841-1.683-.973.487-.842a6.806 6.806 0 1 0-11.791 0l.486.842-1.683.973-.487-.841A8.7 8.7 0 0 1 3.25 11"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.403 14.44A6.75 6.75 0 0 0 5.25 21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75 6.75 6.75 0 0 0-5.153-6.56A4.251 4.251 0 0 0 12 6.25a4.25 4.25 0 0 0-1.597 8.19"
      />
    </svg>
  );
};
export default UserSharing;
