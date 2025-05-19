import React from "react";
const Playlist_03: React.FC<
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
        d="M1 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M1 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M1 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M18.961 8.725v-.003A1 1 0 0 0 17 9v5.535A4 4 0 1 0 19 18v-5.63c.732.63 1.718 1.13 3 1.13a1 1 0 1 0 0-2c-1.052 0-1.787-.598-2.311-1.331a5.5 5.5 0 0 1-.723-1.43l-.005-.016z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Playlist_03;
