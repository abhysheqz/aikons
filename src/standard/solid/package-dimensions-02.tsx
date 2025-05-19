import React from "react";
const PackageDimensions_02: React.FC<
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
        d="M7 1.25a.75.75 0 0 1 .75.75v.25h12.5V2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25H7.75V4a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 7 1.25m6.705 4.06a.75.75 0 0 1 .59 0l7 3a.75.75 0 0 1 .455.69v10a.75.75 0 0 1-.455.69l-7 3a.75.75 0 0 1-.59 0l-7-3A.75.75 0 0 1 6.25 19V9c0-.3.179-.571.455-.69zM14 11.186 19.096 9 17.5 8.316 12.404 10.5zm-4.25-.19V13a.75.75 0 0 0 1.5 0v-1.362l2 .857v8.368l-5.5-2.357v-8.368zm.75-1.31L15.596 7.5 14 6.816 8.904 9zM3 6.25a.75.75 0 0 0 0 1.5h.25v12.5H3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-.25V7.75H5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageDimensions_02;
