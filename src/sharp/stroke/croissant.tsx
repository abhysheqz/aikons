import React from "react";
const Croissant: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.807 3.657c-.814-.258-1.3.012-2.274.552a8.6 8.6 0 0 0-3.35 3.38c-.536.982-.803 1.473-.547 2.294m6.17-6.226c.814.258 1.14.924 1.792 2.256l1.037 2.119c.884 1.807.708 2.657-.66 4.038-.724.73-1.086 1.095-1.531 1.245a2 2 0 0 1-.626.104m-.011-9.762c1.01-.547 2.216-.988 3.274-1.272 1.523-.41 2.285-.614 3.069.007 1.196.948 1.022 4.97.077 6.142-.564.701-2.24 1.22-3.05 1.424m-9.541-.075c.482 1.548 4.482 3.543 6.182 3.536M3.636 9.883c-.543 1.02-.98 2.236-1.261 3.303-.273 1.032-.716 2.265.073 3.177.656.757 1.606.687 3.508.546m3.862-3.49s-.473 2.174-1.295 2.897c-.49.43-1.167.49-2.567.593m0 0c.874-.064 1.465-.108 1.906-.239"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.005 7.523c1.031 0 1.762.32 2.336.505.272.088.56.117.843.069.361-.062.766-.193 1.035-.373.594-.4.938-1.24.706-1.915-.227-.663-.812-.99-1.89-1.818-1.152-.8-2.268-1.31-3.523-1.46M2.502 16.64c0 1.744.532 2.71 2.005 4.287.647.692 1.004 1.002 1.628 1.068.49.051 1.137-.269 1.444-.652.377-.47.493-1.143.455-1.711-.283-1.091-.503-1.664-.62-2.724"
      />
    </svg>
  );
};
export default Croissant;
