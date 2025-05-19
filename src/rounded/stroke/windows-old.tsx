import React from "react";
const WindowsOld: React.FC<
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
        d="m14.014 3.995-6 .995c-2.395.397-3.592.596-4.303 1.431S3 8.464 3 10.879v2.242c0 2.415 0 3.623.71 4.458.712.835 1.91 1.034 4.304 1.43l6 .996c3.243.537 4.864.806 5.925-.088S21 17.387 21 14.116V9.884c0-3.271 0-4.907-1.06-5.801-1.062-.894-2.683-.625-5.926-.088M11 4.5v15M3 12h18"
      />
    </svg>
  );
};
export default WindowsOld;
