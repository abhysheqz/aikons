import React from "react";
const GpsDisconnected: React.FC<
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
        d="M13.263 10.737a2.515 2.515 0 0 0-3.556 0L8.293 9.322a4.515 4.515 0 0 1 6.385 6.385l-1.415-1.414a2.515 2.515 0 0 0 0-3.556"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.812 6.98q.016.024.033.047c1.318 1.804 2.94 3.593 4.737 5.391s3.586 3.419 5.391 4.737l.046.033c.459.335.874.638 1.162.929.318.32.596.737.567 1.3-.027.522-.282.895-.614 1.182-.28.242-.665.466-1.064.7l-.05.029c-4.017 2.341-9.255 1.792-12.698-1.65S.331 10.995 2.672 6.98l.03-.05c.232-.4.457-.785.699-1.064.287-.332.66-.587 1.182-.614.563-.029.98.249 1.3.567.29.288.594.703.929 1.162M15.293 1.293a1 1 0 0 1 1.414 0L19 3.586l2.293-2.293a1 1 0 1 1 1.414 1.414L20.414 5l2.293 2.293a1 1 0 0 1-1.414 1.414L19 6.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L17.586 5l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GpsDisconnected;
