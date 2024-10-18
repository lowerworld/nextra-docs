import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ReactNode, useState } from "react";

export default function Zoom({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mt-6 w-fit cursor-zoom-in overflow-auto leading-7 first:mt-0"
        onClick={openDialog}
      >
        {children}
      </div>

      <Dialog onClose={closeDialog} open={open}>
        <DialogBackdrop
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition duration-200 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
          transition
        />

        <DialogPanel
          className="fixed inset-0 z-40 flex cursor-zoom-out items-center justify-center transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
          onClick={closeDialog}
          transition
        >
          <div className="bg-white *:max-h-screen *:w-auto">{children}</div>
        </DialogPanel>
      </Dialog>
    </>
  );

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }
}
