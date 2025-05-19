import React from "react";
const SchoolReportCard: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h18a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm8.72 4.25h2.058l2.678 7.498-1.413.504-.715-2.002H10.42l-.715 2.002-1.413-.504zm2.072 4.5L12 7.83l-1.043 2.92zM7 17.75h10v-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SchoolReportCard;
