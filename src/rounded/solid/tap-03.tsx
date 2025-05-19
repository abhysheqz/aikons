import React from "react";
const Tap_03: React.FC<
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
        d="M7.96 6.283a2.403 2.403 0 0 1 2.398-2.408 2.4 2.4 0 0 1 2.397 2.408v3.834l2.2.354c.886.134 1.586.24 2.144.362.568.124 1.046.276 1.467.53 1.213.731 2.184 1.901 2.184 3.632 0 1.035-.249 1.784-.733 3.238-.331 1.002-.709 2.142-1.07 2.67a4.52 4.52 0 0 1-2.473 1.795c-.614.177-2.56.177-3.609.177-1.398 0-2.314 0-3.143-.343a5 5 0 0 1-.435-.209c-.787-.43-1.364-1.145-2.245-2.238l-3.26-4.037a2.406 2.406 0 0 1-.01-3.006 2.38 2.38 0 0 1 3.42-.323l.769.663z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.316 3.125a3 3 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 1 1 10 0 1 1 0 1 1-2 0 3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_03;
