import React from "react";
const GpsSignal_01: React.FC<
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
        d="M13.265 10.735a2.515 2.515 0 0 0-3.556 0L8.295 9.32a4.515 4.515 0 0 1 6.385 6.385l-1.415-1.414a2.515 2.515 0 0 0 0-3.556"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m19.097 19.625-.599.528a10.34 10.34 0 0 1-6.866 2.595c-5.733 0-10.38-4.647-10.38-10.38 0-2.632.98-5.037 2.595-6.866l.528-.599z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.413 1.252c1.88.193 3.647.946 5.016 2.313 1.374 1.37 2.129 3.142 2.32 5.027l-1.99.202c-.15-1.481-.733-2.805-1.743-3.814-1.007-1.006-2.329-1.587-3.807-1.739zm-.432 3.515A5.67 5.67 0 0 1 17.72 6.27a5.66 5.66 0 0 1 1.51 2.75l-1.95.453a3.66 3.66 0 0 0-.973-1.788 3.67 3.67 0 0 0-1.782-.97z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GpsSignal_01;
