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
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4a4 4 0 0 0-4 4v5.5a6.5 6.5 0 0 0 13 0V12a1 1 0 1 1 2 0v1.5a8.5 8.5 0 0 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 1 1-7 0v-4a1 1 0 0 1 2 0v4a1.5 1.5 0 0 0 3 0V8a4 4 0 0 0-4-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Attachment;
