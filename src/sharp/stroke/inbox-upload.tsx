import React from "react";
const InboxUpload: React.FC<
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
        d="M17 3h4v18H3V3h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 14h-6a3 3 0 1 1-6 0H3M12 11V3.322M9 6l3-3 3 3"
      />
    </svg>
  );
};
export default InboxUpload;
