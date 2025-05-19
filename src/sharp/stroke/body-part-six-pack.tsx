import React from "react";
const BodyPartSixPack: React.FC<
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
        d="m14 7 .414.414A2 2 0 0 0 15.828 8h3.344a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 0 22 5.172V4M10 7l-.414.414A2 2 0 0 1 8.172 8H4.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 1 2 5.172V4M20.5 8l-.5 2-.692 2.423A8 8 0 0 0 19 14.62V20M3.5 8l.5 2 .692 2.423A8 8 0 0 1 5 14.62V20M15 13h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H9M15 18h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H9"
      />
    </svg>
  );
};
export default BodyPartSixPack;
