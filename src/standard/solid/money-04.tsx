import React from "react";
const Money_04: React.FC<
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
        d="M16 4.251c2.851 0 4.87.543 5.798.863.617.273.952.889.952 1.505v10.873c0 .66-.36 1.194-.814 1.514-.393.278-.905.43-1.425.366-.943-.233-2.595-.512-4.511-.512-2.35 0-3.677.443-5.587.717-1.774.254-3.813.305-7.14-.401l-.682-.152A1.74 1.74 0 0 1 1.25 17.33V6.282c0-1.15 1.078-1.956 2.16-1.72l.611.126c2.978.592 4.757.508 6.297.278C11.954 4.72 13.564 4.25 16 4.25m-4 4.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-6.5 2.488a1 1 0 0 0-1 1v.01a1 1 0 1 0 2 0v-.01a1 1 0 0 0-1-1m13-1a1 1 0 0 0-1 1v.01a1 1 0 1 0 2 0v-.01a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default Money_04;
