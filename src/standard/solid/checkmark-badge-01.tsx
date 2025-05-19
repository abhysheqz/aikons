import React from "react";
const CheckmarkBadge_01: React.FC<
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
        d="M13.569 2.406a1.75 1.75 0 0 0-2.241 0L9.177 4.198H5.948a1.75 1.75 0 0 0-1.75 1.75v3.229l-1.792 2.151a1.75 1.75 0 0 0 0 2.24l1.792 2.152v3.228c0 .967.784 1.75 1.75 1.75h3.229l2.151 1.793a1.75 1.75 0 0 0 2.24 0l2.152-1.793h3.228a1.75 1.75 0 0 0 1.75-1.75V15.72l1.793-2.151a1.75 1.75 0 0 0 0-2.241l-1.793-2.151V5.948a1.75 1.75 0 0 0-1.75-1.75H15.72zm3.153 8.176a1 1 0 0 0-1.548-1.267l-3.8 4.645-1.219-1.219a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.481-.074z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkBadge_01;
