import React from "react";
const LocationAdd_01: React.FC<
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
        d="M10.22 21.849c.436.249.8.439 1.058.567l.722.334.722-.334a22.778 22.778 0 0 0 4.258-2.775c2.31-1.918 4.77-4.85 4.77-8.673 0-5.367-4.365-9.718-9.75-9.718s-9.75 4.351-9.75 9.718c0 3.823 2.46 6.755 4.77 8.673 1.167.97 2.33 1.71 3.2 2.208M11 15v-3H8v-2h3V7h2v3h3v2h-3v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationAdd_01;
