import { Logo } from "@/components/ui/logo"

const AboutPage = () => (
    <div className="text-lg text-neutral-500 flex flex-col items-center max-w-screen-sm mx-auto">
        <div className="w-full bg-gradient-primary py-8 mb-8 flex">
            <div className="flex items-center mx-auto">
                <Logo className="w-[120px] h-[120px] md:w-[200px] md:h-[200px]" />
                <div className="text-3xl md:text-6xl text-white font-bangers">
                    <p>Guo</p>
                    <p className="ml-6 lg:ml-10">Gains</p>
                </div>
            </div>
        </div>
        <p>
            {`At Guo Gains, we're on a mission to redefine your fitness journey. We believe that every individual has the potential to achieve their health and wellness goals, and we're here to make that journey as exciting and empowering as possible. Our story began with a passion for fitness and a desire to create a platform that caters to everyone, whether you're a seasoned athlete or just taking your first step towards a healthier lifestyle.`}
        </p>
        <br />
        <p>
            {`Our cutting-edge fitness program generator is at the heart of what we do. It's the result of countless hours of dedication and expertise, designed to tailor fitness programs that suit your unique aspirations. We know that fitness is not one-size-fits-all, which is why our approach is both intuitive and adaptable. We've combined innovative technology with a deep understanding of fitness principles to offer you a personalized experience that will keep you motivated every step of the way.`}
        </p>
    </div>
)

export default AboutPage
