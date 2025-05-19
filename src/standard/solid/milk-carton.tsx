import React from "react";
const MilkCarton: React.FC<
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
        d="M19 9h-9a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3h-8a1 1 0 1 1 0-2h8a1 1 0 0 0 1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3v2.004a1 1 0 1 1-2 0V3a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v1.642l2.268 2.717a1 1 0 0 1-1.536 1.282l-2.268-2.718a2 2 0 0 1-.464-1.281V3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v1.642l2.268 2.717A1 1 0 0 1 20 9H10a1 1 0 0 1-.707-.292l-3-2.996A1 1 0 0 1 6 5.004z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.293 4.293a1 1 0 0 1 1.414 0L10.414 7A2 2 0 0 1 11 8.414V22a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V8a1 1 0 0 1 .293-.707zM5 8.414V20a1 1 0 0 0 1 1h3V8.414l-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.44 12.172a1 1 0 0 1 .931-.1l10 4A1 1 0 0 1 21 17v3a3 3 0 0 1-3 3h-8a1 1 0 0 1-1-1v-9a1 1 0 0 1 .44-.828"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MilkCarton;
