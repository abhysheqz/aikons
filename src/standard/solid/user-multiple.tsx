import React from "react";
const UserMultiple: React.FC<
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
        d="M7.403 14.44A6.75 6.75 0 0 0 2.25 21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75 6.75 6.75 0 0 0-5.153-6.56A4.251 4.251 0 0 0 9 6.25a4.25 4.25 0 0 0-1.597 8.19"
      />
      <path
        fill="currentColor"
        d="M10.985 5.102a5.752 5.752 0 0 1 2.512 8.98 8.3 8.3 0 0 1 3.088 3.668H21a.75.75 0 0 0 .75-.75 6.75 6.75 0 0 0-5.153-6.56 4.251 4.251 0 1 0-5.612-5.338"
      />
    </svg>
  );
};
export default UserMultiple;
