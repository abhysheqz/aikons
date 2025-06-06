import React from "react";
const Vine: React.FC<
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
        d="M10.546 21.997C4.793 18.153 2.716 8.957 3.03 4.414l3.54.14c-.452 5.57 2.706 11.107 4.433 13.029 1.744-1.034 3.393-3.012 3.689-3.83-3.69-1.017-4.538-4.446-4.515-5.987-.157-2.02 1.145-5.873 5.34-5.764 3.977.104 4.9 4.916 4.237 7.185l-3.002-.939c.117-3.351-2.801-2.942-3.04-1.33-.614 4.139 3.56 4.8 7.282 4.594v3.061h-2.942c-1.93 3.591-5.712 6.482-7.507 7.424Z"
      />
    </svg>
  );
};
export default Vine;
