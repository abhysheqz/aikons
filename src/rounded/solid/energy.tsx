import React from "react";
const Energy: React.FC<
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
        d="M13.349 2.376c.572.256.941.85.941 1.54v6.257c0 .084.03.139.05.162v.001h2.888c.728 0 1.21.513 1.403 1.02.195.511.17 1.166-.222 1.694l-5.999 8.085c-.444.598-1.159.757-1.758.489-.572-.256-.942-.85-.942-1.54v-6.257a.26.26 0 0 0-.05-.162v-.001H6.772c-.728 0-1.21-.513-1.403-1.02a1.79 1.79 0 0 1 .222-1.694l5.999-8.085c.444-.598 1.159-.757 1.759-.489"
      />
    </svg>
  );
};
export default Energy;
