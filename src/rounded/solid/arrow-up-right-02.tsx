import React from "react";
const ArrowUpRight_02: React.FC<
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
        d="M18.377 5.624c-.369-.368-.829-.472-1.264-.494-.402-.02-.901.025-1.463.076l-1.354.123c-.954.087-1.752.16-2.338.3s-1.238.41-1.492 1.115c-.255.703.072 1.328.432 1.811.343.46.872.994 1.505 1.627l-6.985 6.986a1 1 0 1 0 1.414 1.414l6.986-6.985c.633.633 1.169 1.163 1.628 1.506.483.36 1.108.687 1.812.433.703-.255.974-.907 1.114-1.493.14-.585.213-1.384.3-2.338l.123-1.354c.051-.562.096-1.061.076-1.463-.022-.435-.126-.895-.494-1.264"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpRight_02;
