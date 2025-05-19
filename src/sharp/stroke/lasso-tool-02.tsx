import React from "react";
const LassoTool_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.985 17.007c0 1.105-1.116 2-2.493 2S5 18.113 5 17.008s1.116-2.001 2.492-2.001c1.377 0 2.493.896 2.493 2Zm0 0c.062.772.02 3.501-2.983 5.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.472 15.353 1.991 2.017a.01.01 0 0 1 .013-.011l10.518 3.981 9.451-3.961a.01.01 0 0 1 .014.01l-1.99 12.954-9.625 2.921"
      />
    </svg>
  );
};
export default LassoTool_02;
