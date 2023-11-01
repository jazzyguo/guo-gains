import {
  CreateProgramSchema,
  type CreateProgramSchemaType,
} from "@/features/program/lib/schema";
import { createProgram } from "@/features/program/api/create-program";
import { ZodError } from "zod";
import { NextResponse } from "next/server";

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const formData = (await request.json()) as CreateProgramSchemaType;

    // form validation
    const parsed = CreateProgramSchema.parse(formData);

    const program = await createProgram(parsed);

    return NextResponse.json({
      program,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
          message: e?.message || "Internal Server Error",
        },
        { status: 500 },
      );
    }
  }
};
