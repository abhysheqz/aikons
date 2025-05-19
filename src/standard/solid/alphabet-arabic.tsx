import React from "react";
const AlphabetArabic: React.FC<
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
        d="M5.886 3.972A.975.975 0 0 0 4.91 3a.975.975 0 0 0-.977.972v14.584H1.977a.975.975 0 0 0-.977.972c0 .537.438.972.977.972h1.955a1.95 1.95 0 0 0 1.954-1.944zm3.91 0A.975.975 0 0 0 8.82 3a.975.975 0 0 0-.977.972v6.806c0 .537.437.972.977.972s.977-.435.977-.972zm6.352 4.375a.975.975 0 0 0-.977.972c0 .537.437.973.977.973.662 0 1.794.46 2.82 1.253.483.373.89.782 1.17 1.177h-6.434v-8.75A.975.975 0 0 0 12.728 3a.975.975 0 0 0-.977.972v14.584H9.795a.975.975 0 0 0-.977.972c0 .537.438.972.977.972h1.955a1.95 1.95 0 0 0 1.954-1.944v-3.89h7.819c.54 0 .977-.435.977-.972 0-.76-.328-1.47-.74-2.06-.42-.6-.985-1.154-1.592-1.624-1.173-.907-2.728-1.663-4.02-1.663"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetArabic;
