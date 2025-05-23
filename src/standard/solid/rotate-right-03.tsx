import React from "react";
const RotateRight_03: React.FC<
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
        d="M15.345 1.06a1 1 0 0 1 .659.94v3.003a1 1 0 0 1-1 1h-2.51a1 1 0 0 1-.767-1.641l.533-.638a4.3 4.3 0 0 0-1.007-.446c-1.103-.359-2.289-.363-3.33.027-1.603.6-2.744 1.598-3.532 3.147a1 1 0 1 1-1.782-.906C3.628 3.541 5.16 2.204 7.222 1.432c1.503-.563 3.15-.54 4.632-.061.541.156 1.132.436 1.702.803l.68-.815a1 1 0 0 1 1.11-.299"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.486 11.527a.45.45 0 0 1 .167-.614l6.036-3.45a1.153 1.153 0 0 0-1.145-2.003l-8.768 5.01a.45.45 0 0 1-.656-.515l.85-2.969a1.362 1.362 0 0 0-2.56-.913L5.4 13.058l-.935.545a.75.75 0 0 0-.274 1.02l4.378 7.651a.75.75 0 0 0 1.029.276l.908-.53 1.295.2a4.23 4.23 0 0 0 2.77-.527l3.106-1.81a2.525 2.525 0 0 0 1.064-3.128l-2.269 1.272a.45.45 0 0 1-.44-.785l2.105-1.18.09-.251c.236-.67.19-1.436-.19-2.098l-.063-.112-2.322 1.301a.45.45 0 0 1-.44-.785l2.564-1.437a2.52 2.52 0 0 0-.294-1.704l-.068-.12c-.057-.076-.196-.247-.302-.315L15.1 11.694a.45.45 0 0 1-.614-.167"
      />
    </svg>
  );
};
export default RotateRight_03;
