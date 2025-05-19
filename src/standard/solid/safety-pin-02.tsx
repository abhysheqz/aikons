import React from "react";
const SafetyPin_02: React.FC<
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
        d="M13.182 3.064c1.97-2.573 5.713-2.766 7.987-.434 2.267 2.327 2.077 6.151-.45 8.161l-.03.022-2.15 1.546a.75.75 0 0 1-1.025-.143l-.956-1.203a1.75 1.75 0 0 1 .171-2.362l.277-.261.046-.04c.526-.42.569-1.212.12-1.674-.436-.446-1.173-.41-1.58.124a1 1 0 0 1-.054.064l-.31.324a1.75 1.75 0 0 1-2.474.059l-1.272-1.214a.75.75 0 0 1-.038-1.045zM4.5 17.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 19.25a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.317 3.799a1 1 0 0 1 .644 1.259l-4.01 12.41a1 1 0 0 1-1.902-.615l4.009-12.41a1 1 0 0 1 1.259-.644m10.44 7.297a1 1 0 0 1-.102 1.41l-10.403 9a1 1 0 1 1-1.308-1.512l10.402-9a1 1 0 0 1 1.41.102"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafetyPin_02;
