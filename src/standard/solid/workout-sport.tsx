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
        fillRule="evenodd"
        d="M14.5 2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-2.114 4.103a2 2 0 0 0-1.63-.159l-3.68 1.237a2 2 0 0 0-1.092.89l-1.848 3.175a1 1 0 0 0 1.728 1.006l1.849-3.175 2.036-.684-2.63 4.882a1 1 0 0 0 .067 1.055l1.974 2.763-3.318 2.904a1 1 0 0 0 1.317 1.505l3.318-2.904a2 2 0 0 0 .31-2.667l-.844-1.182H13.5l2.7 3.6a1 1 0 1 0 1.6-1.2l-2.7-3.6a2 2 0 0 0-1.6-.8h-.08l1.437-2.051.404.808a2 2 0 0 0 2.2 1.063l1.745-.367a1 1 0 1 0-.411-1.957l-1.745.367-1.02-2.04a2 2 0 0 0-.236-.365 1 1 0 0 0-.181-.196 2 2 0 0 0-.38-.28z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkoutSport;
