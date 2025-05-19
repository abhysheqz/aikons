import React from "react";
const SchoolReportCard: React.FC<
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
      <rect
        width={16}
        height={20}
        x={4}
        y={2}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={2}
      />
      <path
        fill="currentColor"
        d="M14.294 13.252a.75.75 0 0 0 1.412-.504zM12.5 6l.706-.252a.75.75 0 0 0-.706-.498zm-4.206 6.748a.75.75 0 0 0 1.412.504zM11.5 6v-.75c-.317 0-.6.2-.706.498zm4.206 6.748-2.5-7-1.412.504 2.5 7zM12.5 5.25h-1v1.5h1zm-1.706.498-2.5 7 1.412.504 2.5-7zM10 11.25h4v-1.5h-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8"
      />
    </svg>
  );
};
export default SchoolReportCard;
