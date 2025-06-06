import React from "react";
const Waze: React.FC<
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
        d="M18.5 8.09v1.965h-2V8.091zM11.5 8.09v1.965h-2V8.091z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.648 14.684a5 5 0 0 1-.77-.837l1.633-1.13c.098.135.252.32.466.506.418.364 1.065.73 2.023.73.957 0 1.604-.366 2.023-.73.213-.185.367-.37.465-.506l1.632 1.13c-.167.23-.42.534-.768.837-.707.614-1.81 1.224-3.352 1.224-1.543 0-2.646-.61-3.352-1.224M6 19.818c0-1.62 1.343-2.932 3-2.932s3 1.313 3 2.932-1.343 2.932-3 2.932-3-1.313-3-2.932"
      />
      <path
        fill="currentColor"
        d="M13.11 3.205c-4.26 0-7.713 3.5-7.713 7.818v.05c0 .877.002 2.875-1.632 4.2.915 1.534 2.322 2.417 3.964 2.928l-.565 1.868c-2.26-.703-4.376-2.087-5.54-4.74l-.374-.854.824-.417c1.351-.685 1.395-1.976 1.395-3.035 0-5.398 4.316-9.773 9.64-9.773s9.641 4.375 9.641 9.773-4.316 9.773-9.64 9.773c-.633 0-1.302-.014-1.988-.056l.118-1.951c.635.04 1.263.052 1.87.052 4.259 0 7.712-3.5 7.712-7.818s-3.453-7.818-7.712-7.818"
      />
      <path
        fill="currentColor"
        d="m18.169 17.03.576.403A2.91 2.91 0 0 1 20 19.818c0 1.62-1.343 2.932-3 2.932s-3-1.313-3-2.932q0-.166.019-.33l.079-.689.692-.154a8 8 0 0 0 2.799-1.217z"
      />
    </svg>
  );
};
export default Waze;
