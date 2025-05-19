import React from "react";
const Crown: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.002 14h.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.002 22h12M16.006 8.99 12.172 2.26c-.103-.234-.145-.302-.183-.234L8.034 8.97 3.119 7.014c-.074-.03-.18-.096-.075.102l.009.024L6.018 19l12.011-.042 2.962-11.901c.02-.08.01-.081-.066-.05z"
      />
    </svg>
  );
};
export default Crown;
