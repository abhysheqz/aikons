import React from "react";
const Attachment_02: React.FC<
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
        d="M8 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-4.5a2.5 2.5 0 0 1 5 0V16"
      />
    </svg>
  );
};
export default Attachment_02;
