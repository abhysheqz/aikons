import React from "react";
const Structure_04: React.FC<
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
        d="M15 3.25A1.75 1.75 0 0 0 13.25 5v1.158l-2.5 4.286V10A1.75 1.75 0 0 0 9 8.25H3A1.75 1.75 0 0 0 1.25 10v4c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 10.75 14v-.444l2.5 4.286V19c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 22.75 19v-4A1.75 1.75 0 0 0 21 13.25h-6a1.75 1.75 0 0 0-1.558.952L12.158 12l1.284-2.202c.29.565.879.952 1.558.952h6A1.75 1.75 0 0 0 22.75 9V5A1.75 1.75 0 0 0 21 3.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_04;
