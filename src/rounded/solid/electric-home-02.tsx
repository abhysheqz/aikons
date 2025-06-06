import React from "react";
const ElectricHome_02: React.FC<
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
        d="M12 1.25c-.866 0-1.64.277-2.476.746-.81.454-1.738 1.125-2.905 1.97l-1.51 1.09c-.936.677-1.684 1.218-2.248 1.719-.582.517-1.018 1.032-1.295 1.68-.277.65-.344 1.315-.307 2.083.036.74.174 1.635.345 2.75l.315 2.05c.244 1.585.437 2.846.722 3.828.294 1.016.71 1.823 1.45 2.44.739.613 1.618.887 2.692 1.017 1.045.127 2.363.127 4.028.127h.44v-3.506a2.57 2.57 0 0 1-1.915-1.033l-.351-.483a5.9 5.9 0 0 1-1.12-2.989l-.108-1.297c-.076-.926.663-1.614 1.493-1.686V10a.75.75 0 1 1 1.5 0v1.75h2.5V10a.75.75 0 0 1 1.5 0v1.756c.833.07 1.574.758 1.497 1.686l-.107 1.297a5.9 5.9 0 0 1-1.12 2.99l-.351.482a2.57 2.57 0 0 1-1.919 1.033v3.502l2.251-.004h.01c2.182-.03 3.732-.167 4.898-1.137.74-.616 1.156-1.423 1.45-2.439.285-.982.478-2.244.722-3.827l.315-2.052c.171-1.114.309-2.008.345-2.749.037-.768-.03-1.433-.307-2.083-.277-.648-.713-1.163-1.295-1.68-.564-.5-1.312-1.041-2.249-1.719l-1.509-1.09c-1.167-.845-2.095-1.516-2.905-1.97-.836-.47-1.61-.746-2.476-.746"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricHome_02;
