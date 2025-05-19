import React from "react";
const ArrowShrink: React.FC<
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
        d="M9.996 5v4.996H4.998M9.996 18.99v-4.997H4.998M13.995 18.99v-4.997h4.999M13.995 5v4.996h4.999"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.988 3.001 14.04 9.944M9.945 9.944 3 3.001M21.002 20.999 14.1 14.083M9.72 14.269l-6.719 6.716"
      />
    </svg>
  );
};
export default ArrowShrink;
