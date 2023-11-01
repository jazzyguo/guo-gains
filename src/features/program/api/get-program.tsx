import { prisma } from "@/lib/prisma";
import { type GeneratedProgram } from "../types";

export const getProgram = async (programId: string): Promise<GeneratedProgram | null> => {
    const program = await prisma.program.findUnique({
        where: {
            id: programId,
        },
        include: {
            user: {
                include: {
                    info: true,
                }
            },
            days: {
                include: {
                    workouts: {
                        include: {
                            exercise: {
                                include: {
                                    alternatives: true
                                }
                            },
                        },
                        orderBy: {
                            order: 'asc'
                        }
                    },
                },
            },
        },
    });

    if (!program) {
        return null
    }

    return program as GeneratedProgram
}