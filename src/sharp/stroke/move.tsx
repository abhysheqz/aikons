import React from "react";
const Move: React.FC<
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
        d="M9 12.008H3.724m2.27-3-2.995 3 3.003 3.001m8.979-3h5.368m-2.375-3.031L21 12.008l-2.998 2.988m-6.004-.498v5.865M8.999 17.98l2.999 3.018 3.005-2.995m-3.021-9.025V3.592m3 2.412-3-3.002-2.948 3.002"
      />
    </svg>
  );
};
export default Move;
