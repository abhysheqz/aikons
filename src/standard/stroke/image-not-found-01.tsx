import React from "react";
const ImageNotFound_01: React.FC<
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
        d="M15.5 8.002a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1M2 2l20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 6.5v13.002a2 2 0 0 0 2 2h13.002m3.413-.587c.361-.362.585-.861.585-1.413v-15a2 2 0 0 0-2-2h-15c-.552 0-1.051.223-1.413.585"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 16.502 7.502 11.5M21.5 16.502l-2.97-2.97a1.81 1.81 0 0 0-2.56 0l-1.219 1.219"
      />
    </svg>
  );
};
export default ImageNotFound_01;
