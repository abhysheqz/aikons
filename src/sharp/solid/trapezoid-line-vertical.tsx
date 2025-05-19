import React from "react";
const TrapezoidLineVertical: React.FC<
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
        d="M20.07 18.99a.75.75 0 0 1-.57.26H13V4.752l4.5.001c.37 0 .685.27.741.636l2 12.999a.75.75 0 0 1-.171.602M11 4.75v14.5H4.5a.75.75 0 0 1-.741-.863l2-13.001A.75.75 0 0 1 6.5 4.75zM11 4.75V2h2v2.751zM11 19.25h2V22h-2z"
      />
    </svg>
  );
};
export default TrapezoidLineVertical;
