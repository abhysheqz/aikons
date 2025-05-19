import React from "react";
const TrafficLight: React.FC<
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
        d="M6.254 2.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-10a.75.75 0 0 1-.75-.75zm3.5 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.002 22.25v-5h2v5zM19.252 5.25h-2.251v-1.5h3.001a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.334.624l-3.001 2-.832-1.248 2.667-1.777zM19.252 12.25h-2.251v-1.5h3.001a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.334.624l-3.001 2-.832-1.248 2.667-1.777zM3.998 3.75h3.001v1.5H4.748v.849l2.667 1.777-.832 1.248-3.001-2a.75.75 0 0 1-.334-.624v-2a.75.75 0 0 1 .75-.75M4 10.75h3.002v1.5H4.751v.848l2.667 1.778-.832 1.248-3.001-2a.75.75 0 0 1-.334-.624v-2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TrafficLight;
