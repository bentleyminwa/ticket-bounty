import { ZodError } from "zod";

export interface ActionState {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timeStamp: number;
}

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timeStamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  // validation error from zod
  if (error instanceof ZodError) {
    return {
      status: "ERROR",
      message: "",
      payload: formData,
      fieldErrors: error.flatten().fieldErrors,
      timeStamp: Date.now(),
    };
  }
  // any other error. eg Database error
  else if (error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
      fieldErrors: {},
      timeStamp: Date.now(),
    };
  }
  // unknown error
  else {
    return {
      message: "An unknown error occured!",
      payload: formData,
      fieldErrors: {},
      timeStamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    timeStamp: Date.now(),
  };
};
