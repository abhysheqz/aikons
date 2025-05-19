import React from "react";
const UserRoadside: React.FC<
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
        d="M5 16.848a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M16.5 16.848a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1M6.5 12a5.5 5.5 0 1 1 11 0v1.5a.5.5 0 0 1-.5.5h-1.628l-1.393 4.644A.5.5 0 0 1 13.5 19h-3a.5.5 0 0 1-.479-.356L8.628 14H7a.5.5 0 0 1-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserRoadside;
