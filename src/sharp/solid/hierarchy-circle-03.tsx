import React from "react";
const HierarchyCircle_03: React.FC<
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
        d="M15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.293 4.293A1 1 0 0 1 13 4h3v2h-2v12h2v2h-3a1 1 0 0 1-1-1v-6h-2v-2h2V5a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
    </svg>
  );
};
export default HierarchyCircle_03;
