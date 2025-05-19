import React from "react";
const Colosseum: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.017 20.998v-3M10.018 14.998v-3M6.02 15.998v-3M8.019 20.998v-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.034 9.086 8.008 3.002c-2.528.386-5.064 1.223-6.01 1.723v6.245m8.036-1.884 2-.128 1.144 2.794m-3.144-2.666c-1.903 0-6.124 1-8.036 1.884m14.971 9.981h5.033V16.99m-5.033 3.962-2.41-5.847m2.41 5.847-14.971.047V16.99m11.18-5.237 1.381 3.351m-1.381-3.35 3.791.247.06-2.516c.805.147 3.516.716 4.973 1.536v5.97m-7.443-1.886c-5.145-.433-10.002.689-12.561 1.885m12.561-1.886c2.49.21 5.047.782 7.443 1.886M1.998 10.97v6.02"
      />
    </svg>
  );
};
export default Colosseum;
