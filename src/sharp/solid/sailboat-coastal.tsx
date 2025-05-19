import React from "react";
const SailboatCoastal: React.FC<
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
        d="M13.25 10.75h-6a.75.75 0 0 1-.564-1.244l7-8a.75.75 0 0 1 1.235.159l4 8a.75.75 0 0 1-.671 1.085h-3V14h-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 22.75H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.342 19.25h15.816a8 8 0 0 0 1.19-2.073c.485-1.225.652-2.42.652-3.177v-.75H2.5V14c0 .758.167 1.952.653 3.177.276.694.66 1.414 1.189 2.073"
      />
    </svg>
  );
};
export default SailboatCoastal;
