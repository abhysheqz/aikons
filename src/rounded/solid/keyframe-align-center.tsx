import React from "react";
const KeyframeAlignCenter: React.FC<
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
        d="M10.849 7.458C11.119 7.23 11.496 7 12 7s.88.23 1.151.458c.232.196.473.466.706.728l.036.04 1.3 1.461.035.04c.321.36.62.697.832 1.005.234.34.44.753.44 1.268s-.206.929-.44 1.268c-.211.307-.511.644-.832 1.005l-.035.04-1.3 1.46-.036.04c-.233.263-.473.533-.706.729-.27.228-.647.458-1.151.458s-.88-.23-1.151-.458c-.232-.196-.473-.466-.706-.729l-.036-.04-1.3-1.46-.035-.04c-.321-.36-.62-.697-.832-1.005-.234-.34-.44-.753-.44-1.268s.206-.929.44-1.268c.212-.307.511-.644.832-1.005l.035-.04 1.3-1.46.036-.04c.233-.262.473-.533.706-.729"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M18 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeAlignCenter;
