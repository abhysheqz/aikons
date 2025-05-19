import React from "react";
const DimSum_01: React.FC<
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
        d="m16.668 13.038 5.795-3.265-.743-1.303-5.633 3.173q.36.676.581 1.395"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.224 5.65.623.934c.293.44.657.485.96.371.345-.13.65-.488.669-.982l1.497.024c.002.552.439 2.158 2.326 4.426l.01.011.01.013c.288.377.546.779.768 1.196l-8.222 4.706.743 1.302 8.06-4.613c.197.644.305 1.306.305 1.962 0 3.83-3.556 6.75-7.725 6.75C5.083 21.75 1.5 18.833 1.5 15c0-1.595.633-3.22 1.654-4.553l.01-.013.01-.011C5.06 8.154 5.496 6.548 5.5 5.996l1.496-.024c.019.499.324.855.66.983.292.111.65.07.946-.372zm-2.11 4.434-.997 1.5 1.245.832.999-1.5zm2.996.832.998 1.5 1.246-.832-.998-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m21.687 2.25.813 1.26-6.948 4.701a9.5 9.5 0 0 1-.748-1.301z"
      />
    </svg>
  );
};
export default DimSum_01;
