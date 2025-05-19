import React from "react";
const RenewableEnergy: React.FC<
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
        d="M10.733 1.575c.232.258.309.62.203.95L10 5.457 8.137 4.86l.369-1.152A9.01 9.01 0 0 0 3.185 10.2L1.27 9.811A10.96 10.96 0 0 1 9.81 1.27c.34-.07.69.047.922.305m9.558 6.93a9.01 9.01 0 0 0-6.491-5.32l.389-1.915c4.292.87 7.67 4.25 8.541 8.541a.977.977 0 0 1-1.255 1.125L18.543 10l.596-1.862zM1.575 13.268a.98.98 0 0 1 .95-.203L5.457 14l-.596 1.862-1.152-.369a9.01 9.01 0 0 0 6.49 5.321l-.388 1.915A10.96 10.96 0 0 1 1.27 14.19a.98.98 0 0 1 .305-.922m13.92 7.024a9.01 9.01 0 0 0 5.32-6.491l1.915.389a10.96 10.96 0 0 1-8.541 8.541.977.977 0 0 1-1.125-1.255L14 18.543l1.862.596z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m7.5 12.5 5.5-6v5h3.5L11 17.493V12.5z" />
    </svg>
  );
};
export default RenewableEnergy;
