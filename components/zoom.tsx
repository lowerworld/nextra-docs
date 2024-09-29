import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ReactNode, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function Zoom({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="nx-mt-6 nx-leading-7 first:nx-mt-0 cursor-pointer overflow-auto"
        onClick={openDialog}
      >
        {children}
      </div>

      <Dialog onClose={closeDialog} open={open}>
        <DialogBackdrop
          className="fixed inset-0 z-30 bg-black/80 transition duration-200 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
          transition
        />

        <TransformWrapper
          doubleClick={{ step: 1 }}
          maxScale={2}
          wheel={{ step: 0.1 }}
        >
          {({
            instance: {
              transformState: { scale },
            },
            zoomIn,
            zoomOut,
          }) => (
            <DialogPanel className="fixed inset-0 z-40">
              <TransformComponent contentClass="flex !h-screen !w-screen place-content-center">
                <TransitionChild
                  as="div"
                  className="bg-white transition *:max-h-screen *:w-auto data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {children}
                </TransitionChild>
              </TransformComponent>

              <TransitionChild
                as="div"
                className="absolute right-0 top-0 z-50 grid auto-cols-fr grid-flow-col gap-x-1 rounded-bl bg-black/80 px-4 py-2 transition duration-200 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <button
                  className="inline-flex aspect-square size-full place-content-center rounded p-3 transition-colors hover:bg-white/20 focus-visible:ring-0"
                  onClick={() => {
                    if (scale === 1) {
                      zoomIn(1);
                    } else {
                      zoomOut(1);
                    }
                  }}
                >
                  {scale === 1 ? (
                    <MagnifyingGlassPlusIcon className="h-6 w-6 text-white" />
                  ) : (
                    <MagnifyingGlassMinusIcon className="h-6 w-6 text-white" />
                  )}
                </button>

                <button
                  className="inline-flex aspect-square size-full place-content-center rounded p-3 transition-colors hover:bg-red-700 focus-visible:ring-0"
                  onClick={closeDialog}
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </TransitionChild>
            </DialogPanel>
          )}
        </TransformWrapper>
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
