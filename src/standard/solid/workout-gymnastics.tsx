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
        fill="currentColor"
        fillRule="evenodd"
        d="M9.99 2.859a1 1 0 1 0-1.98.283l.647 4.526c.054.38.098.688.131.955.075.608.081.914.037 1.186-.056.346-.2.698-.618 1.541l-.219.438-1.882 3.765a1 1 0 0 0 1.789.894l1.691-3.383 3.76 1.502-2.282 6.083a1 1 0 0 0 1.873.702l2.55-6.799 1.084-1.091 2.476 7.84a1 1 0 0 0 1.907-.602l-2.72-8.613a3 3 0 0 0-1.71-1.867l-5.829-2.422-.057-.404zM5.5 7.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkoutGymnastics;
