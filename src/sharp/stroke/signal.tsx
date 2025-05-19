import React from "react";
const Signal: React.FC<
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
        strokeDasharray="3 3"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.036 21.929c5.503 0 9.964-4.462 9.964-9.965S17.539 2 12.036 2 2.07 6.461 2.07 11.964c0 1.815-.35 3.517.499 4.982L2.07 21.93l4.983-.499c1.465.848 3.167.499 4.982.499Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.015 18.982a6.997 6.997 0 1 0-6.996-6.997c0 1.321.303 2.447.94 3.501l-.937 3.484a.007.007 0 0 0 .008.009l3.467-.932c1.058.644 2.189.935 3.518.935Z"
      />
    </svg>
  );
};
export default Signal;
