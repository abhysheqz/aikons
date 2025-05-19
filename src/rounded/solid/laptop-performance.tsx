import React from "react";
const LaptopPerformance: React.FC<
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
        d="M21.818 17.25H2.183L.91 19.393l-.021.04c-.446.864.22 1.817 1.127 1.817h19.968c.907 0 1.573-.953 1.128-1.817l-.022-.04zM15.554 2.75c1.132 0 2.058 0 2.789.099.764.102 1.426.324 1.955.853s.75 1.191.854 1.955c.098.731.098 1.657.098 2.79v7.303H2.75V8.446c0-1.132 0-2.058.099-2.789.102-.764.325-1.426.853-1.955.529-.529 1.191-.75 1.955-.853.731-.099 1.657-.099 2.79-.099zM12.92 5.753a1 1 0 0 0-.849.626l-1.25 3.128-.463-.772A1 1 0 0 0 9.5 8.25h-2a1 1 0 0 0 0 2h1.434l1.209 2.015a1 1 0 0 0 1.786-.144l1.25-3.128.464.772a1 1 0 0 0 .857.485h2a1 1 0 1 0 0-2h-1.434l-1.209-2.015a1 1 0 0 0-.937-.482"
      />
    </svg>
  );
};
export default LaptopPerformance;
