import React from "react";
const Seesaw: React.FC<
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
        d="M19.482 4.837a.75.75 0 0 1-.569.896l-.68.151.309 1.293 2.362-.527c.773-.172 1.578.288 1.769 1.087.374 1.568-.642 3.097-2.208 3.447L4.81 14.678c-1.559.348-3.148-.587-3.52-2.145-.194-.809.333-1.58 1.113-1.753l2.34-.523-.308-1.293-.702.157a.75.75 0 0 1-.327-1.464l2.846-.635a.75.75 0 0 1 .327 1.464l-.68.152.309 1.292 10.87-2.426-.309-1.293-.702.157a.75.75 0 0 1-.327-1.464l2.847-.635a.75.75 0 0 1 .895.568M9.75 14.857v1.394H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-1.75v-2.399z"
      />
    </svg>
  );
};
export default Seesaw;
