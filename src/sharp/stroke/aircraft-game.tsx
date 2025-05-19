import React from "react";
const AircraftGame: React.FC<
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
        strokeWidth={1.5}
        d="M5.439 17c0-.262-.009-1.278-.024-1.517m0 0c-.142-2.172-.885-3.4-1.49-4.012-1.046 1.058-3.46 5.294-.508 8.47L8 18l1 3h6l1-3 4.583 1.941c2.953-3.176.538-7.412-.507-8.47-.606.613-1.35 1.84-1.49 4.012m-13.171 0 2.185-.99C7.6 8 10.426 4.62 12 3c1.574 1.62 4.4 5 4.4 11.493l2.185.99M18.561 17c0-.262.009-1.278.024-1.517"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9.5v2M20 9V7m0-2V3M4 9V7m0-2V3"
      />
    </svg>
  );
};
export default AircraftGame;
