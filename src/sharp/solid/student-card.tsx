import React from "react";
const StudentCard: React.FC<
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
        d="M1.25 3.5A.75.75 0 0 1 2 2.75h20a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM6 10.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-.4 6.201-1.198-.902c.97-1.288 2.546-1.93 4.077-1.946 1.536-.016 3.135.595 4.128 1.955l-1.211.884zM14 10.25h5v-1.5h-5zm0 4h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StudentCard;
