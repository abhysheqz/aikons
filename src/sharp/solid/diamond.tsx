import React from "react";
const Diamond: React.FC<
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
        d="M11.47 1.47a.75.75 0 0 1 1.06 0l10 10a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-10-10a.75.75 0 0 1 0-1.06z"
      />
    </svg>
  );
};
export default Diamond;
