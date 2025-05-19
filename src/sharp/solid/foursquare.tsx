import React from "react";
const Foursquare: React.FC<
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
        d="M5 2h14l-1.374 6.25H12v1.5h5.296L16 15.645h-5L5 22z"
      />
    </svg>
  );
};
export default Foursquare;
