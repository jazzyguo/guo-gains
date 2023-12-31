import { memo } from "react";
import { type Exercise } from "@prisma/client"
import Link from "next/link";
import YouTubeIcon from '@mui/icons-material/YouTube';

export const _ExerciseVideo = ({ exercise }: { exercise: Exercise }) => {
    const { gifUrl, poster, videoUrls, id } = exercise

    if (!gifUrl && !poster) {
        return null
    }

    return (
        <div>
            <video muted playsInline autoPlay loop poster={poster!} className="w-full h-full mx-auto">
                <source src={gifUrl!} />
            </video>
            {gifUrl && gifUrl.includes('musclewiki') &&
                <div>
                    <Link
                        href="https://musclewiki.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400"
                    >
                        Source
                    </Link>
                </div>
            }
            {videoUrls && !!videoUrls.length && (
                <div className="flex items-center text-sm gap-1">
                    <span>Video Tutorials:</span>
                    <div className="flex gap-2">
                        {videoUrls.map((url, index) => (
                            <Link
                                key={`video-${id}`}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "block" }}
                                className="hover:opacity-50"
                            >
                                <YouTubeIcon className="mr-1" sx={{
                                    fill: '#ef4444'
                                }} />
                                Video {videoUrls.length > 1 ? index + 1 : ''}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export const ExerciseVideo = memo(_ExerciseVideo)
