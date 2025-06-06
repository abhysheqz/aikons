import React from "react";
const Github: React.FC<
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
        d="M2 17.023c1.63 3.393 4.294 4.606 7.5 3.721"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.997 22.023v-3.427c.003-1.073.503-2.073.503-2.073-3.584-1.16-5.5-3.5-5.5-6.5 0-2 .5-3 1.287-3.966C5.5 4.023 6.5 2.023 6.5 2.023c1.5 0 2.859.534 4 1.5 1.59-.794 4.41-.794 6 0 1.141-.966 2.5-1.5 4-1.5 0 0 1 2 .213 4.034C21.5 7.023 22 8.023 22 10.023c0 3-1.916 5.34-5.5 6.5 0 0 .5 1 .503 2.073v3.427"
      />
    </svg>
  );
};
export default Github;
