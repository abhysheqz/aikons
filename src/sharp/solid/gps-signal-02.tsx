import React from "react";
const GpsSignal_02: React.FC<
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
        fillRule="evenodd"
        d="m21.33 1.25 1.42 1.42-1.414 1.414-1.42-1.42zm-2.497 2.498 1.42 1.42-1.415 1.413-1.42-1.42zm-2.497 2.497 1.42 1.42-1.415 1.414-1.42-1.42zM13.264 10.736a2.515 2.515 0 0 0-3.557 0L8.293 9.322a4.515 4.515 0 0 1 6.385 6.385l-1.415-1.415a2.515 2.515 0 0 0 0-3.556"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m19.095 19.626-.599.528a10.34 10.34 0 0 1-6.866 2.596c-5.733 0-10.38-4.648-10.38-10.38 0-2.633.98-5.037 2.595-6.867l.528-.598z"
      />
    </svg>
  );
};
export default GpsSignal_02;
