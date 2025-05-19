import React from "react";
const LocationShare_02: React.FC<
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
        d="M3.232 5.584A1 1 0 0 1 3.749 6.9a9.03 9.03 0 0 0 0 7.2 1 1 0 1 1-1.833.8c-1.221-2.8-1.221-6 0-8.8a1 1 0 0 1 1.316-.516m17.536 0a1 1 0 0 1 1.316.516c1.221 2.8 1.221 6 0 8.8a1 1 0 1 1-1.833-.8 9.03 9.03 0 0 0 0-7.2 1 1 0 0 1 .517-1.316M12 2.75c-4.267 0-7.75 3.398-7.75 7.619 0 2.275 1.055 3.97 2.336 5.405.593.665 1.252 1.293 1.886 1.898l.135.128c.684.653 1.336 1.284 1.906 1.952.76.893 2.211.923 2.996.031.576-.654 1.225-1.28 1.903-1.934l.025-.024c.678-.653 1.382-1.334 2.012-2.059 1.267-1.456 2.301-3.165 2.301-5.397 0-4.221-3.483-7.619-7.75-7.619m0 4.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationShare_02;
