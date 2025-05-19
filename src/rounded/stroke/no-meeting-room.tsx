import React from "react";
const NoMeetingRoom: React.FC<
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
        d="m2 2 20 20M12 21H8c-2.357 0-3.535 0-4.267-.732C3 19.535 3 18.357 3 16V8c0-2.357 0-3.536.733-4.268M12 21c2.357 0 3.535 0 4.267-.732.621-.621.715-1.562.73-3.27M12 21h5c1.886 0 2.829 0 3.415-.586M21 16.997V10c0-1.886 0-2.828-.585-3.414C19.829 6 18.886 6 17 6m0 7.11V8c0-2.357 0-3.536-.732-4.268S14.358 3 12.001 3H8q-.603-.001-1.108.004"
      />
    </svg>
  );
};
export default NoMeetingRoom;
