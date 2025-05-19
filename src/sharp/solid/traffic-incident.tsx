import React from "react";
const TrafficIncident: React.FC<
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
        d="M20.298 16.985a.97.97 0 0 0 .185-1.115l-1.538-3.093.993-.334-.604-1.83-1.06.357-.423-1.717a.96.96 0 0 0-.252-.447l-2.72-2.72a.965.965 0 0 0-1.365.005l-.552.553-1.06-1.061-1.415 1.414 1.06 1.06-5.656 5.658-1.06-1.06-1.415 1.413 1.06 1.06-.552.553a.965.965 0 0 0-.005 1.365l2.72 2.72c.123.123.278.21.447.252l1.717.423-.356 1.06 1.829.604.334-.993 3.093 1.538c.371.184.82.11 1.115-.185zm-8.616 2.498 5.634-5.635 1.129 2.27-4.493 4.494zm2.34-9.658 1.06-1.06 1.061 1.06-1.06 1.06zM8.719 17.25l-1.061 1.06-1.06-1.06 1.06-1.061zm.353-3.182 2.829-2.829 1.06 1.06-2.828 2.83zM21 3.25H3v-2h18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TrafficIncident;
