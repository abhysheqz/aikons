import React from "react";
const GreenHouse: React.FC<
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
        d="M3.513 20.008 2.039 9.006l10.004-7.004a.01.01 0 0 1 .01 0l9.983 7.004-2.425 12.988a.01.01 0 0 1-.01.009H9.298c-1.782 0-4.3-1.558-1.049-4.955l.35-.276m0 0 3.945-3.105M8.6 16.772c1.285 2.364 4.46 1.315 5.886.494 5.113-3.855 2.251-9.64-.74-10.306-.009-.002-.016.006-.011.014.47.86 1.822 2.897-3.297 4.283-1.346.62-3.596 2.592-1.838 5.515Z"
      />
    </svg>
  );
};
export default GreenHouse;
