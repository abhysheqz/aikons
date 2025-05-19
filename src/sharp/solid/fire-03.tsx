import React from "react";
const Fire_03: React.FC<
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
        d="m16.517 4.041-.611-.572-1.917 2.518-3.339-4.235-.586.412C8.226 3.46 6.534 5.285 5.297 7.288 4.064 9.285 3.25 11.515 3.25 13.62c0 4.767 3.918 8.632 8.75 8.632 4.833 0 8.75-3.865 8.75-8.632 0-3.123-1.692-7.197-4.233-9.579m-.344 7.479-.423-.827-2.126 1.72-3.043-3.911-.611.59c-.506.487-1.178 1.16-1.723 1.963-.544.801-.997 1.783-.997 2.886 0 2.713 2.046 5.06 4.75 5.06s4.75-2.347 4.75-5.06c0-.873-.208-1.7-.577-2.421"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fire_03;
