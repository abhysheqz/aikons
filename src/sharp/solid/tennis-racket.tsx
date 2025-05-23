import React from "react";
const TennisRacket: React.FC<
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
        d="M19.423 13.322a8 8 0 0 1-3.694 2.116 8 8 0 0 1-.62.126l-5.874 1.18.413.413-4.59 4.591-2.808-2.807L6.84 14.35l.414.414 1.18-5.874c.03-.194.079-.428.126-.62a8 8 0 0 1 2.116-3.694c2.714-2.715 6.95-3.193 9.444-.699s2.016 6.73-.698 9.445m-.363-8.383c-1.75-1.75-5.02-1.603-7.322.698-.88.88-1.446 1.903-1.71 2.928l-.125.63c-.2 1.437.193 2.822 1.136 3.765s2.328 1.336 3.765 1.136l.63-.124c1.025-.265 2.047-.83 2.928-1.71 2.301-2.302 2.448-5.574.698-7.323m-8.016 9.913a5.46 5.46 0 0 1-1.896-1.896l-.477 2.372zm5.456-6.3 1.068-1.067-1.06-1.06-1.069 1.067zm-3 .009 1.068-1.068-1.06-1.06L12.438 7.5zm-.007 3.008L14.56 10.5 13.5 9.44l-1.068 1.067zm3 0L17.56 10.5 16.5 9.44l-1.068 1.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TennisRacket;
