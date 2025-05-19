import React from "react";
const ToyTrain: React.FC<
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
        d="M1 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M5.5 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 3a1 1 0 0 1 1 1v12c0 .242 0 .39.005.501.013.275.206.48.494.494C4.61 17 4.759 17 5 17v2c-.4 0-.797.009-1.147-.085a2.5 2.5 0 0 1-1.768-1.768C1.991 16.797 2 16.401 2 16V4a1 1 0 0 1 1-1M11 17V4a1 1 0 1 1 2 0v15H9v-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.25a.75.75 0 0 0-.75.75v8.254c0 .414.336.75.75.75h1.358c.242 0 .363 0 .423-.07.06-.068.04-.2.002-.465a3.25 3.25 0 1 1 6.433 0c-.038.264-.057.397.003.466s.18.069.423.069h.392c.206 0 .427 0 .615-.025.219-.03.5-.105.735-.341.236-.236.311-.516.341-.736.025-.187.025-.409.025-.614 0-1.31-.461-2.52-.97-3.705-.37-.864-1.093-1.633-2.172-1.8a5 5 0 0 0-.05-.322c-.133-.662-.317-1.318-.83-1.739-.514-.42-1.193-.472-1.867-.472zm3 2.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2v1.25h-2V8a1 1 0 0 1-1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <circle cx={17} cy={18} r={2.25} fill="currentColor" />
    </svg>
  );
};
export default ToyTrain;
