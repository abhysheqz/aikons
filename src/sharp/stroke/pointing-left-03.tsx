import React from "react";
const PointingLeft_03: React.FC<
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
        d="M7.982 4.08H2.754m1.724-2.498L1.975 4.08l2.503 2.497M14.456 10.597l-1.832-2.126a1.5 1.5 0 0 1-.298-.492c-.289-.838-.089-1.493.613-2.052.644-.52 1.433-.442 2.21.126l6.6 4.386c.223.108.226.493.223.825v7.517c-.066.892-.422 1.572-1.108 2.142-.614.51-1.437.656-2.235.656h-4.853c-.703 0-1.43-.081-1.998-.493a3.18 3.18 0 0 1-1.337-2.372v-4.61H4.603c-.926-.011-1.709-.932-1.637-1.842.01-.957.839-1.674 1.766-1.665z"
      />
    </svg>
  );
};
export default PointingLeft_03;
