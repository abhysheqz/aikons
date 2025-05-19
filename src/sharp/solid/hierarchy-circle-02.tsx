import React from "react";
const HierarchyCircle_02: React.FC<
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
        d="M5 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M19 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.292 12.293A1 1 0 0 1 4.999 12H19a1 1 0 0 1 1 1v3h-2v-2H6v2H4l-.001-3a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5"
      />
    </svg>
  );
};
export default HierarchyCircle_02;
