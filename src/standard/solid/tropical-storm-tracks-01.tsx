import React from "react";
const TropicalStormTracks_01: React.FC<
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
        d="M17.5 1.25c-7.392 0-11.23 4.11-12.41 7.038-1-.76-1.765-1.524-2.56-2.318a.75.75 0 0 0-1.28.53c0 7.392 4.11 11.23 7.038 12.41-.76 1-1.524 1.765-2.318 2.56a.75.75 0 0 0 .53 1.28c7.392 0 11.23-4.11 12.41-7.038 1 .76 1.765 1.524 2.56 2.318a.75.75 0 0 0 1.28-.53c0-7.392-4.11-11.23-7.038-12.41.76-1 1.524-1.765 2.318-2.56a.75.75 0 0 0-.53-1.28m-5.5 7a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TropicalStormTracks_01;
