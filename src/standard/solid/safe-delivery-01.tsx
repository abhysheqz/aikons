import React from "react";
const SafeDelivery_01: React.FC<
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
        d="M18 1.25h-8A1.75 1.75 0 0 0 8.25 3v8c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 19.75 11V3A1.75 1.75 0 0 0 18 1.25M13 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 13.25a.75.75 0 0 0-.75.75v6.02c0 .335.223.63.546.722l6.254 1.769a2.75 2.75 0 0 0 1.978-.187l7.585-3.792a1.627 1.627 0 0 0 .783-2.06 2.75 2.75 0 0 0-3.423-1.587l-2.485.828c.174.31.304.662.304 1.015a.6.6 0 0 1-.366.552l-3.845 1.626a1.6 1.6 0 0 1-1.129.044l-2.642-.88a.6.6 0 1 1 .38-1.14l2.642.881a.4.4 0 0 0 .282-.01l3.368-1.424a2 2 0 0 0-.092-.162q-.036-.055-.075-.11l-.04-.06a4.08 4.08 0 0 0-1.006-.938 3.44 3.44 0 0 0-1.769-.482h-.807l-1.881-1.034a2.75 2.75 0 0 0-1.326-.341z"
      />
    </svg>
  );
};
export default SafeDelivery_01;
