import React from "react";
const SourceCode: React.FC<
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
        d="M17.35 7.24a1 1 0 0 1 1.41.11l3 3.5a1 1 0 0 1 0 1.3l-3 3.5a1 1 0 0 1-1.52-1.3l2.443-2.85-2.442-2.85a1 1 0 0 1 .108-1.41M6.65 7.24a1 1 0 0 1 .11 1.41L4.316 11.5l2.442 2.85a1 1 0 0 1-1.518 1.3l-3-3.5a1 1 0 0 1 0-1.3l3-3.5a1 1 0 0 1 1.41-.11M14.799 3.046a1 1 0 0 1 .656 1.253l-5 16a1 1 0 1 1-1.91-.597l5-16a1 1 0 0 1 1.254-.656"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SourceCode;
