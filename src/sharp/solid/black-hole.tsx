import React from "react";
const BlackHole: React.FC<
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
        d="M18.25 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M1.25 20.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.205c-2.843 0-5.368 1.38-6.955 3.518L3.5 5.55C5.437 2.941 8.524 1.25 12 1.25c1.11 0 2.18.172 3.188.492l-.58 1.865A8.6 8.6 0 0 0 12 3.205m0 17.59c2.844 0 5.368-1.38 6.956-3.517l1.544 1.174c-1.937 2.608-5.023 4.298-8.5 4.298-1.108 0-2.18-.172-3.187-.492l.58-1.865a8.6 8.6 0 0 0 2.607.402M12 6.25a5.75 5.75 0 0 0-5.06 3.017l-5.213 2.034a.75.75 0 0 0 0 1.398l5.213 2.034A5.75 5.75 0 0 0 12 17.75a5.75 5.75 0 0 0 5.06-3.017l5.213-2.034a.75.75 0 0 0 0-1.398L17.06 9.267A5.75 5.75 0 0 0 12 6.25m0 3a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BlackHole;
