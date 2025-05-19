import React from "react";
const AiSecurity_03: React.FC<
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
        d="M20.059 4.575c-1.405 0-2.494-.635-3.709-1.358-1.17-.697-2.52-1.5-4.331-1.466-1.81.002-3.242.828-4.453 1.527-1.285.74-2.387 1.347-3.605 1.259l-.665-.048-.126.653c-.912 4.73-.286 8.63 1.37 11.548a11.36 11.36 0 0 0 7.34 5.516l.183.044.182-.048c3.236-.858 5.857-2.787 7.422-5.708 1.559-2.91 2.03-6.73 1.128-11.315l-.12-.604zm-7.745 4.27L12 7.997l-.314.85a4.8 4.8 0 0 1-2.836 2.836l-.85.314.85.314a4.8 4.8 0 0 1 2.836 2.836l.314.85.314-.85a4.8 4.8 0 0 1 2.836-2.836l.85-.314-.85-.314a4.8 4.8 0 0 1-2.836-2.836"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiSecurity_03;
