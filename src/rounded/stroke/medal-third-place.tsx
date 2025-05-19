import React from "react";
const MedalThirdPlace: React.FC<
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
        d="M10.5 14c.326-.653.779-1 1.5-1 .73 0 1.5.456 1.5 1.25 0 .69-.56 1.25-1.25 1.25.69 0 1.25.56 1.25 1.25 0 .794-.77 1.25-1.5 1.25-.721 0-1.174-.347-1.5-1"
      />
      <circle
        cx={12}
        cy={15.5}
        r={6.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 9.5 5.5 2M15 9.5 18.5 2M15 2l-1 2.5M12.5 9l-3-7"
      />
    </svg>
  );
};
export default MedalThirdPlace;
