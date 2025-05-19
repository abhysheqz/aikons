import React from "react";
const EquipmentWeightlifting: React.FC<
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
        d="M8.292 16.293A1 1 0 0 1 8.999 16h6a1 1 0 0 1 .707.293l1.5 1.5-1.414 1.414L14.585 18H9.413l-1.207 1.207-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.999 20.5V17h-2v3.5h-6v2h14v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.001 6.75a1.75 1.75 0 0 0-1.75 1.75v1c0 .372.116.716.314 1a1.74 1.74 0 0 0-.314 1v1c0 .966.783 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-1c0-.372-.116-.716-.314-1 .198-.284.314-.628.314-1v-1a1.75 1.75 0 0 0-1.75-1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.006 3.5h11.988c.292 0 .569.128.759.35l2.997 3.5-1.517 1.3-2.698-3.15H6.465L3.767 8.65 2.25 7.35l2.997-3.5a1 1 0 0 1 .759-.35"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.999 1.5v6h-2v-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentWeightlifting;
