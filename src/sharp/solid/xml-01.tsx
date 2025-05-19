import React from "react";
const Xml_01: React.FC<
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
        d="M10.04 15.25h1.714l1.036 2.073 1.037-2.073h1.713v7.5h-1.5v-4.573l-1.25 2.5-1.25-2.5v4.573h-1.5zM17.75 15.25v6h3v1.5h-4.5v-7.5zM4.75 15.25l1.54 2.398 1.49-2.398h1.55L7.191 19l2.14 3.75H7.78l-1.49-2.398-1.54 2.398h-1.5L5.389 19 3.25 15.25zM3.25 13.75l.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xml_01;
