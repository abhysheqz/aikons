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
        d="M14.25 11.25a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1M5.175 4.2a.975.975 0 0 0-.975.975v1.463a.975.975 0 1 1-1.95 0V5.175A2.925 2.925 0 0 1 5.175 2.25h1.463a.975.975 0 1 1 0 1.95zm3.9-.975c0-.538.437-.975.975-.975h3.9a.975.975 0 1 1 0 1.95h-3.9a.975.975 0 0 1-.975-.975m7.313 0c0-.538.436-.975.974-.975h1.463a2.925 2.925 0 0 1 2.925 2.925v1.463a.975.975 0 1 1-1.95 0V5.175a.975.975 0 0 0-.975-.975h-1.462a.975.975 0 0 1-.976-.975M3.224 9.075c.538 0 .975.437.975.975v3.9a.975.975 0 1 1-1.95 0v-3.9c0-.538.437-.975.975-.975m0 7.313c.538 0 .975.436.975.974v1.463c0 .538.437.975.975.975h1.463a.975.975 0 1 1 0 1.95H5.175a2.925 2.925 0 0 1-2.925-2.925v-1.462c0-.539.437-.976.975-.976"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ZoomInArea;
