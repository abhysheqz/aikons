import React from "react";
const TowTruck: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 16h-2"
      />
      <path
        fill="currentColor"
        d="M19.5 19.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M9.5 19.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v7"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 2.25a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 .5.5 0 1 1-.5.5h-2a2.5 2.5 0 1 0 3.5-2.292V4.25h1.595l.777 7.767H2.227a.97.97 0 0 0-.977.966v5.8c0 .534.437.967.977.967h1.056a3.75 3.75 0 1 1 7.434 0h2.566a3.75 3.75 0 1 1 7.434 0h1.056c.54 0 .977-.433.977-.967v-5.8a.96.96 0 0 0-.235-.629L16.65 5.588a.98.98 0 0 0-.742-.338h-3.91a.97.97 0 0 0-.976.967v1.765L8.124 2.764a1 1 0 0 0-.874-.514zm7.226 9.767-2.25-4.05.406 4.05zm8.671 0h-6.67V7.184h2.482z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TowTruck;
