import React from "react";
const Id: React.FC<
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
        d="M9.008 3.892a3.016 3.016 0 0 1 5.984 0l.182 1.453a1.25 1.25 0 0 1-1.24 1.405h-3.868a1.25 1.25 0 0 1-1.24-1.405zM12 2.75c-.764 0-1.41.57-1.504 1.328L10.35 5.25h3.3l-.146-1.172A1.516 1.516 0 0 0 12 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.264 3.25a.75.75 0 0 0-.745.836l.134 1.164h-3.306l.136-1.163a.75.75 0 0 0-.745-.837H5.5A2.75 2.75 0 0 0 2.75 6v14a2.75 2.75 0 0 0 2.75 2.75h13A2.75 2.75 0 0 0 21.25 20V6a2.75 2.75 0 0 0-2.75-2.75zm-2.27 6c-1.509 0-2.698 1.25-2.698 2.75s1.189 2.75 2.697 2.75 2.698-1.25 2.698-2.75-1.19-2.75-2.698-2.75m4.065 8.25c-2.145-2.394-6.013-2.268-8.109-.01a.75.75 0 0 0 .55 1.26h7a.75.75 0 0 0 .559-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Id;
