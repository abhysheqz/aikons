import React from "react";
const BlackHole_01: React.FC<
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
        d="M4.832 9.446a1 1 0 0 1-.279 1.386C3.432 11.58 3 12.352 3 13c0 .798.673 1.79 2.376 2.641C7.02 16.463 9.36 17 12 17s4.98-.537 6.624-1.359C20.327 14.79 21 13.798 21 13c0-.648-.432-1.421-1.553-2.168a1 1 0 0 1 1.108-1.664C21.944 10.092 23 11.397 23 13c0 1.963-1.566 3.472-3.482 4.43C17.542 18.418 14.883 19 12 19s-5.543-.582-7.518-1.57C2.566 16.472 1 14.964 1 13c0-1.603 1.056-2.908 2.445-3.832a1 1 0 0 1 1.387.278"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.207 11.868a1 1 0 0 1 1.402-.184c.936.718 2.924 1.315 5.391 1.315s4.455-.597 5.391-1.315a1 1 0 1 1 1.218 1.586C17.177 14.37 14.678 15 12 15s-5.177-.63-6.609-1.73a1 1 0 0 1-.184-1.402"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 13a2.75 2.75 0 1 1 5.414.686l-.1.39a.75.75 0 0 1-.637.56c-.615.075-1.261.114-1.927.114s-1.312-.04-1.927-.113a.75.75 0 0 1-.638-.56l-.099-.392A2.8 2.8 0 0 1 9.25 13"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.7 3.047a1 1 0 0 1 1.254.652l3 9.5a1 1 0 0 1-1.907.602l-3-9.5a1 1 0 0 1 .652-1.254m4.007 14.246a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0M17.257 5.034a1 1 0 0 0-1.224.709l-2 7.5a1 1 0 0 0 1.933.515l2-7.5a1 1 0 0 0-.709-1.224m-2.964 12.26a1 1 0 0 0 0 1.413l2 2a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0M12 1a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BlackHole_01;
