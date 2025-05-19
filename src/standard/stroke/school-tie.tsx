import React from "react";
const SchoolTie: React.FC<
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
        d="M9.86 2h5.28a.86.86 0 0 1 .816 1.132l-.5 1.5A2 2 0 0 1 13.559 6h-2.117a2 2 0 0 1-1.898-1.368l-.5-1.5A.86.86 0 0 1 9.86 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 6 8.61 17.471a1 1 0 0 0 .272.911L12.5 22l3.618-3.618a1 1 0 0 0 .272-.911L14 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11 6.5-5.466 5.922a1 1 0 0 0-.098 1.233l.887 1.33a1 1 0 0 0 1.54.152L9.5 13.5"
      />
    </svg>
  );
};
export default SchoolTie;
