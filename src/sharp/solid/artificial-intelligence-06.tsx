import React from "react";
const ArtificialIntelligence_06: React.FC<
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
        d="M9.38 2.137 9.006 1.5 4.238 4.203l.385.655C5.76 6.794 4.306 9.288 2 9.288h-.75v5.425H2c2.305 0 3.76 2.493 2.621 4.429l-.385.655L9.005 22.5l.374-.636c1.175-1.998 4.069-1.999 5.244 0l.374.636 4.769-2.703-.386-.655c-1.138-1.937.315-4.43 2.62-4.43h.75V9.289H22c-2.305 0-3.76-2.493-2.621-4.43l.385-.655L14.995 1.5l-.374.637c-1.174 1.997-4.066 1.997-5.24 0m1.493 5.613H9.268l-2.737 7.184 1.402.534.769-2.018h2.737l.77 2.018 1.4-.534zm-.005 4.2H9.273l.797-2.093zm5.381 3.3v-7.5h-1.5v7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_06;
