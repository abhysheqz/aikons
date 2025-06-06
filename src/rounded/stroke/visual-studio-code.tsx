import React from "react";
const VisualStudioCode: React.FC<
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
        d="M17.016 16.5v4.782c0 .32-.21.592-.499.684m.499-5.466L10.877 12m6.139 4.5v-9m-9.27 2.205L4.252 7.03a.995.995 0 0 0-1.31.088l-.649.652c-.398.4-.388 1.05.023 1.436L5.283 12m2.464-2.295L10.877 12m-3.13-2.295 8.066-7.513a.72.72 0 0 1 .704-.158M10.877 12l6.139-4.5m0 0V2.718c0-.32-.21-.592-.499-.684m-8.77 12.26L4.25 16.97a.995.995 0 0 1-1.31-.088l-.649-.652c-.398-.4-.388-1.05.023-1.436L5.283 12m2.464 2.295 8.066 7.513a.71.71 0 0 0 .704.158m-8.77-7.671L5.283 12m11.234-9.966 4.894 2.201a1 1 0 0 1 .59.913v13.705a1 1 0 0 1-.59.912l-4.894 2.201"
      />
    </svg>
  );
};
export default VisualStudioCode;
