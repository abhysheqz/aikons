import React from "react";
const Location_10: React.FC<
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
        d="M12 1.25c-4.267 0-7.75 3.398-7.75 7.619 0 2.275 1.055 3.97 2.336 5.405.593.665 1.252 1.293 1.886 1.898l.135.128c.684.653 1.336 1.284 1.906 1.952.76.893 2.211.923 2.996.031.576-.654 1.225-1.28 1.903-1.934l.025-.024c.678-.653 1.382-1.334 2.012-2.059 1.267-1.456 2.301-3.165 2.301-5.397 0-4.221-3.483-7.619-7.75-7.619M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 18a1 1 0 0 1 1 1c0 .246.225.737 1.205 1.227.92.46 2.26.773 3.795.773s2.876-.313 3.795-.773C16.775 19.737 17 19.246 17 19a1 1 0 1 1 2 0c0 1.411-1.118 2.42-2.31 3.016-1.252.626-2.912.984-4.69.984s-3.438-.358-4.69-.984C6.118 21.42 5 20.41 5 19a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_10;
