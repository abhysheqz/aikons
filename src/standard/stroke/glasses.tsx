import React from "react";
const Glasses: React.FC<
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
        d="m22 14-3.906-8.68a1 1 0 0 0-1.619-.296L16 5.499M2 14l3.905-8.679a1 1 0 0 1 1.62-.297L8 5.5M10.5 15.49h3M14.5 14H22l-1 2v3a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M10.5 15a1 1 0 0 0-1-1H2l1 2v3a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1z"
      />
    </svg>
  );
};
export default Glasses;
