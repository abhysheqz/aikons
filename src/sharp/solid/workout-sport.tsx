import React from "react";
const WorkoutSport: React.FC<
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
        d="M12.398 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M10.416 8.205l-2.929 5.44a.75.75 0 0 0 .05.79l2.105 2.948-3.488 3.238.988 1.129 4-3.686a.75.75 0 0 0 .116-1L9.605 14.75h4.168l2.775 3.7 1.2-.9-3-4a.75.75 0 0 0-.6-.3h-1.06l1.952-2.789.937 1.874a.75.75 0 0 0 .825.399l2.698-.723-.308-1.468-2.132.604-1.241-2.483a.75.75 0 0 0-.299-.315l-3.5-2a.75.75 0 0 0-.61-.06l-4.463 1.5a.75.75 0 0 0-.41.334l-2.037 3.5 1.296.754 1.896-3.256z"
      />
    </svg>
  );
};
export default WorkoutSport;
