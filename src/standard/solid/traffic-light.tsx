import React from "react";
const TrafficLight: React.FC<
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
        d="M6.25 4A2.75 2.75 0 0 1 9 1.25h6A2.75 2.75 0 0 1 17.75 4v11A2.75 2.75 0 0 1 15 17.75H9A2.75 2.75 0 0 1 6.25 15zm7.25 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M16.25 4a.75.75 0 0 1 .75-.75h3.001a.75.75 0 0 1 .75.75l-.001 1.5a.75.75 0 0 1-.334.624l-3 2a.75.75 0 0 1-.832-1.248l2.666-1.778V4.75H17a.75.75 0 0 1-.75-.75M16.25 11a.75.75 0 0 1 .75-.75h3.001a.75.75 0 0 1 .75.75l-.001 1.5a.75.75 0 0 1-.334.624l-3 2a.75.75 0 1 1-.832-1.248l2.666-1.778v-.348H17a.75.75 0 0 1-.75-.75M4 3.25h3.001a.75.75 0 1 1 0 1.5H4.75v.349l2.667 1.777a.75.75 0 1 1-.831 1.248l-3.002-2A.75.75 0 0 1 3.25 5.5V4A.75.75 0 0 1 4 3.25M4 10.25h3.001a.75.75 0 0 1 0 1.5H4.75v.348l2.667 1.778a.75.75 0 1 1-.831 1.248l-3.002-2a.75.75 0 0 1-.334-.624V11a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TrafficLight;
