import React from "react";
const PointingRight_08: React.FC<
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
        d="M18.617 1.076a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18 7V5.5h-2.5a1 1 0 1 1 0-2H18V2a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.405 6.348 2.557 2.557H9.996a.45.45 0 1 0 0 .9h10.965a1.288 1.288 0 0 1 0 2.577h-8.386a.45.45 0 0 0 0 .9h3.136s.027.285.035.468c.014.293 0 .75 0 .75 0 .5-.163.962-.439 1.335h-3.63a.45.45 0 0 0 0 .9h3.07v.765c0 .73-.348 1.377-.885 1.788h-2.866a.45.45 0 1 0 0 .9h2.75v.312a2.25 2.25 0 0 1-2.25 2.25h-6A3.75 3.75 0 0 1 1.746 19v-7.394a3.75 3.75 0 0 1 1.67-3.12L7.324 5.88a3.75 3.75 0 0 1 2.08-.63h.35a3.75 3.75 0 0 1 2.651 1.098"
      />
    </svg>
  );
};
export default PointingRight_08;
