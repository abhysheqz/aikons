import React from "react";
const NewReleases: React.FC<
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
        d="M13.25 2.202a1.75 1.75 0 0 0-2.498 0L9.304 3.677a.25.25 0 0 1-.224.071l-2.086-.384A1.75 1.75 0 0 0 4.94 4.86l-.247 1.902a.25.25 0 0 1-.146.196l-1.832.814a1.75 1.75 0 0 0-.802 2.48l.944 1.622a.25.25 0 0 1 0 .252l-.944 1.623a1.75 1.75 0 0 0 .802 2.48l1.832.813a.25.25 0 0 1 .146.197l.247 1.902a1.75 1.75 0 0 0 2.053 1.496l2.086-.385a.25.25 0 0 1 .224.071l1.448 1.476a1.75 1.75 0 0 0 2.498 0l1.448-1.476a.25.25 0 0 1 .224-.07l2.086.384a1.75 1.75 0 0 0 2.053-1.496l.247-1.902a.25.25 0 0 1 .146-.197l1.832-.813a1.75 1.75 0 0 0 .802-2.48l-.945-1.623a.25.25 0 0 1 0-.252l.945-1.623a1.75 1.75 0 0 0-.802-2.48l-1.832-.813a.25.25 0 0 1-.146-.196L19.06 4.86a1.75 1.75 0 0 0-2.053-1.496l-2.086.384a.25.25 0 0 1-.224-.07zm2.503 8.957a1 1 0 0 0-1.506-1.317l-2.796 3.195-1.244-1.244a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.46-.049z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewReleases;
