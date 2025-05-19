import React from "react";
const Recycle_03: React.FC<
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
        d="m5.525 1.75 4.623 1.889L8.55 8.085l-1.807-.652.594-1.653a7.7 7.7 0 0 0-4.06 8.131l-1.894.319a10 10 0 0 1-.133-1.603 9.62 9.62 0 0 1 5.058-8.479L4.8 3.532zm13.01 10.877a7.696 7.696 0 0 0-6.4-7.592l.317-1.898a9.62 9.62 0 0 1 8.004 9.49q-.001.763-.116 1.495l1.329-.907 1.081 1.59-4.505 3.076-2.446-4.7 1.703-.89.906 1.74q.126-.683.127-1.404m-15.83 3.85h5.267V18.4h-2.2a7.64 7.64 0 0 0 5.08 1.924c1.969 0 3.762-.74 5.122-1.96l1.28 1.434a9.56 9.56 0 0 1-6.401 2.45 9.55 9.55 0 0 1-6.227-2.296v1.816h-1.92z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Recycle_03;
