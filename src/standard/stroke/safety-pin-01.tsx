import React from "react";
const SafetyPin_01: React.FC<
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
        d="M20.252 10.454 18.102 12l-.956-1.203a1 1 0 0 1 .097-1.35l.277-.26c.865-.694.954-1.999.188-2.784-.765-.785-1.923-.662-2.712.193l-.31.325a1 1 0 0 1-1.414.033L12 5.741l1.76-1.947c1.68-2.226 4.904-2.409 6.871-.39s1.79 5.325-.38 7.05"
      />
      <circle
        cx={4.5}
        cy={19.5}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17.41 12 7M6.59 21 17 12"
      />
    </svg>
  );
};
export default SafetyPin_01;
