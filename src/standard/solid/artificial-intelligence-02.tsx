import React from "react";
const ArtificialIntelligence_02: React.FC<
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
        d="M5.25 16.595a8.75 8.75 0 1 1 14.497-6.827l1.877 2.816a.75.75 0 0 1-.174 1.016l-1.7 1.275v2.992a1.75 1.75 0 0 1-1.967 1.737l-2.033-.254V22a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75zM14 6.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-4.5 0a.75.75 0 0 0-.696.471l-2 5a.75.75 0 0 0 1.393.557l.611-1.528h1.884l.612 1.528a.75.75 0 0 0 1.393-.556l-2-5A.75.75 0 0 0 10 6.25zm.25 2.144.342.856h-.684z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_02;
