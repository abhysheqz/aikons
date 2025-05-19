import React from "react";
const OilBarrel: React.FC<
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
      <ellipse
        cx={12}
        cy={4}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={8}
        ry={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 12.5a1.5 1.5 0 0 0 1.5-1.5c0-1-1.5-2.5-1.5-2.5S10.5 10 10.5 11a1.5 1.5 0 0 0 1.5 1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 5v5.547c.637.43 1 .926 1 1.453 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.527.363-1.023 1-1.453V5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 13.5v4.047c.637.43 1 .926 1 1.453 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.527.363-1.023 1-1.453V13.5"
      />
    </svg>
  );
};
export default OilBarrel;
