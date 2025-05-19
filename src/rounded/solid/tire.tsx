import React from "react";
const Tire: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 17.25a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M12 4.5a1 1 0 0 1 1 1v3.407a3.25 3.25 0 0 0-2 0V5.5a1 1 0 0 1 1-1M9.822 9.588l-2.95-1.704a1 1 0 1 0-1 1.732l2.95 1.703a3.25 3.25 0 0 1 1-1.731M8.821 12.68l-2.95 1.704a1 1 0 0 0 1 1.732l2.951-1.703a3.25 3.25 0 0 1-1-1.732M11 15.093V18.5a1 1 0 1 0 2 0v-3.407a3.25 3.25 0 0 1-2 0M14.178 14.412l2.952 1.704a1 1 0 1 0 1-1.732l-2.951-1.704a3.25 3.25 0 0 1-1 1.732M15.179 11.32l2.95-1.704a1 1 0 1 0-1-1.732l-2.95 1.704c.497.45.855 1.051 1 1.732"
      />
    </svg>
  );
};
export default Tire;
