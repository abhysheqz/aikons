import React from "react";
const Course: React.FC<
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
        d="M2.25 2.25h5.842V4.2H4.198v15.6h14.605v-4.85h1.947v6.8H2.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.295 3.31a.75.75 0 0 0-.59 0l-7 3a.75.75 0 0 0 0 1.38l7 3a.75.75 0 0 0 .59 0l5.455-2.338v3.667h1.5V7.71l.045-.02a.75.75 0 0 0 0-1.378z"
      />
      <path
        fill="currentColor"
        d="m9.395 10.201.41 3.29s.615.3.726.35c.223.099.537.23.9.363.707.257 1.683.545 2.57.545.885 0 1.861-.288 2.568-.545.364-.132.677-.264.9-.363.111-.05.726-.35.726-.35l.41-3.29-3.817 1.636a2 2 0 0 1-1.576 0z"
      />
    </svg>
  );
};
export default Course;
