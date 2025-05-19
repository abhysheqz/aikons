import React from "react";
const Dumbbell_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 13.853s.959-1.294 1.588-1.588c1.9-.89 2.287-1.276 3.177-3.177.294-.63 1.588-1.588 1.588-1.588m-3.706 9s1.294-.959 1.588-1.588c.89-1.9 1.276-2.287 3.177-3.177.63-.294 1.588-1.588 1.588-1.588M3.903 17.5l-.865.866a1.836 1.836 0 1 0 2.596 2.596l.866-.865M17.5 3.903l.866-.865a1.836 1.836 0 1 1 2.596 2.596l-.865.866M12.707 6.207l5.086 5.086a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414l-5.086-5.086a1 1 0 0 0-1.414 0l-2.086 2.086a1 1 0 0 0 0 1.414ZM2.707 16.207l5.086 5.086a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414l-5.086-5.086a1 1 0 0 0-1.414 0l-2.086 2.086a1 1 0 0 0 0 1.414Z"
      />
    </svg>
  );
};
export default Dumbbell_01;
