import React from "react";
const TouchInteraction_01: React.FC<
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
        d="M19.061 18.405c.663-1.403 1.57-4.148.302-5.441-1.998-2.038-4.793-2.411-6.394-2.339V7.141a1.64 1.64 0 1 0-3.281 0v7.76l-2.079-2.213a1.535 1.535 0 0 0-2.263.222 1.71 1.71 0 0 0 .008 2.074L9.549 20.5v2h8.475v-2s.678-1.336 1.037-2.095"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2.5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4.5v-2H20v-4H4v4h3v2H3a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TouchInteraction_01;
