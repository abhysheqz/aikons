import React from "react";
const Drag_01: React.FC<
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
        d="M17 3.75h3.403M19 5.75l2-2-2-2M7 3.75H3.59m1.41-2-2 2 2 2M13.506 9.27V3.52c0-.978-.79-1.77-1.763-1.77-.974 0-1.764.792-1.764 1.77v8.667m3.527-2.916c1.481-.052 2.61.083 4.187.734 1.208.499 2.486 1.142 3.024 2.337.543 1.207.26 2.644-.473 4.501l-1.387 2.949v1.957m-5.35-12.478v.74M9.874 21.75v-1.934l-4.473-6.002c-.336-.45-.515-1.036-.324-1.565q.024-.068.053-.134c.237-.543.717-1.008 1.3-1.098a1.6 1.6 0 0 1 .457 0c.467.065.858.367 1.18.712l1.915 2.056v-2.34"
      />
    </svg>
  );
};
export default Drag_01;
