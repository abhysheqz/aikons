import React from "react";
const TropicalStormTracks_02: React.FC<
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
        d="M18.793 6.293a1 1 0 0 1 1.414 0l2.5 2.5A1 1 0 0 1 22 10.5h-1.5V13a8 8 0 0 1-8 8 1 1 0 1 1 0-2 6 6 0 0 0 6-6v-2.5H17a1 1 0 0 1-.707-1.707z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.183 3.651c-2.42-.608-5.58-.569-8.17.423C4.394 5.078 2.25 7.119 2.25 10.5a6.9 6.9 0 0 0 1.522 4.311l-2.129 1.15a.75.75 0 0 0 .174 1.388c2.42.608 5.58.569 8.17-.423 2.62-1.004 4.763-3.045 4.763-6.426a6.9 6.9 0 0 0-1.522-4.311l2.129-1.15a.75.75 0 0 0-.174-1.388M8.5 7.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TropicalStormTracks_02;
