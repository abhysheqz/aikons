import React from "react";
const Monas: React.FC<
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
        d="M12.954 7.014c.494-.502.988-1.39.988-2.006C13.942 3.624 11.965 2 11.965 2S9.988 3.624 9.988 5.008c0 .617.494 1.504.988 2.006M8.505 7.014h6.92M10.976 7.014 9 16.54m3.954-9.526 1.978 9.526M12.045 22v-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.989 16.995H5.01a.01.01 0 0 0-.008.015L7.999 22h7.921l3.077-4.99c.004-.006 0-.015-.008-.015Z"
      />
    </svg>
  );
};
export default Monas;
