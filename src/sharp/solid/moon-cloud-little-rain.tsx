import React from "react";
const MoonCloudLittleRain: React.FC<
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
        d="M10.997 17.25v-2.5h2v2.5zm-3 3v-2.5h2v2.5zm6 0v-2.5h2v2.5zm-8.5 3v-2.5h2v2.5zm5.5 0v-2.5h2v2.5zm5.5 0v-2.5h2v2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.959 8.58A5.3 5.3 0 0 0 4 10.593 5.75 5.75 0 0 0 1.25 15.5a5.75 5.75 0 0 0 2.746 4.904V19.25h2.5v-3h3.001v-3h5v3h3v3h2.5v1.37a5.251 5.251 0 0 0-1.75-9.817 6.25 6.25 0 0 0-6.525-6.047 5.4 5.4 0 0 0-.582-1.501A5.3 5.3 0 0 0 7.993.787.957.957 0 0 0 6.78 1.82 2.46 2.46 0 0 1 5.585 4.25a2.4 2.4 0 0 1-2.665-.167.957.957 0 0 0-1.508.527 5.35 5.35 0 0 0 .547 3.97m1.226-2.263c.052.45.194.897.434 1.315a3.38 3.38 0 0 0 2.367 1.661 6.27 6.27 0 0 1 3.86-4.162A3.45 3.45 0 0 0 8.583 3.18a4.34 4.34 0 0 1-2.035 2.72 4.3 4.3 0 0 1-3.363.418"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonCloudLittleRain;
