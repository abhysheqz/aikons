import React from "react";
const Compass: React.FC<
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
      <circle
        cx={12}
        cy={13}
        r={9}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3.5V2M10 2h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.773 10.257c.733.727-.44 6.636-1.644 6.74-1.01.088-1.325-1.904-1.538-2.536-.21-.623-.443-.847-1.061-1.052-1.57-.519-2.355-.779-2.51-1.19-.412-1.089 5.816-2.89 6.753-1.962Z"
      />
    </svg>
  );
};
export default Compass;
