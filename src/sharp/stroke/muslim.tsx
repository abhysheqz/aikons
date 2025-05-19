import React from "react";
const Muslim: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 9.058.421-2.155C16.916 4.366 15.023 2 12.5 2S8.084 4.366 8.579 6.903l.42 2.155C9.334 10.768 10.8 12 12.5 12c1.702 0 3.167-1.231 3.5-2.942ZM14.5 14l7 3v5m-11-8-7 3v5M12.5 16v6M8.5 6h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.492 11.492v2.512l2.008 2 2-1.988v-2.53"
      />
    </svg>
  );
};
export default Muslim;
