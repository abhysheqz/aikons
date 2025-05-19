import React from "react";
const LaptopProgramming: React.FC<
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
        d="M3 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a1 1 0 1 1-2 0v-11H5v11a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.371 5.072a1 1 0 0 1 .557 1.3l-2 5a1 1 0 0 1-1.857-.743l2-5a1 1 0 0 1 1.3-.557M9.207 6.293a1 1 0 0 1 0 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414l1.5-1.5a1 1 0 0 1 1.414 0m5.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 0-1.414M3.058 14.223a1 1 0 0 1 .961-.723h15.932a1 1 0 0 1 .96.72l1.674 5.718a2 2 0 0 1-1.92 2.562H3.33a2 2 0 0 1-1.921-2.554z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LaptopProgramming;
