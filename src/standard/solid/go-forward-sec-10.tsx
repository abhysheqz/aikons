import React from "react";
const GoForwardSec_10: React.FC<
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
        d="M9.578 3.33A9.005 9.005 0 0 0 3 12a9 9 0 1 0 14.4-7.201 1 1 0 1 1 1.2-1.6C21.27 5.206 23 8.402 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12C1 6.677 4.78 2.24 9.801 1.22a11.05 11.05 0 0 1 4.398 0 1 1 0 0 1 .615 1.561l-2 2.8a1 1 0 0 1-1.628 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.4 8.279c.933-.736 2.1.044 2.1 1.037V15a1 1 0 0 1-2 0v-4.134a1 1 0 0 1-1.176-1.603l1.02-.936q.027-.025.056-.048m5.81-.28h.08c.316 0 .624 0 .883.027.286.03.62.099.938.31a2 2 0 0 1 .552.553c.212.318.282.652.31.938.027.259.027.566.027.883v2.58c0 .316 0 .624-.026.883-.03.286-.099.62-.311.938a2 2 0 0 1-.552.552 2 2 0 0 1-.938.31c-.259.027-.567.027-.883.027h-.08c-.316 0-.624 0-.883-.026a2 2 0 0 1-.938-.311 2 2 0 0 1-.552-.552 2 2 0 0 1-.31-.938c-.027-.259-.027-.567-.027-.883v-2.58c0-.317 0-.624.026-.883.03-.286.099-.62.311-.938a2 2 0 0 1 .552-.552c.318-.212.652-.282.938-.311A9 9 0 0 1 14.21 8m-.693 2.018-.001.013a8 8 0 0 0-.016.72v2.5c0 .372.001.575.016.72l.001.013h.013c.144.016.348.017.72.017s.576-.001.72-.016l.013-.001.001-.013c.015-.145.016-.348.016-.72v-2.5c0-.372-.001-.576-.016-.72l-.001-.013-.013-.001a8 8 0 0 0-.72-.016c-.372 0-.576.001-.72.016z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoForwardSec_10;
