import React from "react";
const RiceBowl_02: React.FC<
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
        d="M12.935 4.288a2.77 2.77 0 0 0-1.87 0c-.327.117-.701.39-1.251 1.055-.552.666-1.189 1.608-2.09 2.94L7.02 9.328a.98.98 0 0 1-1.335.27.92.92 0 0 1-.277-1.3l.734-1.085c.864-1.28 1.552-2.3 2.17-3.045.625-.755 1.267-1.345 2.085-1.638a4.75 4.75 0 0 1 3.206 0c.817.293 1.46.883 2.085 1.638.617.746 1.305 1.764 2.17 3.045l.733 1.086a.92.92 0 0 1-.276 1.298.98.98 0 0 1-1.336-.269l-.704-1.043c-.9-1.333-1.538-2.275-2.09-2.94-.55-.665-.923-.939-1.25-1.056M4.305 10.25a.75.75 0 0 1 .636.407c.36.698 1.19 1.664 2.314 2.746 1.104 1.064 2.429 2.18 3.706 3.173 2.121 1.651 4.75 2.907 7.782 2.98a.75.75 0 0 1 .382 1.383c-.71.448-1.604.632-2.71.722s-2.536.089-4.38.089h-.071c-1.844 0-3.275 0-4.38-.09-1.106-.089-2-.273-2.71-.72-1.707-1.077-2.705-3.482-2.623-5.54.004-.296.026-.713.098-1.207.143-.985.485-2.301 1.289-3.59a.75.75 0 0 1 .667-.352"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.5 11.5a1 1 0 0 1-1 1h-.01a1 1 0 0 1 0-2h.01a1 1 0 0 1 1 1M11.053 6.106a1 1 0 0 1 1.343.449c.013.018.086.12.251.225.173.11.447.22.853.22a1 1 0 1 1 0 2c-1.595 0-2.566-.896-2.894-1.553a1 1 0 0 1 .447-1.341M10.707 10.293a1 1 0 0 0-1.414 0l-.5.5a1 1 0 0 0 1.414 1.414l.5-.5a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.033 18.474c.443.316.664.474.803.434.14-.04.215-.221.367-.585.39-.937.585-1.967.546-2.923a9 9 0 0 0-.098-1.207c-.143-.985-.485-2.301-1.29-3.59a.75.75 0 0 0-1.256-.024c-.645.95-2.085 2.446-3.769 3.699-.836.622-1.71 1.17-2.555 1.556a.113.113 0 0 0-.017.196c1.754 1.173 3.777 1.972 6.015 2.025.463.012.896.163 1.254.419"
      />
    </svg>
  );
};
export default RiceBowl_02;
