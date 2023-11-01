import {
  CreateProgramSchema,
  type CreateProgramSchemaType,
} from "@/features/program/lib/schema";
import { createProgram } from "@/features/program/api/create-program";
import { ZodError } from "zod";
import { NextResponse } from "next/server";

export const POST = async (request: Request): Promise<any> => {
  try {
    const formData: CreateProgramSchemaType = await request.json();

    // form validation
    const parsed = CreateProgramSchema.parse(formData);

    const program = await createProgram(parsed);

    return NextResponse.json({
      program,
    });
  } catch (e: any) {
    if (e instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Bad request",
        },
        { status: 400 },
      );
    } else {
      return NextResponse.json(
        {
          message: e.message,
        },
        { status: 500 },
      );
    }
  }
};
