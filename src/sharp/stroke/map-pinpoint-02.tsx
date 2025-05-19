import React from "react";
const MapPinpoint_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 11c-2.485 0-4.5 1.99-4.5 4.444 0 1.404.563 2.495 1.688 3.47.792.687 2.235 2.16 2.812 3.086.606-.907 2.02-2.399 2.813-3.086 1.125-.975 1.687-2.066 1.687-3.47C22 12.99 19.985 11 17.5 11Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.535 10a3.5 3.5 0 1 0-2.445 3.338"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.062 19.396c-.822.93-1.584 1.872-2.062 2.604-1.025-1.682-3.59-4.362-5-5.611-2-1.772-3-3.756-3-6.308C2 5.618 5.582 2 10 2c3.973 0 7.27 2.926 7.894 6.761"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M17.5 15.5h.009"
      />
    </svg>
  );
};
export default MapPinpoint_02;
