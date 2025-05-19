import React from "react";
const CheckmarkBadge_03: React.FC<
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
        d="M11.328 2.406a1.75 1.75 0 0 1 2.24 0l2.152 1.792h4.607l.378-.419a1 1 0 1 1 1.487 1.338c-.563.626-.994 1.1-.994 1.1.223-.533.378-1.683-.87-2.019l-7.918 8.798-2.255-2.255a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.45-.038l8.007-8.896v3.556l1.293 1.551a1.75 1.75 0 0 1 0 2.24l-1.793 2.152v3.228a1.75 1.75 0 0 1-1.75 1.75H15.72l-2.151 1.793a1.75 1.75 0 0 1-2.241 0l-2.151-1.793H5.948a1.75 1.75 0 0 1-1.75-1.75V15.72l-1.792-2.151a1.75 1.75 0 0 1 0-2.241l1.792-2.151V5.948c0-.966.784-1.75 1.75-1.75h3.229z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkBadge_03;
