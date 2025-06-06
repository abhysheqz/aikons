import React from "react";
const Road: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 21.998V11.996M22 21.998V11.996M12 21.998v-1m0-3.001v-1M6.5 7 5.293 8.207A1 1 0 0 0 5 8.914v2.739c0 .489.353.904.838.966.312.04.703.085 1.162.131M6.5 7l1.072-3.575A2 2 0 0 1 9.488 2h5.024a2 2 0 0 1 1.916 1.425L17.5 7m-11 0h11m-11 0-1-1m12 1 1.207 1.207a1 1 0 0 1 .293.707v2.739a.965.965 0 0 1-.838.966c-.312.04-.703.085-1.162.131M17.5 7l1-1m-12 3.5-1-.5m12 .5 1-.5m-8 1.5h3M7 12.75c1.25.125 3 .25 5 .25s3.75-.125 5-.25m-10 0v1.75m10-1.75v1.75"
      />
    </svg>
  );
};
export default Road;
