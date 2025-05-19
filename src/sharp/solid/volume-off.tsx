import React from "react";
const VolumeOff: React.FC<
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
        d="M21.335 22.75 1.249 2.664 2.663 1.25 22.75 21.336zM14.745 4a.75.75 0 0 0-1.155-.632L9.519 5.986l5.226 5.226z"
      />
      <path
        fill="currentColor"
        d="M6.776 7.75h-4.78a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h4.78l6.814 4.38a.75.75 0 0 0 1.155-.63v-5.252L7.367 7.369zM20.745 12c0-1.622-.639-3.126-1.737-4.325l1.475-1.351c1.403 1.533 2.262 3.508 2.262 5.675 0 1.989-.723 3.815-1.926 5.287l-1.423-1.423c.86-1.115 1.35-2.444 1.35-3.864M16.744 12c0-.915-.3-1.746-.795-2.394l1.59-1.213a5.93 5.93 0 0 1 1.205 3.606c0 .939-.214 1.829-.596 2.616l-1.546-1.546q.14-.51.142-1.07"
      />
    </svg>
  );
};
export default VolumeOff;
