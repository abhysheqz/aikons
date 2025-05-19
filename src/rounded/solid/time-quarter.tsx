import React from "react";
const TimeQuarter: React.FC<
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
        d="M9.708 11A2.5 2.5 0 1 1 13 14.292V16a1 1 0 1 1-2 0v-1.708A2.5 2.5 0 0 1 9.708 13H6a1 1 0 1 1 0-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12a.977.977 0 1 0 1.955 0A8.795 8.795 0 1 1 12 20.796a.977.977 0 1 0 0 1.954c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12m1.904 2.622a.977.977 0 1 0-1.853.62q.228.682.533 1.325A.977.977 0 0 0 3.6 15.73a10 10 0 0 1-.446-1.108m1.892 3.333a.977.977 0 0 0-1.482 1.275q.506.588 1.083 1.103a.977.977 0 0 0 1.301-1.458 10 10 0 0 1-.902-.92m3.168 2.43a.977.977 0 1 0-.84 1.764q.676.322 1.395.554a.977.977 0 1 0 .6-1.86 9 9 0 0 1-1.155-.459"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeQuarter;
