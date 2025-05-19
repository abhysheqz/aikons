import React from "react";
const LayoutTable_02: React.FC<
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
        d="M9.996 21.75V16H21.75v5a.75.75 0 0 1-.75.75zM7.996 21.75H3a.75.75 0 0 1-.75-.75v-5h5.746zM2.25 14h5.746v-4H2.25zM2.25 8h5.746V2.25H3a.75.75 0 0 0-.75.75zM9.996 2.25V8H21.75V3a.75.75 0 0 0-.75-.75zM21.75 10H9.996v4H21.75z"
      />
    </svg>
  );
};
export default LayoutTable_02;
