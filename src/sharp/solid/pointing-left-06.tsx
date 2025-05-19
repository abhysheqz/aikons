import React from "react";
const PointingLeft_06: React.FC<
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
        d="M1.25 10.753c0-.769.585-1.37 1.281-1.37h11.14v-.801h-4.17c.347-.41 1.147-1.35 1.52-1.732.757-.769 1.54-1.36 2.369-1.539q.369-.079.744-.056c.371.024.745.157 1.245.446.504.292 1.103.722 1.93 1.318l3.462 2.954h1.979v10.333h-1.993c-.269.261-.849.822-1.334 1.24-.243.208-.486.406-.707.565q-.344.245-.538.32c-.4.152-.863.235-1.52.277-.658.042-1.486.042-2.614.042h-1.487c-.707 0-1.281-.589-1.281-1.315v-1.426h1.838v-.801h-2.228c-.707 0-1.281-.589-1.281-1.315v-1.427H12v-.8H9.215c-.707 0-1.281-.589-1.281-1.315v-1.427h2.952v-.8H2.531c-.696 0-1.281-.602-1.281-1.37"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.078 5.457.793.793-1.414 1.414L1.25 4.457 4.457 1.25l1.414 1.414-.793.793h3.586v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_06;
