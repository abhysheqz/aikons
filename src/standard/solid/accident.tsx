import React from "react";
const Accident: React.FC<
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
        d="M13.178 1.81a.75.75 0 0 0-1.374-.187l-1.116 1.921L7.894 2.32a.75.75 0 0 0-1.009.936l1.127 3.196-1.175.261a.75.75 0 0 0-.373 1.257l2.5 2.555a.75.75 0 0 0 .536.225h2.506l-.727-2.544a.75.75 0 1 1 1.442-.412l.845 2.956h1.469a.75.75 0 0 0 .698-.476l1.965-5.017a.75.75 0 0 0-.907-.994l-2.76.802z"
        clipRule="evenodd"
      />
      <circle cx={18.5} cy={20} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        d="M21.02 7a2 2 0 0 0-1.638.853l-3.103 4.433-2.941 2.101a2 2 0 0 0-.838 1.628V20a1 1 0 0 0 1 1h1.437a3.703 3.703 0 0 1 3.563-4.7 3.7 3.7 0 0 1 3.564 4.698A1 1 0 0 0 23 20v-7a1 1 0 0 0-1-1h-3.08l2.1-3H22a1 1 0 0 0 0-2z"
      />
      <circle cx={5.5} cy={20} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        d="M2 9h.98l2.1 3H2a1 1 0 0 0-1 1v7a1 1 0 0 0 .936.998A3.704 3.704 0 0 1 5.5 16.3 3.7 3.7 0 0 1 9.063 21H10.5a1 1 0 0 0 1-1v-3.985a2 2 0 0 0-.838-1.628l-2.941-2.1-3.103-4.434A2 2 0 0 0 2.979 7H2A1 1 0 1 0 2 9"
      />
    </svg>
  );
};
export default Accident;
