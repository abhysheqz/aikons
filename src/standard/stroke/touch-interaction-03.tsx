import React from "react";
const TouchInteraction_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.503 7.5-1.005-.001a2 2 0 0 1-1.998-2v-1a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1a2 2 0 0 1-1.998 2H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.206 13.45v-.919c0-1.272 0-1.909-.387-2.304-.388-.396-1.012-.396-2.26-.396m5.294 2.269v1.8m0-1.8h.294c.965 0 1.447 0 1.789.244q.19.137.325.331c.239.35.239.841.239 1.825 0 1.956 0 2.934-.292 3.713-.17.451-1.473 1.987-1.473 1.987v1.3m-.882-9.4c0-.746-.592-1.35-1.323-1.35h-1.324M9.912 21.5v-1.3l-4.069-5.548a1.59 1.59 0 0 1-.007-1.965 1.51 1.51 0 0 1 2.195-.21l1.88 1.873v-7.5c0-.746.593-1.35 1.324-1.35s1.324.604 1.324 1.35V9.83m0 0V13"
      />
    </svg>
  );
};
export default TouchInteraction_03;
