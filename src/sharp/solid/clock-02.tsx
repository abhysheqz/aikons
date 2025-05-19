import React from "react";
const Clock_02: React.FC<
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
        d="M1.826 8.188C3.763 3.08 9.317.176 14.728 1.62c5.762 1.538 9.194 7.43 7.65 13.168-1.543 5.737-7.47 9.13-13.232 7.592a10.79 10.79 0 0 1-7.898-8.782l1.933-.295a8.83 8.83 0 0 0 6.47 7.188c4.729 1.263 9.578-1.524 10.839-6.21 1.26-4.685-1.54-9.51-6.267-10.772a8.87 8.87 0 0 0-9.935 4.048h1.349v1.955H2.74a.978.978 0 0 1-.914-1.324"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7h2v4.586l2.207 2.207-1.414 1.414L11 12.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_02;
