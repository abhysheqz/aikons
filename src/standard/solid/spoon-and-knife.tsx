import React from "react";
const SpoonAndKnife: React.FC<
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
        d="M18.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 22.75 6v7a.75.75 0 0 1-.75.75h-1.75V20a.75.75 0 0 1-1.5 0zM1.95 4.584C2.368 3.918 3.066 3.25 4 3.25s1.632.668 2.05 1.334c.434.693.7 1.58.7 2.416 0 .861-.285 1.579-.833 2.074a2.6 2.6 0 0 1-1.167.594V20a.75.75 0 0 1-1.5 0V9.668a2.6 2.6 0 0 1-1.167-.594C1.535 8.579 1.25 7.86 1.25 7c0-.836.266-1.723.7-2.416"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25c2.175 0 4.141.897 5.549 2.34v10.82a7.73 7.73 0 0 1-5.55 2.34 7.74 7.74 0 0 1-6.05-2.906v-7.346c.27-.14.531-.316.773-.534C7.566 9.2 7.949 8.134 7.949 7q0-.293-.033-.589A7.7 7.7 0 0 1 12 5.25M8.75 13a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 8.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpoonAndKnife;
