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
        d="M18 1.25H6A1.75 1.75 0 0 0 4.25 3v19a.75.75 0 0 0 1.355.444l5.275-7.194H17a.75.75 0 0 0 .739-.62l.898-5.13H12a1 1 0 1 1 0-2h6.988l.737-4.213.002-.01A1.75 1.75 0 0 0 18 1.25"
      />
    </svg>
  );
};
export default Foursquare;
