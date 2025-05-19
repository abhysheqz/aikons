import React from "react";
const Spoon: React.FC<
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
        d="M17.357 1.373c1.504-.287 3.17-.118 4.278.991 1.109 1.109 1.278 2.774.991 4.279-.29 1.525-1.076 3.08-2.155 4.159-1.197 1.197-2.556 1.603-3.9 1.342-1.039-.203-1.895-.108-2.362.39l-8.902 9.475a2.347 2.347 0 1 1-3.317-3.317l9.476-8.901c.498-.468.592-1.324.39-2.363-.262-1.344.145-2.702 1.341-3.9 1.08-1.079 2.635-1.865 4.16-2.155"
      />
    </svg>
  );
};
export default Spoon;
