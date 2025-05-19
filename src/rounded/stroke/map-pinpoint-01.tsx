import React from "react";
const MapPinpoint_01: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 10c-.43-1.446-1.915-2.5-3.5-2.5A3.5 3.5 0 0 0 7.5 11c0 1.763 1.304 3.257 3 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.95 10c-.48-4.466-4.39-8-8.95-8-4.87 0-9 4.033-9 8.926 0 4.988 4.204 8.436 8.073 10.83a1.89 1.89 0 0 0 1.854 0q.382-.233.767-.481"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 12c2.435 0 4.5 2.017 4.5 4.463 0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.927 0C15.102 20.681 13 18.957 13 16.463 13 14.016 15.065 12 17.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 16.5h.009"
      />
    </svg>
  );
};
export default MapPinpoint_01;
