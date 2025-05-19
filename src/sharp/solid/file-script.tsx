import React from "react";
const FileScript: React.FC<
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
        d="m14.875 16.189-2.125 2.656 2.125 2.656-1.562 1.25-3.124-3.906 3.124-3.906zm2.75-1.25 3.125 3.906-3.124 3.905-1.562-1.25 2.125-2.655-2.125-2.656z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 1.25v21.5h8.462l-3.125-3.906 4.53-5.663 2.352 1.882 2.351-1.882 2.93 3.662V8.629l-7.39-7.38zm9.312 1.955 6.237 6.255h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileScript;
