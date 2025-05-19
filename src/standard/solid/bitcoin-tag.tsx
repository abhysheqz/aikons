import React from "react";
const BitcoinTag: React.FC<
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
        d="M11.391 2.22a.75.75 0 0 1 .53-.22h10a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.22.53l-8.585 8.586a2.75 2.75 0 0 1-3.889 0l-7.172-7.172a2.75 2.75 0 0 1 0-3.889zm4.3 4.53a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M13.01 9.22a.75.75 0 0 0-1.06 1.06l.062.063-2.496 2.496-.063-.063a.75.75 0 1 0-1.06 1.061l.592.593.36.359-.063.062a.75.75 0 0 0 1.06 1.06l.063-.062.062.063a2.008 2.008 0 0 0 3.416-1.202 2.008 2.008 0 0 0 1.202-3.415l-.063-.063.063-.063a.75.75 0 1 0-1.06-1.06l-.063.062-.36-.359zm-.655 2.901.718-.718.951.952a.508.508 0 0 1-.717.718zm-1.06 1.06.95.953a.507.507 0 1 1-.717.717l-.952-.952z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinTag;
