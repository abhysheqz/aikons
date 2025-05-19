import React from "react";
const MoneyReceiveFlow_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.017 17C4.217 17 6 18.783 6 20.983M18 20.983v-.092A3.89 3.89 0 0 1 21.89 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.017 10.981C4.217 10.981 6 9.2 6 7c-1.553.047-2.48.22-3.121.861C2 8.74 2 10.154 2 12.983V15c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15v-2.017c0-2.829 0-4.243-.879-5.122-.641-.641-1.568-.816-3.121-.863 0 2.18 1.769 3.952 3.942 3.983M12 7V3M15 7V5M9 7V5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </svg>
  );
};
export default MoneyReceiveFlow_01;
