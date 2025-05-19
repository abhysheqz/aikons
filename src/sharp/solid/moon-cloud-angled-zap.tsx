import React from "react";
const MoonCloudAngledZap: React.FC<
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
        d="m11.718 15.229 1.72 1.02-1.182 1.99h3l-2.975 5.01-1.72-1.02 1.182-1.99h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.959 8.58A5.3 5.3 0 0 0 4 10.593 5.75 5.75 0 0 0 6.413 21.22l4.78-8.047 4.3 2.553-.603 1.013h3l-2.678 4.511H17.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-6.525-6.047 5.4 5.4 0 0 0-.582-1.501A5.3 5.3 0 0 0 7.993.787.957.957 0 0 0 6.78 1.82a2.46 2.46 0 0 1-1.196 2.43 2.4 2.4 0 0 1-2.665-.168.957.957 0 0 0-1.508.527 5.35 5.35 0 0 0 .547 3.97m1.226-2.263c.052.45.194.898.434 1.315a3.38 3.38 0 0 0 2.367 1.661 6.27 6.27 0 0 1 3.86-4.162A3.45 3.45 0 0 0 8.583 3.18 4.34 4.34 0 0 1 6.548 5.9a4.3 4.3 0 0 1-3.363.418"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonCloudAngledZap;
