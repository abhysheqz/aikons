import React from "react";
const GoForwardSec_5: React.FC<
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
        d="M3.204 12a8.795 8.795 0 1 0 14.073-7.038A.977.977 0 0 1 18.45 3.4a10.74 10.74 0 0 1 4.3 8.6c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c.17 0 .392.006.56.014.273.013.593.027.858.087.337.076.774.268 1.016.766.25.517.106.995-.041 1.295-.121.249-.315.52-.487.76l-1.11 1.555a.977.977 0 0 1-1.352.234c-.024-.019-.04-.034-.07-.065l-1.78-1.78c-.219-.218-.328-.327-.478-.356-.15-.03-.281.026-.545.138A8.8 8.8 0 0 0 3.204 12"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.439 9.706a1.5 1.5 0 0 1 1.47-1.206H14a1 1 0 0 1 0 2h-2.664l-.115.71c.274-.04.56-.067.85-.067a2.929 2.929 0 1 1 0 5.857h-.075c-.37.001-.955.003-1.477-.168a2.2 2.2 0 0 1-.905-.55 2.2 2.2 0 0 1-.557-1.06 1 1 0 0 1 1.95-.443c.012.052.025.08.031.094l.01.016.017.011a.4.4 0 0 0 .072.03c.08.027.197.048.366.06.163.01.334.01.538.01h.03a.929.929 0 0 0 0-1.857c-.482 0-.926.108-1.517.252l-.322.078a1 1 0 0 1-1.22-1.132l.42-2.598z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoForwardSec_5;
