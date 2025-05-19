import React from "react";
const YenSend: React.FC<
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
        d="M1.768 2.027a1 1 0 0 1 1.205.741C3.28 4.06 4.637 7.014 7.5 8.592c2.864-1.578 4.22-4.532 4.527-5.824a1 1 0 0 1 1.946.464c-.39 1.636-1.989 5.157-5.473 7.093V20a1 1 0 1 1-2 0v-9.675C3.016 8.389 1.417 4.868 1.027 3.232a1 1 0 0 1 .741-1.205"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 13a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1M4 17a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1M15 14.006a1 1 0 1 1 0-2h3.5v-.595c0-.175 0-.39.022-.567v-.004c.016-.126.088-.702.653-.977.567-.275 1.067.027 1.175.093l.004.002c.153.092.324.226.465.337l.03.024c.376.294.86.676 1.251 1.057.195.19.396.407.555.638.142.205.345.555.345.986s-.203.78-.345.986c-.159.23-.36.448-.555.638-.39.38-.875.762-1.25 1.057l-.031.024c-.14.11-.312.244-.465.336l-.004.003c-.108.065-.608.367-1.175.092-.565-.274-.637-.85-.653-.977v-.003a5 5 0 0 1-.022-.568v-.582z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenSend;
