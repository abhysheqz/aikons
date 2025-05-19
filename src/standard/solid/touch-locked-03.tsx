import React from "react";
const TouchLocked_03: React.FC<
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
        d="M15.75 15.5a2.25 2.25 0 0 1 4.5 0v.75H21a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h.75zm3 .75h-1.5v-.75a.75.75 0 0 1 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.755 1.25a2.5 2.5 0 0 0-2.5 2.5v8.12l-.896-.768a2.49 2.49 0 0 0-3.576 3.43l4 5.994A2.75 2.75 0 0 0 9.07 21.75h3.678V17c0-1 .652-1.848 1.555-2.14a3.75 3.75 0 0 1 5.346-2.728A3.75 3.75 0 0 0 16 9.25h-3.745v-5.5a2.5 2.5 0 0 0-2.5-2.5"
      />
    </svg>
  );
};
export default TouchLocked_03;
