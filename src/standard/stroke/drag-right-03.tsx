import React from "react";
const DragRight_03: React.FC<
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
        d="M14.206 13.95v-.919c0-1.272 0-1.909-.387-2.304-.388-.396-1.012-.396-2.26-.396m5.294 2.269v1.8m0-1.8h.294c.965 0 1.447 0 1.789.244q.19.137.325.331c.239.35.239.841.239 1.825 0 1.956 0 2.934-.292 3.713-.124.33-.855 1.24-1.238 1.706a1.02 1.02 0 0 0-.235.648V22m-.882-9.4c0-.746-.592-1.35-1.323-1.35h-1.324M8.912 22v-.973a1 1 0 0 0-.194-.591l-3.875-5.284a1.59 1.59 0 0 1-.007-1.965 1.51 1.51 0 0 1 2.195-.21l1.88 1.873v-8.5c0-.746.593-1.35 1.324-1.35s1.324.604 1.324 1.35v3.981m0 0V13.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.434 8.5a3.5 3.5 0 1 1 3.608 0M17 3l2.5 2.5L17 8m-3-2.5h4.5"
      />
    </svg>
  );
};
export default DragRight_03;
