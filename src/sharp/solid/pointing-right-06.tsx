import React from "react";
const PointingRight_06: React.FC<
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
        d="M22.75 10.753c0-.769-.585-1.37-1.281-1.37h-11.14v-.801h4.17c-.347-.41-1.147-1.35-1.52-1.732-.757-.769-1.54-1.36-2.369-1.539a2.7 2.7 0 0 0-.744-.056c-.371.024-.745.157-1.245.446-.504.292-1.103.722-1.93 1.318L3.228 9.973H1.25v10.333h1.993c.268.261.849.822 1.334 1.24.243.208.486.406.707.565.228.163.41.271.538.32.4.152.863.235 1.52.277.658.042 1.486.042 2.614.042h1.487c.707 0 1.281-.589 1.281-1.315v-1.426h-1.838v-.801h2.228c.707 0 1.281-.589 1.281-1.315v-1.427H12v-.8h2.785c.707 0 1.281-.589 1.281-1.315v-1.427h-2.952v-.8h8.355c.696 0 1.281-.602 1.281-1.37"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.922 5.457-.793.793 1.414 1.414 3.207-3.207-3.207-3.207-1.414 1.414.793.793h-3.586v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_06;
