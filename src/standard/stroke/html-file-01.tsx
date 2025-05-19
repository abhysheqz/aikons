import React from "react";
const HtmlFile_01: React.FC<
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
        d="M5.5 17v2.5m0 0V22m0-2.5h-3m0-2.5v2.5m0 0V22M9 17v5m0-5H7.5M9 17h1.5m2 5v-5l2 2.5 2-2.5v5m2.5-5v5h2.5M3.5 13.998l.02-10.002A2 2 0 0 1 5.522 2l6.974.008L19.5 8.995l-.008 5.003M12.5 2.498v4.5a2 2 0 0 0 2 2H19"
      />
    </svg>
  );
};
export default HtmlFile_01;
