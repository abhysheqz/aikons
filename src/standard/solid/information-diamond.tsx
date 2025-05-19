import React from "react";
const InformationDiamond: React.FC<
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
        d="M10.879 1.957a1.75 1.75 0 0 1 2.24 0l2.152 1.793h3.228c.967 0 1.75.783 1.75 1.75v3.228l1.793 2.152a1.75 1.75 0 0 1 0 2.24l-1.793 2.152V18.5a1.75 1.75 0 0 1-1.75 1.75h-3.228l-2.152 1.793a1.75 1.75 0 0 1-2.24 0L8.728 20.25H5.499a1.75 1.75 0 0 1-1.75-1.75v-3.229l-1.793-2.15a1.75 1.75 0 0 1 0-2.241L3.75 8.728V5.5c0-.967.784-1.75 1.75-1.75h3.229zM10.5 11.5a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 1.5 1.5v4.5a1 1 0 1 1-2 0v-4a1 1 0 0 1-1-1m1.5-4a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InformationDiamond;
