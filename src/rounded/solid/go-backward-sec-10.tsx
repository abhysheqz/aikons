import React from "react";
const GoBackwardSec_10: React.FC<
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
        d="M20.795 12A8.795 8.795 0 1 1 6.723 4.962.977.977 0 1 0 5.55 3.4a10.74 10.74 0 0 0-4.3 8.6c0 5.937 4.814 10.75 10.75 10.75 5.938 0 10.75-4.813 10.75-10.75S17.938 1.25 12 1.25c-.169 0-.392.006-.56.014-.272.012-.593.027-.857.087-.337.076-.774.268-1.016.766-.251.517-.106.995.04 1.295.122.249.316.52.488.76l1.11 1.555a.977.977 0 0 0 1.352.234 1 1 0 0 0 .07-.065l1.78-1.78c.218-.218.327-.327.477-.357s.282.027.546.139A8.8 8.8 0 0 1 20.795 12"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.4 9.279c.933-.737 2.1.044 2.1 1.037V16a1 1 0 0 1-2 0v-4.134a1 1 0 0 1-1.176-1.603l1.02-.936q.027-.025.056-.048m5.81-.28h.08c.316 0 .624 0 .883.027.286.029.62.098.938.31a2 2 0 0 1 .552.553c.212.317.282.652.31.938.027.258.027.566.027.883v2.58c0 .316 0 .624-.026.882-.03.287-.099.621-.311.939a2 2 0 0 1-.552.552 2 2 0 0 1-.938.31 9 9 0 0 1-.883.027h-.08c-.316 0-.624 0-.883-.026a2 2 0 0 1-.938-.311 2 2 0 0 1-.552-.552 2 2 0 0 1-.31-.939c-.027-.258-.027-.566-.027-.882v-2.58c0-.317 0-.625.026-.883.03-.286.099-.62.311-.938a2 2 0 0 1 .552-.552c.318-.213.652-.282.938-.311C13.586 9 13.894 9 14.21 9m-.693 2.018-.001.012a8 8 0 0 0-.016.72v2.5c0 .373.001.576.016.721l.001.012.013.002c.144.014.348.016.72.016s.576-.002.72-.016l.013-.002.001-.012c.015-.145.016-.348.016-.72v-2.5c0-.372-.001-.576-.016-.72l-.001-.013-.013-.001a8 8 0 0 0-.72-.016c-.372 0-.576 0-.72.016z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoBackwardSec_10;
