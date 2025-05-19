import React from "react";
const PointingLeft_08: React.FC<
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
        d="M5.383 1.076A1 1 0 0 1 6 2v1.5h2.5a1 1 0 1 1 0 2H6V7a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.59 6.348 9.033 8.905h4.966a.45.45 0 1 1 0 .9H3.034a1.288 1.288 0 0 0 0 2.577h8.386a.45.45 0 0 1 0 .9H8.284s-.026.285-.035.468c-.013.293 0 .75 0 .75 0 .5.163.962.439 1.335h3.63a.45.45 0 0 1 0 .9H9.25v.765c0 .73.347 1.377.884 1.788H13a.45.45 0 0 1 0 .9h-2.75v.312a2.25 2.25 0 0 0 2.25 2.25h6A3.75 3.75 0 0 0 22.25 19v-7.394a3.75 3.75 0 0 0-1.67-3.12L16.671 5.88a3.75 3.75 0 0 0-2.08-.63h-.35a3.75 3.75 0 0 0-2.65 1.098"
      />
    </svg>
  );
};
export default PointingLeft_08;
