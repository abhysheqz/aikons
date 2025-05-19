import React from "react";
const BodyPartLeg: React.FC<
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
        d="M5 2C7.693 2.314 17 4 20 12l-4.901 10H7.626c0-5.2 2.917-7.682 4.375-8.274-3.836.87-7 0-8-1.726l.44-4.393 7.307 2.6.503-1.414L4.594 6.07z"
      />
    </svg>
  );
};
export default BodyPartLeg;
