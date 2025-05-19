import React from "react";
const Hold_03: React.FC<
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
        d="M11.351 11.87a.45.45 0 0 0 .45-.45V3.046a1.294 1.294 0 1 1 2.588 0v9.308a.45.45 0 0 0 .9 0V4.532a1.27 1.27 0 1 1 2.54 0V13a.45.45 0 0 0 .9 0V7.154a1.26 1.26 0 1 1 2.519 0v11.345a3.75 3.75 0 0 1-3.75 3.75H9.593a2.75 2.75 0 0 1-2.318-1.27l-4.323-6.774a1.66 1.66 0 0 1-.19-1.372c.372-1.239 1.954-1.596 2.823-.638l2.163 2.388a.45.45 0 0 0 .772-.314V4.014a1.19 1.19 0 0 1 2.381 0v7.406c0 .249.202.45.45.45"
      />
    </svg>
  );
};
export default Hold_03;
