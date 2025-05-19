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
        d="M7.75 14.25a6.5 6.5 0 1 1 11.75 3.834l1.957 1.96a1 1 0 0 1-1.414 1.413l-1.958-1.959A6.5 6.5 0 0 1 7.75 14.25m6.5-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 11.25a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1M6.638 4.2A2.44 2.44 0 0 0 4.2 6.638a.975.975 0 1 1-1.95 0A4.387 4.387 0 0 1 6.638 2.25a.975.975 0 1 1 0 1.95m2.437-.975c0-.538.437-.975.975-.975h3.9a.975.975 0 1 1 0 1.95h-3.9a.975.975 0 0 1-.975-.975m7.313 0c0-.538.436-.975.974-.975a4.387 4.387 0 0 1 4.388 4.388.975.975 0 1 1-1.95 0A2.437 2.437 0 0 0 17.363 4.2a.975.975 0 0 1-.976-.975M3.224 9.075c.538 0 .975.437.975.975v3.9a.975.975 0 1 1-1.95 0v-3.9c0-.538.437-.975.975-.975m0 7.313c.538 0 .975.436.975.974A2.437 2.437 0 0 0 6.638 19.8a.975.975 0 1 1 0 1.95 4.387 4.387 0 0 1-4.388-4.387c0-.539.437-.976.975-.976"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ZoomInArea;
