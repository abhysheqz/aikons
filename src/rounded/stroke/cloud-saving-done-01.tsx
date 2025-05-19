import React from "react";
const CloudSavingDone_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 18a4.5 4.5 0 1 0-.022-9m0 0q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 9a5.5 5.5 0 0 1-.578 2M6.52 8.023A5 5 0 0 0 6 17.9m.52-9.877Q6.757 8 7 8c1.126 0 2.165.372 3 1M9 19s1 0 2 2c0 0 3.177-5 6-6"
      />
    </svg>
  );
};
export default CloudSavingDone_01;
