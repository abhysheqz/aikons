import React from "react";
const MessageMultiple_02: React.FC<
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
        d="M9.434 2.043c-6.729.381-9.746 8.76-5.892 14.153l-1.393 3.648a.1.1 0 0 0 .125.13l4.009-1.338c.416.19.873.505 1.705.674M9.434 2.043q.235-.014.475-.014m-.475.014 3.474-.012m0 0 .33-.002m-.33.002-.146-.002m.146.002c4.77.076 6.963 3.865 7.46 5.344.21.753.343 1.502.444 2.173M17.097 11.044c3.839.217 6.19 4.602 3.765 8.682l.81 2.106a.1.1 0 0 1-.124.13l-2.341-.772c-.994.837-5.313.908-6.478.156-1.532-.854-3.63-2.84-2.527-6.94.284-1.055 1.768-3.324 4.704-3.37m2.19.008a5 5 0 0 0-.299-.009m.3.009-2.19-.008m0 0h-.208m.207 0H15"
      />
    </svg>
  );
};
export default MessageMultiple_02;
