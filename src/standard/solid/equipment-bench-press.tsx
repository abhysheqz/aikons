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
        d="M6.5 2a1 1 0 0 1 1 1v1.5h9V3a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V6.5H15v2.828a2.75 2.75 0 0 1 1.727 1.286l2.648 4.541q.028.047.053.095H4.572q.025-.048.053-.095l2.648-4.54A2.75 2.75 0 0 1 9 9.327V6.5H7.5V8a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1M13 6.5v2.75h-2V6.5zM4 3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-.5h-.5a1 1 0 0 1 0-2H3V4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2H21V7a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m-.25 13.75H4.25V17A2.75 2.75 0 0 0 7 19.75V21a1 1 0 1 0 2 0v-1.25h6V21a1 1 0 1 0 2 0v-1.25A2.75 2.75 0 0 0 19.75 17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentBenchPress;
