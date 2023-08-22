import Image from "next/image";
import profilePicture from "./static/jose_square_portrait.jpg"
import castProj from "./static/cast_project.jpg"
import pleinAir from "./static/pa_magnuson_8-06-23.jpg"

export default async function AboutPage() {
    const blockClass =
        "flex flex-col sm:flex-row max-w-screen-lg mx-auto p-4 bg-panettone-200 rounded-lg mb-4 h-fit";
    const textDivClass =
        "p-4 flex-1 text-white text-md flex flex-col justify-center";
    const imageDivClass = "m-4 flex-1 sm:w-1/2 flex flex-col justify-center";
    const firstLetterClass =
        "first-letter:text-7xl first-letter:font-bold first-letter:mr-3  first-letter:float-left";

    return (
        <main className="bg-panettone-300">
            <div className="py-4 min-h-screen">
                <div className={blockClass}>
                    {/* Portrait */}
                    <div className={imageDivClass}>
                        <Image
                            className="rounded-full drop-shadow-xl"
                            src={profilePicture}
                            alt="My Portrait"
                            width={4103}
                            height={4103}
                            placeholder="blur"
                            priority
                        />
                    </div>
                    <div className={textDivClass}>
                        <p className={`mb-4 leading-8 ${firstLetterClass}`}>
                            I first arrived here in the Northwest to pursue my career as a
                            Software Engineer. I graduated from Cornell University in 2014
                            with a degree in Computer Science. On graduating I immediately
                            began my career as an engineer at Microsoft where I stayed from
                            2014 to 2019. The technical and analyitcal skills I developed as
                            an engineer continue to help motivate my analyitcal process when
                            developing my paintings and drawings. I&apos;m constantly thinking
                            in terms of building a hierarchy of value, color, and edges.
                            I&apos;m also generally thinking in terms of process and how to
                            build a workflow that enables me to solve problems in organized,
                            nondestructive ways. These are essential skills I brought out of
                            my technical and educational background.
                        </p>
                    </div>
                </div>
                <div className={blockClass}>
                    <div className={textDivClass}>
                        <p className={`mb-4 leading-8 ${firstLetterClass}`}>
                            My decision to pursue my dream of studying fine arts with a focus
                            in drawing and oil painting brought me to the Gage Academy in
                            2019. When the pandemic hit, I took online illustration classes
                            with the intention of exploring an atelier programs offerred
                            inside the Gage system when in-person classes resumed. My time
                            studying during that lockdown in 2020, convinced me that the
                            Georgetown Atelier, with its focus on Imaginative Realism was the
                            right pick for me.
                        </p>
                        <p className="mb-4 leading-8">
                            As I complete my Atelier training in 2023 and begin building my
                            portfolio pieces in color and charcoal, I&apos;m beginning to
                            build my creative voice. I&apos;m interested in telling stories of
                            inspirational figures through portraiture and imaginative realist
                            compositions.
                        </p>
                    </div>
                    {/* Cast Drawing */}
                    <div className={imageDivClass}>
                        <Image
                            className="drop-shadow-xl border-8 border-slate-800"
                            src={castProj}
                            alt="Cast Drawing Final"
                            width={2229}
                            height={3117}
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className={blockClass}>
                    {/* Plein Air */}
                    <div className={imageDivClass}>
                        <Image
                            className="drop-shadow-xl border-8 border-slate-800"
                            src={pleinAir}
                            alt="Plein Air at Magnuson"
                            width={3619}
                            height={2612}
                            placeholder="blur"
                        />
                    </div>
                    <div className={textDivClass}>
                        <p className={`mb-4 leading-8 ${firstLetterClass}`}>
                            Landscape artwork is another major area I&apos;ll be investing my
                            time into, partly to celebrate the beauty of the Northwest, and
                            partly because I just really enjoy being outdoors and creating
                            artwork wherever I find myself.
                        </p>
                        <p className="mb-4 leading-8">
                            Finally, I remain a passionate engineer, and I seek to build new
                            software projects and grow my technical skills. I&apos;m currently
                            building a portfolio of technical projects, starting with this
                            very website which I built in NextJS. I&apos;m always looking for
                            projects that give me an excuse to try out new technologies, as
                            well as refine my understanding of the patterns and practices
                            I&apos;m already familiar with.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
