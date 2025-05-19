import React from "react";
const Bone_02: React.FC<
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
        d="M5.586 11.18a3.175 3.175 0 0 1 5.394 1.84 3.175 3.175 0 1 1-1.803 6.001.6.6 0 0 0-.27-.063c-.065.003-.083.022-.083.022l-3.55 3.55a.75.75 0 0 1-1.06 0L1.47 19.786a.75.75 0 0 1 0-1.06l3.55-3.55s.019-.018.022-.083a.6.6 0 0 0-.063-.27 3.18 3.18 0 0 1 .607-3.643M19.256 1.25a.75.75 0 0 1 .53.22l2.744 2.744a.75.75 0 0 1 0 1.06l-3.55 3.55s-.019.018-.022.083a.6.6 0 0 0 .063.27 3.176 3.176 0 1 1-6.001 1.803 3.175 3.175 0 1 1 1.803-6.001.6.6 0 0 0 .27.063c.065-.003.082-.022.082-.022l3.55-3.55a.75.75 0 0 1 .531-.22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 21a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1m5-5a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M8 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M3 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bone_02;
