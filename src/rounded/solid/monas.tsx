import React from "react";
const Monas: React.FC<
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
        d="M13 20a1 1 0 1 0-2 0v2.35c0 .189 0 .283-.059.341s-.153.059-.341.059h-.63c-.41 0-.76 0-1.037-.021-.271-.02-.595-.067-.877-.243a1.5 1.5 0 0 1-.39-.369 4 4 0 0 1-.276-.43 27 27 0 0 1-.63-1.231l-.011-.023c-.311-.63-.724-1.28-1.134-1.807-.435-.558-.785-.872-.95-.955A.75.75 0 0 1 5 16.25h14a.75.75 0 0 1 .335 1.42c-.166.084-.516.398-.95.956-.41.526-.823 1.176-1.134 1.807l-.011.023a27 27 0 0 1-.63 1.232c-.089.155-.18.303-.276.43a1.5 1.5 0 0 1-.39.368c-.283.176-.606.222-.878.243-.276.021-.627.021-1.037.021h-.63c-.188 0-.282 0-.34-.059-.06-.058-.06-.152-.06-.341zM15.293 14.641A.3.3 0 0 1 15 15H9.001a.3.3 0 0 1-.294-.359l1.354-6.771a.1.1 0 0 0-.098-.12H9.5a.75.75 0 0 1 0-1.5.05.05 0 0 0 .045-.07C9.38 5.817 9.25 5.402 9.25 5c0-.518.185-1.005.404-1.409.222-.41.508-.787.78-1.1a10 10 0 0 1 1.064-1.049l.02-.017.007-.005.002-.002h.002a.75.75 0 0 1 .943 0h.002l.002.002.006.005.02.017a7 7 0 0 1 .32.282c.202.186.473.452.746.767.27.313.557.69.78 1.1.218.404.402.89.402 1.409 0 .402-.129.817-.294 1.18a.05.05 0 0 0 .045.07.75.75 0 0 1 0 1.5h-.464a.1.1 0 0 0-.098.12z"
      />
    </svg>
  );
};
export default Monas;
