import React from "react";
const TextVerticalAlignment: React.FC<
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
        d="M12 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M12 7.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M2 11.5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M12 19.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M12 15.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M4.577 1.615A1 1 0 0 1 5.5 1h1a1 1 0 0 1 .923.615l2.5 6a1 1 0 1 1-1.846.77L7.292 6.5H4.709l-.786 1.885a1 1 0 0 1-1.846-.77zM5.542 4.5h.917L6 3.4zM4.577 14.615A1 1 0 0 1 5.5 14h1a1 1 0 0 1 .923.615l2.5 6a1 1 0 1 1-1.846.77L7.292 19.5H4.709l-.786 1.885a1 1 0 0 1-1.846-.77zm.965 2.885h.917L6 16.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextVerticalAlignment;
