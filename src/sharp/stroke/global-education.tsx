import React from "react";
const GlobalEducation: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M12 14.5V22" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12a5 5 0 0 0 0-10m0 10a5 5 0 0 1 0-10m0 10c1.105 0 2-2.239 2-5s-.895-5-2-5m0 10c-1.105 0-2-2.239-2-5s.895-5 2-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.086 4.841 2.901-.782a.01.01 0 0 1 .013.01v14.91L12.05 22 2 18.997V4.014a.01.01 0 0 1 .013-.01l3.068.837"
      />
    </svg>
  );
};
export default GlobalEducation;
