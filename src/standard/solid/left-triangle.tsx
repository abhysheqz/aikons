import React from "react";
const LeftTriangle: React.FC<
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
        fillRule="evenodd"
        d="M17.589 3.001c1.26-1.26 3.416-.365 3.413 1.418L21 7.497a1 1 0 1 1-2-.002l.003-3.079L4.414 18.994h3.084a1 1 0 1 1 0 2H4.415c-1.782 0-2.674-2.155-1.414-3.415zm3.416 6.994h.993a1 1 0 1 1 0 2h-.992v7a2 2 0 0 1-2 2h-7.003V22a1 1 0 0 1-2 0v-1.005a2 2 0 0 1 2-2h1.995V17a3 3 0 0 1 3-3h2.008v-2.005a2 2 0 0 1 1.999-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftTriangle;
