import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-panettone-300">
            <div className="py-8">
                <div className="flex max-w-screen-lg mx-auto min-h-screen p-8 bg-panettone-200 rounded-lg">
                    {/* Portrait */}
                    <div className="w-1/2 p-8">
                        <Image
                            className="rounded-full drop-shadow-xl"
                            src="/jose_square_portrait.jpg"
                            alt="My Portrait"
                            width={4130}
                            height={4130}
                        />
                    </div>
                    {/* Text */}
                    <div className="w-1/2 text-white text-md">
                        <p className="mb-4">
                            I'm a Seattle based artist excited to give you a
                            glimpse into my creative journey.
                        </p>
                        <p className="mb-4">
                            I first arrived here in the Northwest to pursue my career as a Software Engineer.
                            I graduated from Cornell University in 2014 with a degree in Computer Science, around
                            immediately began a rewarding career as an engineer at Microsoft from 2014 to 2019. The
                            technical and analyitcal skills I developed as an engineer continue to help motivate my
                            analyitcal process when developing my paintings and drawings.  I'm constantly thinking
                            in terms of building a hierarchy of value, color, and edges.  I'm also generally thinking
                            in terms of process and how to build a workflow that enables me to solve problems in
                            organized, nondestructive ways.  These are essential skills I brought out of my technical and
                            educational background.
                        </p>
                        <p className="mb-4">
                            In 2019, I decided to pursue my dream of studying fine arts with a focus in drawing and oil painting.
                            When the pandemic hit, I took online illustration classes at the Gage Academy here in Seattle with the
                            intention of exploring an atelier programs offerred inside the Gage system when in-person classes resumed.
                            My time studying during that lockdown in 2020, convinced me that the Georgetown Atelier, with its focus on
                            Imaginative Realism was the right pick for me.
                        </p>
                        <p className="mb-4">
                            As I complete my Atelier training in 2023 and begin building my portfolio pieces in color and charcoal, I'm beginning
                            to build my creative voice.  I'm interested in telling stories of inspirational figures through portraiture and
                            imaginative realist compositions.
                        </p>
                        <p className="mb-4">
                            I'm also building a body of outdoor plein air landscape artwork, partly to celebrate the beauty of the Northwest,
                            and partly because I just really enjoy being outdoors and creating artwork wherever I find myself.
                        </p>
                        <p className="mb-4">
                            Finally, I remain a passionate engineer, and I seek to build new software projects and grow my technical skills.
                            I'm currently building a portfolio of technical projects, starting with this very website which I built in NextJS.
                            I'm always looking for projects that give me an excuse to try out new technologies, as well as refine my understanding of
                            the patterns and practices I'm already familiar with.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}