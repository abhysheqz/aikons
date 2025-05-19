import React from "react";
const Mouse_21: React.FC<
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
        d="M12.75 4.214h.75a.75.75 0 0 1 .75.752v4.007a.75.75 0 0 1-.75.752h-.75v1.252h-1.5V9.725h-.75a.75.75 0 0 1-.75-.752V4.966a.75.75 0 0 1 .75-.752h.75V1.25a6.76 6.76 0 0 0-5.997 6.722c0 .652.092 1.284.265 1.883.4 1.384.531 3.047.194 4.364-.12.465-.278 1.078-.424 1.542l-.038.12.003.126C5.35 19.63 8.31 22.75 12 22.75s6.65-3.119 6.747-6.743l.003-.126-.038-.12a32 32 0 0 1-.424-1.542c-.337-1.317-.206-2.98.193-4.364a6.8 6.8 0 0 0 .266-1.884A6.76 6.76 0 0 0 12.75 1.25zM10.5 17.238v1.503h3v-1.503z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M11.25 8.222V5.717h1.5v2.505z" />
    </svg>
  );
};
export default Mouse_21;
