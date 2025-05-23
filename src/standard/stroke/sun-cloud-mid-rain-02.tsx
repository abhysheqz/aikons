import React from "react";
const SunCloudMidRain_02: React.FC<
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
        d="M17.478 11q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.47 5.47 0 0 1-.868 2.5m.868-2.5A4.503 4.503 0 0 1 22 15.5c0 1.286-.635 2.616-1.5 3.5M6.52 10.023A5 5 0 0 0 2 15c0 1.636.786 3.043 2 4m2.52-8.977Q6.757 10 7 10c.91 0 1.765.243 2.5.669"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 3.5V2m0 1.5c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 4.933M2 7.5h1.485m0 0c0 1.195.52 2.267 1.344 3m-1.344-7 1.163 1.172M7.407 19.536 8.5 18.5l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M14.407 19.536 15.5 18.5l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M10.907 14.036 12 13l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016"
      />
    </svg>
  );
};
export default SunCloudMidRain_02;
