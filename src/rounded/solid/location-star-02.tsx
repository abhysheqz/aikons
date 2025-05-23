import React from "react";
const LocationStar_02: React.FC<
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
        d="M12 1.25c-5.275 0-9.75 4.36-9.75 9.676 0 2.722 1.152 4.998 2.767 6.876 1.608 1.87 3.701 3.38 5.661 4.592l.013.008.013.008a2.64 2.64 0 0 0 2.592 0l.011-.007.011-.007c1.968-1.203 4.061-2.716 5.669-4.592 1.613-1.883 2.763-4.165 2.763-6.878 0-5.316-4.474-9.676-9.75-9.676m1.57 7.497-.793-1.597c-.427-.867-1.129-.867-1.56 0l-.793 1.597a.98.98 0 0 1-.634.476l-1.436.24c-.917.155-1.129.826-.472 1.489l1.116 1.125a.99.99 0 0 1 .234.82l-.32 1.394c-.252 1.098.333 1.528 1.296.952l1.346-.803c.247-.145.647-.145.89 0l1.346.803c.967.576 1.548.15 1.296-.952l-.32-1.393a.99.99 0 0 1 .234-.821l1.116-1.125c.662-.663.445-1.334-.472-1.488l-1.436-.24a.98.98 0 0 1-.639-.477"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationStar_02;
