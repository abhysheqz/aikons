import React from "react";
const PackageDimensions_01: React.FC<
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
        d="M8.25 2.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-.25h12.5v.25a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v.25H8.25zm3.25 4.25h-2A2.75 2.75 0 0 0 6.75 9.5v10a2.75 2.75 0 0 0 2.75 2.75h10a2.75 2.75 0 0 0 2.75-2.75v-10a2.75 2.75 0 0 0-2.75-2.75h-2v4.75a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM9.75 18.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-8-11a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-.25v12.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25V8.25H2.5a.75.75 0 0 1-.75-.75m14.5-.75h-3.5v4.75c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageDimensions_01;
