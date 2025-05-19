import React from "react";
const ArtificialIntelligence_05: React.FC<
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
        d="m22.75 8.893-2.346 1.825a8.6 8.6 0 0 1 0 2.564l2.346 1.825-2.643 4.536-2.705-1.08a8.5 8.5 0 0 1-2.325 1.363l-.429 2.824H9.352l-.409-2.816a8.5 8.5 0 0 1-2.357-1.381l-2.683 1.09-2.653-4.536 2.346-1.825a8.6 8.6 0 0 1 0-2.564L1.25 8.893l2.653-4.536 2.683 1.09a8.5 8.5 0 0 1 2.358-1.381l.408-2.816h5.296l.43 2.824c.85.33 1.633.793 2.324 1.363l2.705-1.08zM10.873 8.25H9.268L6.53 15.434l1.402.534.769-2.018h2.737l.769 2.018 1.402-.534zm-.005 4.2H9.273l.797-2.093zm3.881 3.3h1.5v-7.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_05;
