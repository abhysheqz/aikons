import React from "react";
const ZoomInArea: React.FC<
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
        d="M7 13.5a6.5 6.5 0 1 1 11.75 3.834L21.413 20 20 21.414l-2.665-2.666A6.5 6.5 0 0 1 7 13.5M13.5 9a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 10.5v2h2v2h-2v2h-2v-2h-2v-2h2v-2zM2.25 2.25h5.363V4.2H4.2v3.412H2.25zm6.825 0h5.85V4.2h-5.85zm7.313 0h5.362v5.363H19.8V4.2h-3.413zM4.2 9.075v5.85H2.25v-5.85zm0 7.313V19.8h3.412v1.95H2.25v-5.363z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ZoomInArea;
