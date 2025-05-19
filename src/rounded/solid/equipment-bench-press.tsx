import React from "react";
const EquipmentBenchPress: React.FC<
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
        d="M6 2a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M3.5 3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-.5H2a1 1 0 0 1 0-2h.5V4a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2h-.5V7a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 5.5a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 4.5a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.207 9.25c-.516 0-1.014.03-1.47.255-.47.232-.792.616-1.093 1.077L4.63 15.194a.036.036 0 0 0 .03.056h13.755c.456 0 .684 0 .77-.148.087-.149-.024-.348-.247-.745l-2.026-3.618c-.287-.514-.605-.947-1.1-1.207-.476-.251-1.01-.282-1.557-.282zM19.685 17.373c.042-.276.063-.414-.027-.519-.09-.104-.24-.104-.54-.104H4.877c-.3 0-.45 0-.54.104-.089.104-.069.241-.028.516.108.73.374 1.334.91 1.756.69.543 1.65.624 2.627.624h8.25c1.002 0 1.981-.078 2.68-.63.532-.42.798-1.02.908-1.747"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentBenchPress;
