import React from "react";
const Constellation: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 16a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M8.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.54 6.377 7.239-2.633.656 1.806 1.8.675-1.595 4.253-1.873-.702 1.535-4.094-7.08 2.574zm12.118 9.57-4.315-2.158.894-1.788 4.422 2.21-.87 1.74.79 1.776-5.344 2.375-.812-1.828zm-4.913-1.838-.504 4.03-1.984-.247.503-4.031z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Constellation;
