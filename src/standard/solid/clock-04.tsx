import React from "react";
const Clock_04: React.FC<
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
        d="M4.603 6.924A8.91 8.91 0 0 1 12 3a9 9 0 0 1 0 18 1 1 0 1 0 0 2c6.075 0 11-4.925 11-11S18.075 1 12 1C7.924 1 4.399 3.217 2.51 6.501c-.397.69-.721 1.426-.964 2.2A1 1 0 0 0 2.5 10H5a1 1 0 0 0 .776-1.63z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a1 1 0 0 1 1 1v3.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1M2 11a1 1 0 0 1 1 1q0 .46.04.91a1 1 0 1 1-1.991.18Q1.001 12.55 1 12a1 1 0 0 1 1-1m.342 3.91a1 1 0 0 1 1.289.584q.203.54.466 1.045a1 1 0 0 1-1.775.922q-.317-.61-.563-1.262a1 1 0 0 1 .583-1.289m1.809 3.664a1 1 0 0 1 1.413.052q.414.447.881.833a1 1 0 0 1-1.275 1.54 11 11 0 0 1-1.072-1.012 1 1 0 0 1 .053-1.413m2.94 2.617a1 1 0 0 1 1.325-.492q.437.2.897.351a1 1 0 0 1-.626 1.9 11 11 0 0 1-1.103-.433 1 1 0 0 1-.493-1.326"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_04;
