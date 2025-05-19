import React from "react";
const LocationShare_01: React.FC<
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
        d="M3.749 7.4a9.03 9.03 0 0 0 0 7.202l-1.833.8a11.03 11.03 0 0 1 0-8.801zm16.502 7.202a9.03 9.03 0 0 0 0-7.202l1.833-.8c1.221 2.8 1.221 6.002 0 8.802zM10.525 19.987c.342.201.628.354.831.458l.644.305.644-.305a17.868 17.868 0 0 0 3.344-2.24c1.812-1.546 3.762-3.925 3.762-7.039 0-4.352-3.45-7.916-7.75-7.916s-7.75 3.564-7.75 7.916c0 3.114 1.95 5.493 3.762 7.04.917.782 1.83 1.38 2.513 1.78M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationShare_01;
