import React from "react";
const LocationOffline_01: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M10.22 21.848c.436.25.8.44 1.058.568l.722.334.722-.334a22.772 22.772 0 0 0 4.258-2.775c.463-.385.932-.81 1.386-1.275l-4.082-4.082a4 4 0 0 1-5.568-5.568L4.618 4.618a9.66 9.66 0 0 0-2.368 6.35c0 3.823 2.46 6.755 4.77 8.673 1.167.969 2.33 1.71 3.2 2.207M21.75 10.968C21.75 5.6 17.384 1.25 12 1.25A9.73 9.73 0 0 0 6.487 2.95l4.251 4.252a4 4 0 0 1 5.058 5.059l4.168 4.166c1.047-1.539 1.786-3.366 1.786-5.46"
      />
    </svg>
  );
};
export default LocationOffline_01;
