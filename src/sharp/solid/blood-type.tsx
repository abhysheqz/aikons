import React from "react";
const BloodType: React.FC<
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
      <path fill="currentColor" d="m12 9.83.966 2.706h-1.933z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.739 1.415 12 1.25l.261.165c.427.268 1.182.743 1.504.972.818.582 1.911 1.43 3.007 2.487 2.162 2.086 4.478 5.13 4.478 8.677 0 5.08-4.141 9.199-9.25 9.199s-9.25-4.118-9.25-9.199c0-3.546 2.316-6.59 4.478-8.677a26.6 26.6 0 0 1 3.007-2.487c.322-.23 1.077-.704 1.504-.972m1.289 6.835H10.97l-2.678 7.498 1.413.504.791-2.216h3.004l.792 2.216 1.413-.504z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BloodType;
