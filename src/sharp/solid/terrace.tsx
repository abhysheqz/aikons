import React from "react";
const Terrace: React.FC<
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
        d="M2.95 19.37 2 14.63l1.965-.392.84 4.196H6.99c.432 0 .815.275.951.683l1.002 3-1.901.633-.774-2.316H4.707l-.774 2.316-1.901-.633zM19.194 18.434l.841-4.196L22 14.63l-.95 4.74.918 2.747-1.901.633-.774-2.316h-1.561l-.774 2.316-1.901-.633 1.002-3c.136-.408.52-.683.95-.683z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.47 1.47a.75.75 0 0 1 1.06 0c.707.706 2.378 1.925 4.182 3.116 1.794 1.184 3.622 2.275 4.604 2.735a.75.75 0 0 1 .432.679v2.75h-19.5V8a.75.75 0 0 1 .432-.68c.983-.46 2.811-1.55 4.606-2.734 1.806-1.191 3.477-2.41 4.184-3.117"
      />
      <path
        fill="currentColor"
        d="M14 22.75h-4v-2h1V16H9v-2h2v-4h2v4h2v2h-2v4.75h1z"
      />
    </svg>
  );
};
export default Terrace;
