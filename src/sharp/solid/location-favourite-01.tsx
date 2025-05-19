import React from "react";
const LocationFavourite_01: React.FC<
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
        d="M10.22 21.849c.436.249.8.439 1.058.567l.722.334.722-.334a22.771 22.771 0 0 0 4.258-2.775c2.31-1.918 4.77-4.85 4.77-8.673 0-5.367-4.365-9.718-9.75-9.718s-9.75 4.351-9.75 9.718c0 3.824 2.46 6.755 4.77 8.673 1.167.97 2.33 1.71 3.2 2.208M12 7.282s1.29-1.402 3.086-.45C17.262 7.983 17.418 12.496 12 14.5c-5.418-2.003-5.262-6.516-3.086-7.669C10.71 5.88 12 7.282 12 7.282"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationFavourite_01;
