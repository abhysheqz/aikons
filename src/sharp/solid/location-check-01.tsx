import React from "react";
const LocationCheck_01: React.FC<
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
        d="M10.22 21.848c.436.25.8.44 1.058.568l.722.334.722-.334a22.778 22.778 0 0 0 4.258-2.775c2.31-1.918 4.77-4.85 4.77-8.673 0-5.367-4.365-9.718-9.75-9.718S2.25 5.6 2.25 10.968c0 3.823 2.46 6.755 4.77 8.673 1.167.97 2.33 1.71 3.2 2.207M10 15.414l6.707-6.707-1.414-1.414L10 12.586l-1.293-1.293-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationCheck_01;
