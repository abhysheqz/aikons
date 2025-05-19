import React from "react";
const HandGrip: React.FC<
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
        d="M2.342 19.816c1.718-1.24 2.644-4.196 3.118-6.468.138-.66.197-1.995.953-2.298.433-.174 1 .116 2.136.696.873.445 1.31.668 1.422 1.138.27 1.126-1.552 1.56-1.12 2.71.484 1.284.156 1.659-.783 2.5-.718.643.216 1.457-.2 2.165-1.034 1.761-2.67 2.286-4.832 1.113-.573-.311-1.562-.93-.694-1.556ZM21.658 19.816c-1.718-1.24-2.644-4.196-3.118-6.468-.138-.66-.197-1.995-.953-2.298-.433-.174-1 .116-2.136.696-.873.445-1.31.668-1.422 1.138-.269 1.121 1.548 1.57 1.12 2.71-.484 1.284-.156 1.659.783 2.5.718.643-.216 1.457.2 2.165 1.034 1.761 2.67 2.286 4.832 1.113.573-.311 1.562-.93.694-1.556Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m8.5 11.5.75-2.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.037 6.213 1.511 5.428"
      />
    </svg>
  );
};
export default HandGrip;
