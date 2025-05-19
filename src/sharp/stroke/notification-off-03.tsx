import React from "react";
const NotificationOff_03: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M22 22 2 2" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 21c.796.622 1.848 1 3 1s2.204-.378 3-1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.076 3.875a7.48 7.48 0 0 1 4.96-1.873c4.143 0 7.502 3.356 7.502 7.496v2.911l1.92 3.419a.1.1 0 0 1-.023.125q-.645.527-1.33.951M5.628 5.6a7.46 7.46 0 0 0-1.093 3.9v2.91L2.54 15.854a.1.1 0 0 0 .016.12c2.41 2.27 9.465 4.33 15.418 1.995"
      />
    </svg>
  );
};
export default NotificationOff_03;
