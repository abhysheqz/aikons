import React from "react";
const StudyLamp: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 12 7-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 22h7M6 15l5 7M17.254 9.525a2.32 2.32 0 0 0 3.198-.872c.647-1.14.263-2.597-.857-3.254m-4.289-1.97-1.558-.915a1 1 0 0 0-1.376.369l-.886 1.56A1 1 0 0 0 11.85 5.8l1.584.93c-.053.907.268 3.237 1.623 4.641.388.401 1.019.232 1.294-.254l4.164-7.337c.27-.475.107-1.092-.421-1.234-1.878-.508-4.038.38-4.787.883"
      />
    </svg>
  );
};
export default StudyLamp;
