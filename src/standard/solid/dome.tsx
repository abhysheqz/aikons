import React from "react";
const Dome: React.FC<
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
        d="M8.668 6.28C7.653 8.511 7 11.664 7 15.2c0 2.407.303 4.644.82 6.536a1 1 0 1 1-1.928.528C5.322 20.184 5 17.768 5 15.2c0-3.754.69-7.201 1.847-9.748C7.963 2.997 9.71 1 12 1s4.037 1.997 5.153 4.452C18.31 8 19 11.446 19 15.2c0 2.568-.323 4.984-.892 7.064a1 1 0 0 1-1.929-.528c.518-1.892.821-4.13.821-6.536 0-3.536-.654-6.689-1.668-8.92C14.277 3.958 13.024 3 12 3s-2.277.958-3.332 3.28"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M15.772 4.025a1 1 0 0 1 .755 1.195c-.607 2.686-2.744 3.515-4.53 4.106l-.463.152c-1.703.556-3.087 1.007-3.962 2.284a.405.405 0 0 0-.004.455c.476.666 1.16 1.129 2.037 1.502.771.329 1.62.56 2.548.814l.458.125c2.091.578 4.634 1.35 5.8 3.93a1 1 0 1 1-1.822.824c-.735-1.627-2.324-2.222-4.51-2.826q-.214-.059-.434-.118c-.918-.25-1.916-.522-2.824-.909-1.073-.457-2.115-1.11-2.88-2.179l.814-.582-.814.582a2.405 2.405 0 0 1-.019-2.75c1.283-1.87 3.34-2.528 4.947-3.041q.259-.082.5-.162c1.785-.59 2.864-1.127 3.207-2.647a1 1 0 0 1 1.196-.755"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.228 4.025a1 1 0 0 1 1.196.755c.343 1.52 1.422 2.057 3.207 2.648q.241.079.5.161c1.607.513 3.665 1.17 4.947 3.042.561.818.571 1.924-.02 2.75-.763 1.068-1.805 1.721-2.879 2.178-.908.387-1.905.659-2.824.909l-.433.118c-2.186.604-3.775 1.2-4.51 2.826a1 1 0 0 1-1.823-.823c1.166-2.581 3.709-3.353 5.8-3.93l.459-.126c.927-.253 1.776-.485 2.547-.813.877-.374 1.56-.837 2.037-1.503a.405.405 0 0 0-.003-.455c-.875-1.277-2.26-1.728-3.962-2.284l-.464-.152c-1.786-.59-3.923-1.42-4.53-4.105a1 1 0 0 1 .755-1.196"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dome;
