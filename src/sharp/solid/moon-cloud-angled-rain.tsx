import React from "react";
const MoonCloudAngledRain: React.FC<
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
        d="m6.11 18.356 1-2 1.788.894-1 2zm4.5 0 1-2 1.788.894-1 2zm4.5 0 1-2 1.788.894-1 2zm-8 4 1-2 1.788.894-1 2zm4.5 0 1-2 1.788.894-1 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.959 8.58A5.3 5.3 0 0 0 4 10.593 5.75 5.75 0 0 0 1.25 15.5c0 1.904.925 3.592 2.35 4.638l2.838-5.795 3.6 1.8.9-1.8 3.6 1.8.9-1.8 4.472 2.236-2.18 4.666a5.25 5.25 0 0 0 .517-10.442 6.25 6.25 0 0 0-6.525-6.047 5.4 5.4 0 0 0-.582-1.501A5.3 5.3 0 0 0 7.993.787.957.957 0 0 0 6.78 1.82 2.46 2.46 0 0 1 5.585 4.25a2.4 2.4 0 0 1-2.665-.167.957.957 0 0 0-1.508.527 5.35 5.35 0 0 0 .547 3.97m1.226-2.263c.052.45.194.897.434 1.315a3.38 3.38 0 0 0 2.367 1.661 6.27 6.27 0 0 1 3.86-4.162A3.45 3.45 0 0 0 8.583 3.18a4.34 4.34 0 0 1-2.035 2.72 4.3 4.3 0 0 1-3.363.418"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonCloudAngledRain;
