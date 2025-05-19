import React from "react";
const Attachment: React.FC<
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
        d="M19.5 12v1.5a7.5 7.5 0 0 1-15 0V8a5 5 0 0 1 10 0v5.5a2.5 2.5 0 0 1-5 0v-4"
      />
    </svg>
  );
};
export default Attachment;
