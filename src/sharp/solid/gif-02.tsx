import React from "react";
const Gif_02: React.FC<
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
        d="M6.25 13.25h5v1.5h-3.5v3.5h2v-1h-1v-1.5h2.5v4h-5zm6 0h4.5v1.5h-1.5v3.5h1.5v1.5h-4.5v-1.5h1.5v-3.5h-1.5zm5.5 0h4v1.5h-2.5v1h2v1.5h-2v2.5h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h17.5V21H5v-9h14.75V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gif_02;
