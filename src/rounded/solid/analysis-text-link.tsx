import React from "react";
const AnalysisTextLink: React.FC<
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
        d="M9 3a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1M12 7a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 2a1 1 0 0 1 1 1v11c0 1.678.002 2.836.12 3.707.062.464.14.997.488 1.342a2.8 2.8 0 0 0 1.685.832c.87.117 2.029.119 3.707.119h11a1 1 0 1 1 0 2H9.928c-1.589 0-2.882 0-3.902-.137-1.064-.143-1.979-.452-2.708-1.181s-1.038-1.644-1.18-2.708C2 16.954 2 15.66 2 14.072V3a1 1 0 0 1 1-1"
      />
      <path
        fill="currentColor"
        d="M6.187 19.865c.194-.409.377-.822.56-1.235.353-.8.706-1.598 1.135-2.36.4-.712.816-1.3 1.25-1.7.424-.391.806-.551 1.174-.551.572 0 1.01.46 1.39.858l.135.141c.552.567 1.417 1.454 2.782 1.454 1.15 0 1.981-.507 2.597-1.18.53-.582.93-1.325 1.264-1.944l.073-.137C19.33 11.765 19.86 11 21 11a1 1 0 1 0 0-2c-2.45 0-3.494 1.933-4.191 3.222l-.143.268c-.27.509-.546 1.028-.933 1.452-.322.352-.647.53-1.12.53-.46 0-.771-.26-1.425-.926l-.057-.06c-.56-.573-1.434-1.467-2.825-1.467-1.024 0-1.867.47-2.531 1.082-.655.605-1.192 1.398-1.636 2.188-.461.82-.842 1.678-1.223 2.536q-.23.518-.465 1.032.067.103.156.192c.48.477.986.718 1.58.816"
      />
    </svg>
  );
};
export default AnalysisTextLink;
