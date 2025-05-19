import React from "react";
const WifiOff_02: React.FC<
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
        d="M10.75 18.5c0-.69.557-1.25 1.244-1.25a1.26 1.26 0 0 1 1.256 1.25c0 .69-.557 1.25-1.244 1.25h-.012c-.687 0-1.244-.56-1.244-1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.457 16.207a1 1 0 0 1-1.414 0c-1.61-1.61-4.476-1.61-6.086 0a1 1 0 0 1-1.414-1.414c1.955-1.956 5.077-2.311 7.457-1.068l1.747 1.859a1 1 0 0 1-.29.623"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.976 9.78a1 1 0 0 1-.757 1.196c-1.371.308-3.133 1.352-4.012 2.231a1 1 0 1 1-1.414-1.414c1.12-1.12 3.213-2.37 4.988-2.768a1 1 0 0 1 1.195.756M14.05 10.188a1 1 0 0 1 1.263-.638 10.9 10.9 0 0 1 3.85 2.201 1 1 0 0 1-1.325 1.498 8.9 8.9 0 0 0-3.15-1.799 1 1 0 0 1-.638-1.262M7.419 6.105a1 1 0 0 1-.524 1.314c-1.4.602-2.817 1.635-4.25 2.845a1 1 0 0 1-1.29-1.528c1.473-1.244 3.072-2.432 4.75-3.154a1 1 0 0 1 1.314.523M10.387 4.592c4.232-.483 8.464.94 12.258 4.144a1 1 0 1 1-1.29 1.528c-3.446-2.91-7.144-4.096-10.742-3.685a1 1 0 0 1-.226-1.987"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiOff_02;
