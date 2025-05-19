import React from "react";
const EidMubarak: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.5 11.795C2.5 17.43 7.07 22 12.705 22c4.638 0 8.553-3.094 9.795-7.33A9.071 9.071 0 0 1 9.83 2C5.594 3.242 2.5 7.157 2.5 11.795"
      />
      <path
        fill="currentColor"
        d="m15.5 3 .502.452c.217.195.499.392.85.638q.18.125.384.27c.5.356 1.072.789 1.538 1.319.472.536.865 1.205.956 2.033.086.778-.104 1.609-.6 2.499v6.799h-1.5v-6.25h-4.26v6.25h-1.5v-6.8c-.497-.89-.686-1.72-.6-2.498.092-.828.485-1.497.957-2.033.466-.53 1.037-.963 1.538-1.319l.383-.27c.352-.245.634-.442.85-.637z"
      />
    </svg>
  );
};
export default EidMubarak;
