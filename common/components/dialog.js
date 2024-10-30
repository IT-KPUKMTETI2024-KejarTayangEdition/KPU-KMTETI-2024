"use client";

import {forwardRef} from "react";
import * as DialogPrimitive from "@radix-ui/react-alert-dialog"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={`fixed inset-0 z-50 bg-black/90  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
    {...props}
    ref={ref}
  />
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef(({ className, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      aria-describedby="alert-dialog-description"
      className={`border-2 border-text-light sm:rounded-lg fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ${className}`}
      {...props}
    />
  </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({className, ...props}) => (
  <div
    className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
    {...props}
  />
);

DialogHeader.displayName = "AlertDialogHeader";

const DialogFooter = ({className, ...props}) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
    {...props}
  />
);

DialogFooter.displayName = "AlertDialogFooter";

const DialogTitle = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`font-semibold ${className}`}
    {...props}
  />
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    id="alert-dialog-description"
    className={className}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogAction = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Action
    ref={ref}
    className={className}
    {...props}
  />
));

DialogAction.displayName = DialogPrimitive.Action.displayName;

const DialogCancel = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Cancel
    ref={ref}
    className={`mt-2 sm:mt-0 ${className}`}
    {...props}
  />
));

DialogCancel.displayName = DialogPrimitive.Cancel.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogAction,
  DialogCancel,
};