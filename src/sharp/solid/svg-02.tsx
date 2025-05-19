import React from "react";
const Svg_02: React.FC<
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
        d="M21.75 15.75h-1.5v-1h-2v3.5h2v-.5h-1v-1.5h2.5v3.5h-5v-6.5h5zM10.75 13.25v1.5h-2.5v1h2.5v4h-4v-1.5h2.5v-1h-2.5v-4zM14.817 13.251h1.617l-1.876 6.499h-1.616l-1.876-6.499h1.519l1.165 3.972z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h17.5V21H5.5v-9h14.25V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Svg_02;
