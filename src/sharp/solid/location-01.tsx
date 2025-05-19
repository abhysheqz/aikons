import React from "react";
const Location_01: React.FC<
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
        d="M10.22 21.848c.436.25.8.44 1.058.568l.722.334.722-.334a22.771 22.771 0 0 0 4.258-2.775c2.31-1.918 4.77-4.85 4.77-8.673C21.75 5.6 17.385 1.25 12 1.25S2.25 5.6 2.25 10.968c0 3.823 2.46 6.755 4.77 8.673 1.167.969 2.33 1.71 3.2 2.207M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_01;
