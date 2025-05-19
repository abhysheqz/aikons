import React from "react";
const Scooter_04: React.FC<
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
      <circle
        cx={4}
        cy={18}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={20}
        cy={18}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.514 18h6.775c.732 0 1.099 0 1.344-.155.245-.156.452-.596.867-1.476.235-.498.536-.958.892-1.369m0 0L4 16m12.392-1a6 6 0 0 1 2.521-1.724c.537-.191.806-.287.896-.462.09-.174.024-.415-.11-.896l-1.53-5.51c-.25-.902-.376-1.353-.646-1.68a2 2 0 0 0-.73-.555C16.405 4 15.937 4 15 4"
      />
    </svg>
  );
};
export default Scooter_04;
