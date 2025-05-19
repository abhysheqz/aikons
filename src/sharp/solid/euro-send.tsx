import React from "react";
const EuroSend: React.FC<
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
        d="M7.75 11h-6V9h6zM7.75 15h-6v-2h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 10.222C2.75 6.412 5.358 3 8.939 3c1.867 0 3.499.957 4.603 2.39l-1.584 1.22C11.166 5.584 10.085 5 8.938 5 6.789 5 4.75 7.16 4.75 10.222v3.556C4.75 16.84 6.788 19 8.939 19c1.146 0 2.227-.584 3.019-1.61l1.584 1.22C12.438 20.043 10.806 21 8.939 21c-3.58 0-6.189-3.411-6.189-7.222z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.421 12-1.293-1.293 1.415-1.414L22.25 13l-3.707 3.707-1.415-1.414L18.422 14h-5.585v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EuroSend;
