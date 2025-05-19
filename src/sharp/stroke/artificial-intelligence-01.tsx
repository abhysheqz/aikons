import React from "react";
const ArtificialIntelligence_01: React.FC<
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
        strokeWidth={1.5}
        d="M9.996 3.969H4v5.903h5.996z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 9.872v1.968m2.997-1.968v1.968M5.5 2V3.97M8.497 2v1.968M4 5.445H2.002M4 8.396H2.002m9.993-2.951H9.997m1.998 2.951H9.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.879 2.32c3.894.31 7.773 3.71 7.606 8.128l1.767 2.595.68.919c.014.019.062.097.066.118.006.037-.109.079-.143.093l-1.86.92-1.004 3.445-2.987.97v2.49m-9.494.001v-4.895m2.484 1.139c-2.21-.624-3.9-2.013-4.984-3.938"
      />
    </svg>
  );
};
export default ArtificialIntelligence_01;
