import React from "react";
const EarRings_01: React.FC<
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
        strokeWidth={1.5}
        d="M11.5 10.5a2.5 2.5 0 0 0-.898-1.003c-1.321-.822-2.474-.49-3.167.037l-.51.325-.509-.325c-.692-.528-1.845-.86-3.166-.037-1.734 1.08-2.126 4.64 1.873 7.645.761.572 1.803.858 1.803.858s1.041-.286 1.803-.858q.352-.265.66-.535"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.269 12.497c1.34-.822 2.51-.49 3.214.037l.517.325.517-.325c.703-.528 1.874-.86 3.214-.037 1.76 1.08 2.158 4.64-1.9 7.645C18.056 20.714 17 21 17 21s-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.565-1.901-7.645Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 7.5a1.5 1.5 0 0 1 3 0C18.5 8.648 17 9 17 9v3.5M5.5 4.5a1.5 1.5 0 1 1 3 0C8.5 5.648 7 6 7 6v3.5"
      />
    </svg>
  );
};
export default EarRings_01;
