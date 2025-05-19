import React from "react";
const University: React.FC<
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
        d="M5.5 8.75h1.25V22c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.75h1.25v-1.5h-13zM13 22v-3h-2v3zm-3.25-9.5V11h1.5v1.5zm3 0V11h1.5v1.5zm-3 2.5v1.5h1.5V15zm3 0v1.5h1.5V15z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.5 22.75H1v-1.5h21.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 13.75V22h1.5v-8.25H7v-1.5H1v1.5zM20.25 13.75V22h1.5v-8.25H23v-1.5h-6v1.5zM11.25 2a.75.75 0 0 1 .75-.75h4.75v3.482h-4V8h-1.5z"
      />
    </svg>
  );
};
export default University;
