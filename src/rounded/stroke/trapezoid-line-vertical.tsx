import React from "react";
const TrapezoidLineVertical: React.FC<
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
        d="M12 5c2.665 0 3.998 0 4.945.627q.155.103.296.22c.86.714 1.048 1.844 1.425 4.103l.367 2.202c.531 3.186.797 4.78-.25 5.814S15.854 19 12.095 19h-.192c-3.76 0-5.639 0-6.687-1.034-1.047-1.035-.781-2.628-.25-5.815l.368-2.201C5.71 7.69 5.9 6.56 6.759 5.847q.141-.117.296-.22C8.002 5 9.335 5 12 5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 22V2"
      />
    </svg>
  );
};
export default TrapezoidLineVertical;
