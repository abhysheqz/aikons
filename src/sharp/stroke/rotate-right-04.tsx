import React from "react";
const RotateRight_04: React.FC<
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
        d="M18.852 11.92a1.33 1.33 0 0 1 1.793.493c.367.627.16 1.422-.463 1.776l-1.504.855m.174-3.125 1.504-.854c.623-.354.83-1.15.463-1.776a1.33 1.33 0 0 0-1.793-.494l-1.128.641m.954 2.483-4.138 2.351m3.964.774a1.33 1.33 0 0 1 1.793.494c.367.626.16 1.421-.463 1.776l-4.639 2.635c-1.635.93-2.452 1.394-3.25 1.513-.463.07-2.118-.464-2.118-.464l-1.787 1m10.464-6.954-3.385 1.923m2.605-7.53c.622-.355.83-1.15.462-1.776a1.33 1.33 0 0 0-1.793-.494l-6.365 3.616.504-1.92c.22-.843-.347-1.701-1.218-1.84a1.45 1.45 0 0 0-1.573.862L5.5 13.998l-1.5.813m13.897-5.375-3.761 2.137M2.999 6.001c.903-1.777 2.24-2.944 4.072-3.63 1.276-.478 2.695-.463 3.99-.042.988.28 2.266 1.111 3.068 2.126m.374-2.453v3.003h-2.51"
      />
    </svg>
  );
};
export default RotateRight_04;
