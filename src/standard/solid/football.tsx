import React from "react";
const Football: React.FC<
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M9.09 3.48a9.02 9.02 0 0 0-4.584 3.535L5.65 9.608l3.369.835 1.94-1.467V4.795zm3.948 1.336v4.157l1.497 1.133 3.738-1.427.842-2.192a9 9 0 0 0-4.201-3.005zM21 11.944l-1.856-1.37-3.748 1.43-.789 2.528 1.834 3.01 2.303.417A8.97 8.97 0 0 0 21 11.944m-7.108 8.857.773-2.2-1.802-3.101h-2.289l-1.777 2.18-.027 2.723a9.038 9.038 0 0 0 5.122.398M4.18 16.458l2.954-.032L9.195 13.9l-.429-1.375-3.84-.952-1.876 1.385a8.9 8.9 0 0 0 1.13 3.501"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Football;
