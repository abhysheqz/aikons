import React from "react";
const TimeSetting_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.362 19.5H18.5a1 1 0 0 0 1-1v-3.138a1 1 0 0 1 .231-.64l1.732-2.082a1 1 0 0 0 0-1.28l-1.732-2.082a1 1 0 0 1-.231-.64V5.5a1 1 0 0 0-1-1h-3.138a1 1 0 0 1-.64-.232L12.64 2.533a1 1 0 0 0-1.28 0L9.274 4.269a1 1 0 0 1-.64.231H5.496a1 1 0 0 0-1 1V8.64a1 1 0 0 1-.232.64L2.532 11.36a1 1 0 0 0 0 1.279l1.732 2.082a1 1 0 0 1 .232.64V18.5a1 1 0 0 0 1 1h3.138a1 1 0 0 1 .64.232l2.086 1.736a1 1 0 0 0 1.28 0l2.082-1.736a1 1 0 0 1 .64-.232Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.5V12l3 1.5"
      />
    </svg>
  );
};
export default TimeSetting_03;
