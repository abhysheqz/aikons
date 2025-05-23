import React from "react";
const Legal_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.5 22 1.362-2.724a.5.5 0 0 1 .447-.276h3.382a.5.5 0 0 1 .447.276L19.5 22m-8 0h9M20 12l2-2m-2 5 2 1M9.5 2.001l-.705.556m0 0c1.372 1.068 4.294 3.654 4.513 3.914.259.219 2.547 2.853 3.611 4.228M8.795 2.557 5.053 6.291m0 0L4.5 7m.553-.71c.577.705 1.447 1.768 2.22 2.675a29 29 0 0 0 3.228 3.236c.907.776 1.97 1.65 2.675 2.23m4.324-4.431-.581.698m0 0-3.743 3.733m0 0-.676.569"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 11.605-4.925 5.781a1.746 1.746 0 1 1-2.461-2.461L8.395 10"
      />
    </svg>
  );
};
export default Legal_01;
