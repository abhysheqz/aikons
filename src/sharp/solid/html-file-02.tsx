import React from "react";
const HtmlFile_02: React.FC<
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
        d="m1.25 22.75.001-21.5h10.11l7.389 7.38V12H3v9h15.75v1.75zM16.8 9.46l-6.238-6.255V9.46zM5.75 15.75v-2.5h-1.5v6.5h1.5v-2.5h1.5v2.5h1.5v-6.5h-1.5v2.5zm7.5-2.5h-4v1.5h1.25v5H12v-5h1.25zm2.214 0H13.75v6.5h1.5v-3.573l1 2 1-2v3.573h1.5v-6.5h-1.713l-.787 1.573zm7.286 5h-2v-5h-1.5v6.5h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HtmlFile_02;
