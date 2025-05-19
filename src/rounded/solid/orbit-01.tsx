import React from "react";
const Orbit_01: React.FC<
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
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
      />
      <path
        fill="currentColor"
        d="M12 3.205a8.795 8.795 0 1 0 8.752 7.914.977.977 0 0 1 1.945-.193q.053.531.053 1.074c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c2.47 0 4.748.835 6.564 2.236a2.932 2.932 0 1 1-1.396 1.396A8.75 8.75 0 0 0 12 3.205"
      />
    </svg>
  );
};
export default Orbit_01;
