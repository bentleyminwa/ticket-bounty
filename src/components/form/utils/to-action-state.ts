import { ZodError } from "zod";

export interface ActionState {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
}

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  // validation error from zod
  if (error instanceof ZodError) {
    return {
      message: "",
      payload: formData,
      fieldErrors: error.flatten().fieldErrors,
    };
  }
  // any other error. eg Database error
  else if (error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
      fieldErrors: {},
    };
  }
  // unknown error
  else {
    return {
      message: "An unknown error occured!",
      payload: formData,
      fieldErrors: {},
    };
  }
};
