import React from "react";
const EuroReceive: React.FC<
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
        d="M8 11H2V9h6zM8 15H2v-2h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 10.222C3 6.412 5.608 3 9.189 3c1.867 0 3.499.957 4.603 2.39l-1.584 1.22C11.416 5.584 10.335 5 9.188 5 7.039 5 5 7.16 5 10.222v3.556C5 16.84 7.038 19 9.189 19c1.146 0 2.227-.584 3.019-1.61l1.584 1.22C12.688 20.043 11.056 21 9.189 21 5.609 21 3 17.589 3 13.778z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.293 9.293 1.414 1.414L16.414 12H22v2h-5.586l1.293 1.293-1.414 1.414L12.586 13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EuroReceive;
