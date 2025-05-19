import React from "react";
const Radius: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12M12 14.25A2.25 2.25 0 0 0 14.016 13h2.155l-1.293 1.293 1.414 1.414L20 12l-3.707-3.707-1.414 1.414L16.171 11h-2.155A2.25 2.25 0 1 0 12 14.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radius;
