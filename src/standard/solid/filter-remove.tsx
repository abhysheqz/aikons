import React from "react";
const FilterRemove: React.FC<
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
        d="M14.168 6.56a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.415l-2.293 2.292 2.293 2.293a1 1 0 0 1-1.414 1.415l-2.293-2.293-2.293 2.293a1 1 0 1 1-1.414-1.415l2.293-2.293-2.293-2.292a1 1 0 0 1 0-1.415"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.875 2.517a1.75 1.75 0 0 0-1.75 1.75V6.8c0 .52.23 1.012.63 1.344l5.33 4.443c.05.041.082.1.089.164l.797 7.174a1.75 1.75 0 0 0 2.523 1.372l2.236-1.12a1.75 1.75 0 0 0 .95-1.322l.42-3.012a.3.3 0 0 1 .029-.087 2.5 2.5 0 0 1-2.022-4.255l1.233-1.233-1.233-1.232A2.5 2.5 0 1 1 16.643 5.5l1.232 1.232L19.107 5.5a2.5 2.5 0 0 1 2.476-.63q.042-.188.042-.38v-.223a1.75 1.75 0 0 0-1.75-1.75z"
      />
    </svg>
  );
};
export default FilterRemove;
