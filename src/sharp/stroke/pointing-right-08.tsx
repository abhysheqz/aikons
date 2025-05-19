import React from "react";
const PointingRight_08: React.FC<
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
        strokeWidth={1.5}
        d="M11.492 15.796h1.903c.174 0 .455-.027.61-.08m0 0c.577-.197.993-.685.993-1.31v-1.71m-.993 3.02v1.783c0 .625-.432 1.117-1.009 1.315m-2.189.082h1.566c.174 0 .468-.03.623-.082m0 0v1.713c-.086.988-.775 1.471-1.582 1.471h-6.44c-1.641 0-2.86-1.303-2.972-2.87V10.1L7.55 6.505c2.273-1.341 3.902.268 6.465 3.107m.983 3.083h-2.991m2.99 0h5.255q.408 0 .744-.1c.984-.296 1.312-1.598.67-2.4-.273-.341-.626-.583-1.011-.583H9.49M15.997 4.5h5.463M19.497 2l2.5 2.5-2.5 2.5"
      />
    </svg>
  );
};
export default PointingRight_08;
