import React from "react";
const Course: React.FC<
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
        d="M2.25 5.175A2.923 2.923 0 0 1 5.171 2.25h1.947a.974.974 0 0 1 0 1.95H5.171a.974.974 0 0 0-.974.975v13.65c0 .538.436.975.974.975h12.658a.974.974 0 0 0 .974-.975v-3.9a.974.974 0 1 1 1.947 0v3.9a2.923 2.923 0 0 1-2.921 2.925H5.17a2.923 2.923 0 0 1-2.921-2.925z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.295 2.31a.75.75 0 0 0-.59 0l-7 3a.75.75 0 0 0 0 1.38l7 3a.75.75 0 0 0 .59 0l5.455-2.338v2.917a.75.75 0 0 0 1.5 0V6.71l.045-.02a.75.75 0 0 0 0-1.378z"
      />
      <path
        fill="currentColor"
        d="m9.395 9.201.295 2.36a1.69 1.69 0 0 0 1 1.35c.687.294 2.098.838 3.31.838s2.623-.544 3.31-.839c.57-.245.929-.773 1-1.349l.296-2.36-3.818 1.636a2 2 0 0 1-1.576 0z"
      />
    </svg>
  );
};
export default Course;
