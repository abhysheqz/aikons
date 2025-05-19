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
        d="m18.866 11.5-2.442-2.848 1.518-1.302L21.5 11.5l-3.558 4.152-1.518-1.302zM6.057 7.35l1.519 1.3-2.442 2.85 2.442 2.85-1.519 1.3L2.5 11.5zM8.25 19.904 13.84 3.5l1.91.597L10.157 20.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SourceCode;
