import React from "react";
const Wheelchair: React.FC<
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
        d="M16.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M8.5 16c0 .828-.67 1.5-1.495 1.5h-.01A1.5 1.5 0 0 1 5.5 16c0-.828.67-1.5 1.496-1.5h.009c.826 0 1.495.672 1.495 1.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.28 4.027C2.987 4.001 2.602 4 2 4a1 1 0 1 1 0-2c.548 0 1.066 0 1.46.035.418.038.832.121 1.228.34a3 3 0 0 1 .97.858c.267.365.401.765.49 1.176.084.386.167 1.047.235 1.591h5.186c1.12 0 2.06 0 2.807.1.792.107 1.516.342 2.099.925s.818 1.307.925 2.099c.1.747.1 1.687.1 2.807v1.143a2.6 2.6 0 0 1 1.08.456c.533.376.884.96 1.288 1.635.204.338.404.67.5.797.127-.057.845-.453 1.147-.621a1 1 0 0 1 .97 1.75c-.283.156-1.147.635-1.399.738-.283.117-.64.217-1.054.149a2 2 0 0 1-.448-.132c-.375-.161-.625-.43-.808-.672a10 10 0 0 1-.515-.8c-.45-.747-.636-1.03-.761-1.15V18a1 1 0 1 1-2 0v-3h-4.57l-.262-.6A4 4 0 0 0 7 12c-.91 0-1.944-.613-2.09-1.75L4.38 6.1c-.075-.596-.124-.979-.186-1.266-.06-.273-.114-.371-.152-.423a1 1 0 0 0-.323-.286c-.056-.03-.16-.073-.439-.098"
      />
    </svg>
  );
};
export default Wheelchair;
