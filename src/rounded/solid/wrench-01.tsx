import React from "react";
const Wrench_01: React.FC<
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
        d="M21.013 13.511c-1.288 1.289-3.713 1.239-7.43 1.239a4.335 4.335 0 0 1-4.333-4.334c0-3.715-.05-6.141 1.239-7.43 1.288-1.288 1.857-1.236 7.566-1.236a.618.618 0 0 1 .439 1.055l-2.94 2.94a1.91 1.91 0 1 0 2.7 2.701l2.94-2.939a.618.618 0 0 1 1.056.44c0 5.707.052 6.276-1.237 7.564"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.496 16.363c.037.162-.145.344-.508.708L7.858 21.2a3.579 3.579 0 0 1-5.06-5.061l4.13-4.13c.364-.364.545-.545.707-.508s.254.302.44.833a5.85 5.85 0 0 0 3.588 3.59c.53.185.796.278.833.44m-7.002.887c-.687 0-1.244.56-1.244 1.25s.557 1.25 1.244 1.25h.012c.687 0 1.244-.56 1.244-1.25s-.557-1.25-1.244-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wrench_01;
