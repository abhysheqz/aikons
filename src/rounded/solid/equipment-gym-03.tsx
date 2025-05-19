import React from "react";
const EquipmentGym_03: React.FC<
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
        d="M3.5 3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-.5H2a1 1 0 0 1 0-2h.5V4a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2h-.5V7a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M6.5 2a1 1 0 0 1 1 1v1.5h9V3a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V6.5h-9V8a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 7.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0V8.5a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0V8.5a1 1 0 0 1 1-1M8 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.458 15.44c.362-.155.733-.19 1.112-.19h8.86c.38 0 .75.035 1.112.19.366.158.65.408.917.708.16.168.733.777.894 1.01.157.227.326.529.38.88.059.387-.03.794-.325 1.144-.327.387-.808.485-1.178.526-.383.042-.881.042-1.463.042H7.232c-.58 0-1.08 0-1.462-.042-.37-.041-.85-.14-1.178-.526a1.4 1.4 0 0 1-.324-1.144c.053-.351.222-.653.379-.88.161-.233.734-.842.894-1.01.266-.3.55-.55.917-.707"
      />
    </svg>
  );
};
export default EquipmentGym_03;
