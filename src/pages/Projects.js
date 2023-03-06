import { React, useState } from 'react';
import ProjectFeatured from './ProjectFeatured'
import ProjectNew from './ProjectNew'

function Projects(props) {

    const [selected, setSelected] = useState(false);
    const [detailView, setDetailView] = useState({});

    function showDetails(evt) {
        setDetailView(evt.target);
        toggleSelected();
    }

    function toggleSelected() {
        setSelected((currentState) => {
            return !currentState
        })
    }

    function clearView() {
        setSelected(false);
        setDetailView({});
    }

    return (
        <div className="section" id="projects">
            <h2 id="projectsH">Projects</h2>
            {
                selected &&
                <p className="pLeft pLink" onClick={clearView}>&lt;&lt; View all projects</p>
            }
            {
                !selected &&
                <p className="pCenter">Click on an image to learn more</p>
            }
            {
                !selected ||
                    (selected &&
                        (detailView?.id === "proFeat" || detailView?.id === "proNew")
                    ) ?
                    <div className="projectWrapper">
                        <ProjectFeatured selected={selected} detailView={detailView} onClick={(el) => showDetails(el)} />
                        <ProjectNew selected={selected} detailView={detailView} onClick={(el) => showDetails(el)} />
                    </div>
                    :
                    <></>
            }
            <div className="projectWrapper">
                {!selected || (selected && detailView?.id === "pro1") ?
                    <div className={detailView?.id === "pro1" ? "projectL" : "projectG"} id="pro1" onClick={(evt) => showDetails(evt)}>
                        {detailView?.id === "pro1" ? <h4>Werther</h4> : <h6>Werther</h6>}
                        {detailView?.id === "pro1" &&
                            <div className="proContent">
                                <p className="pFull">
                                    Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen,
                                    die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend,
                                    die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz
                                    in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt
                                    nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen
                                    Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der
                                    undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere
                                    Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde
                                    tausend mannigfaltige Gräschen mir merkwürdig werden; wenn ich das Wimmeln der kleinen Welt
                                    zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an
                                    meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf,
                                    das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund!
                                </p>
                            </div>}
                    </div> :
                    <></>
                }
                {!selected || (selected && detailView?.id === "pro2") ?
                    <div className={detailView?.id === "pro2" ? "projectL" : "projectG"} id="pro2" onClick={(evt) => showDetails(evt)}>
                        {detailView?.id === "pro2" ? <h4>Kafka</h4> : <h6>Kafka</h6>}
                        {detailView?.id === "pro2" &&
                            <div className="proContent">
                                <p className="pFull">
                                    Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er
                                    eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.
                                    Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu
                                    einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ihrer neuen Träume
                                    und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen
                                    Körper dehnte. »Es ist ein eigentümlicher Apparat«, sagte der Offizier zu dem Forschungsreisenden
                                    und überblickte mit einem gewissermaßen bewundernden Blick den ihm doch wohlbekannten Apparat.
                                    Sie hätten noch ins Boot springen können, aber der Reisende hob ein schweres, geknotetes Tau vom
                                    Boden, drohte ihnen damit und hielt sie dadurch von dem Sprunge ab. In den letzten Jahrzehnten ist
                                    das Interesse an Hungerkünstlern sehr zurückgegangen. Aber sie überwanden sich, umdrängten den
                                    Käfig und wollten sich gar nicht fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne
                                    dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es
                                    war, als sollte die Scham ihn überleben.
                                </p>
                            </div>}
                    </div> :
                    <></>
                }
                {!selected || (selected && detailView?.id === "pro3") ?
                    <div className={detailView?.id === "pro3" ? "projectL" : "projectG"} id="pro3" onClick={(evt) => showDetails(evt)}>
                        {detailView?.id === "pro3" ? <h4>Er hörte leise</h4> : <h6>Er hörte leise</h6>}
                        {detailView?.id === "pro3" &&
                            <div className="proContent">
                                <p className="pFull">
                                    Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer würde ihm schon folgen, spät
                                    in der Nacht und dazu noch in dieser engen Gasse mitten im übel beleumundeten Hafenviertel? Gerade
                                    jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte! Hatte
                                    einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um
                                    die Früchte seiner Arbeit zu erleichtern? Oder gehörten die Schritte hinter ihm zu einem der
                                    unzähligen Gesetzeshüter dieser Stadt, und die stählerne Acht um seine Handgelenke würde gleich
                                    zuschnappen? Er konnte die Aufforderung stehen zu bleiben schon hören. Gehetzt sah er sich um.
                                    Plötzlich erblickte er den schmalen Durchgang. Blitzartig drehte er sich nach rechts und verschwand
                                    zwischen den beiden Gebäuden. Beinahe wäre er dabei über den umgestürzten Mülleimer gefallen, der
                                    mitten im Weg lag. Er versuchte, sich in der Dunkelheit seinen Weg zu ertasten und erstarrte:
                                    Anscheinend gab es keinen anderen Ausweg aus diesem kleinen Hof als den Durchgang, durch den er
                                    gekommen war. Die Schritte wurden lauter und lauter, er sah eine dunkle Gestalt um die Ecke biegen.
                                </p>
                            </div>}
                    </div> :
                    <></>
                }
                {!selected || (selected && detailView?.id === "pro4") ?
                    <div className={detailView?.id === "pro4" ? "projectL" : "projectG"} id="pro4" onClick={(evt) => showDetails(evt)}>
                        {detailView?.id === "pro4" ? <h4>Trappatoni</h4> : <h6>Trappatoni</h6>}
                        {detailView?.id === "pro4" &&
                            <div className="proContent">
                                <p className="pFull">
                                    Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese
                                    nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv
                                    gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern. Letzte
                                    Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen
                                    Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich
                                    verstehen, was ich hab gesagt? Danke. Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich
                                    habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch
                                    andere Mannschaften gesehen in Europa nach diese Mittwoch. Ich habe gesehen auch zwei Tage die
                                    Training. Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz.
                                </p>
                            </div>}
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
}

export default Projects;