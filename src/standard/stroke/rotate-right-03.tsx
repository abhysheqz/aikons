import React from "react";
const RotateRight_03: React.FC<
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
        d="m8.878 22 1.138-.663 1.557.24c.786.12 1.59-.032 2.278-.434l3.107-1.809a1.775 1.775 0 0 0 .641-2.414l-.437-.765M4.5 14.35l1.138-.663 3.034-6.471a1.52 1.52 0 0 1 1.652-.97c.852.13 1.426.945 1.267 1.799l-.645 2.55 7.583-4.417a1.307 1.307 0 0 1 1.795.485 1.33 1.33 0 0 1-.481 1.81l-3.792 2.208m0 0-1.516.884m1.516-.883.438.765a1.775 1.775 0 0 1-.64 2.413l-.76.442m.556 2.737.758-.442a1.775 1.775 0 0 0 .641-2.413l-.437-.765M3.5 6c.903-1.778 2.24-2.945 4.072-3.632 1.276-.477 2.695-.462 3.99-.04.976.276 2.234 1.09 3.038 2.088M15.004 2v3.003h-2.51"
      />
    </svg>
  );
};
export default RotateRight_03;
