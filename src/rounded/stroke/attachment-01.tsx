import React from "react";
const Attachment_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.823 12 4.28 10.456a4.367 4.367 0 1 1 6.177-6.177l9.265 9.265a4.368 4.368 0 0 1-6.177 6.177l-3.474-3.475a2.73 2.73 0 0 1 3.86-3.86l1.93 1.93"
      />
    </svg>
  );
};
export default Attachment_01;
