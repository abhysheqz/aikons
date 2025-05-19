import React from "react";
const FilterAdd: React.FC<
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
        d="M17.375 7.267a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.875 2.517a1.75 1.75 0 0 0-1.75 1.75V6.8c0 .52.23 1.012.63 1.344l5.33 4.443c.05.041.082.1.089.164l.797 7.174a1.75 1.75 0 0 0 2.523 1.372l2.244-1.123a1.75 1.75 0 0 0 .946-1.297l.351-2.264a.25.25 0 0 1 .042-.105l.071-.102a2.5 2.5 0 0 1-.273-1.138v-1h-1a2.5 2.5 0 0 1 0-5h1v-1a2.5 2.5 0 0 1 5 0v1h.266l.672-.96a.3.3 0 0 1 .045-.049l.137-.115a1.75 1.75 0 0 0 .63-1.344V4.267a1.75 1.75 0 0 0-1.75-1.75z"
      />
    </svg>
  );
};
export default FilterAdd;
