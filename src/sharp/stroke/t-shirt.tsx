import React from "react";
const TShirt: React.FC<
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
        strokeWidth={1.5}
        d="M5.999 11.005v10.993h12V11.005"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m6.499 5.508 5.5 3.998 5.5-3.998"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.499 2.51 1 5.997m4-5.997-1 5.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.997 13.97-3.994-1.995a.01.01 0 0 1-.005-.012l1.515-4.97.005-.007 2.978-1.483 1.506-2.501c1.358-.82 3.063-1 3.982-1s2.62.17 4.022 1.011l1.51 2.49 2.968 1.476.005.006 1.513 4.98a.01.01 0 0 1-.005.01l-4.051 2.02"
      />
    </svg>
  );
};
export default TShirt;
