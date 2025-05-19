import React from "react";
const EditRoad: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3v18M16 3v7.5M9.5 3v4M9.5 10v4M9.5 17v4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 19.998H13v-2.5l5.494-5.493a.01.01 0 0 1 .015 0l2.486 2.486a.01.01 0 0 1 0 .014z"
      />
    </svg>
  );
};
export default EditRoad;
