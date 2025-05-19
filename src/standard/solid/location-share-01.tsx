import React from "react";
const LocationShare_01: React.FC<
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
        d="M3.232 6.084A1 1 0 0 1 3.749 7.4a9.03 9.03 0 0 0 0 7.202 1 1 0 0 1-1.833.8 11.03 11.03 0 0 1 0-8.801 1 1 0 0 1 1.316-.517m17.536 0a1 1 0 0 1 1.316.517c1.221 2.8 1.221 6 0 8.8a1 1 0 0 1-1.833-.799 9.03 9.03 0 0 0 0-7.202 1 1 0 0 1 .517-1.316M12 3.25c-4.3 0-7.75 3.58-7.75 7.95 0 2.672 1.426 4.805 2.959 6.33 1.537 1.527 3.259 2.522 4.037 2.931.475.25 1.033.25 1.508 0 .778-.409 2.5-1.404 4.037-2.932 1.533-1.524 2.959-3.658 2.959-6.329 0-4.37-3.45-7.95-7.75-7.95M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationShare_01;
