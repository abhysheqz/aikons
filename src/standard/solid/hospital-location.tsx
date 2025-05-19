import React from "react";
const HospitalLocation: React.FC<
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
        d="M12 1.25c-4.84 0-8.75 3.96-8.75 8.83 0 2.651 1.218 4.628 2.704 6.325.653.746 1.374 1.456 2.073 2.145l.272.268c.793.782 1.549 1.546 2.202 2.36.752.937 2.244.968 3.022.033.67-.804 1.433-1.57 2.228-2.363l.091-.09c.758-.755 1.541-1.535 2.244-2.359 1.47-1.721 2.664-3.717 2.664-6.318 0-4.87-3.91-8.831-8.75-8.831M11 7.5a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V11h2v1.5a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0V9h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HospitalLocation;
