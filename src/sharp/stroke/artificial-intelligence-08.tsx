import React from "react";
const ArtificialIntelligence_08: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.1 5.5h.8l1.76 5.84 5.84 1.76v.8l-5.84 1.76-1.76 5.84h-.8l-1.76-5.84L2.5 13.9v-.8l5.84-1.76zM18.325 5.125h1.35m-.8-2.625-.55 1.825-1.825.55v.25l1.825.55.55 1.825h.25l.55-1.825 1.825-.55v-.25l-1.825-.55-.55-1.825z"
      />
    </svg>
  );
};
export default ArtificialIntelligence_08;
