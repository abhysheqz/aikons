import React from "react";
const WorkoutGymnastics: React.FC<
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
        strokeWidth={1.5}
        d="M7 9.686a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.008 3.19l.713 5.008c.105 1.104.33 1.843-.264 3.034l-2.46 4.954m3.132-7.36 3.426 1.422 2.717 1.142q.034.014.065.033c.651.4.893.816 1.128 1.74L20 21.185M9.727 12.22l4.449 1.789m2.204-1.613-1.71 1.737-2.662 7.048"
      />
    </svg>
  );
};
export default WorkoutGymnastics;
