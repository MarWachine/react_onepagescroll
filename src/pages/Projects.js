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
                                    Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den s????en Fr??hlingsmorgen,
                                    die ich mit ganzem Herzen genie??e. Ich bin allein und freue mich meines Lebens in dieser Gegend,
                                    die f??r solche Seelen geschaffen ist wie die meine. Ich bin so gl??cklich, mein Bester, so ganz
                                    in dem Gef??hle von ruhigem Dasein versunken, da?? meine Kunst darunter leidet. Ich k??nnte jetzt
                                    nicht zeichnen, nicht einen Strich, und bin nie ein gr????erer Maler gewesen als in diesen
                                    Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfl??che der
                                    undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere
                                    Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und n??her an der Erde
                                    tausend mannigfaltige Gr??schen mir merkw??rdig werden; wenn ich das Wimmeln der kleinen Welt
                                    zwischen Halmen, die unz??hligen, unergr??ndlichen Gestalten der W??rmchen, der M??ckchen n??her an
                                    meinem Herzen f??hle, und f??hle die Gegenwart des Allm??chtigen, der uns nach seinem Bilde schuf,
                                    das Wehen des Alliebenden, der uns in ewiger Wonne schwebend tr??gt und erh??lt; mein Freund!
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
                                    Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas B??ses getan h??tte, wurde er
                                    eines Morgens verhaftet. ??Wie ein Hund!?? sagte er, es war, als sollte die Scham ihn ??berleben.
                                    Als Gregor Samsa eines Morgens aus unruhigen Tr??umen erwachte, fand er sich in seinem Bett zu
                                    einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Best??tigung ihrer neuen Tr??ume
                                    und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen
                                    K??rper dehnte. ??Es ist ein eigent??mlicher Apparat??, sagte der Offizier zu dem Forschungsreisenden
                                    und ??berblickte mit einem gewisserma??en bewundernden Blick den ihm doch wohlbekannten Apparat.
                                    Sie h??tten noch ins Boot springen k??nnen, aber der Reisende hob ein schweres, geknotetes Tau vom
                                    Boden, drohte ihnen damit und hielt sie dadurch von dem Sprunge ab. In den letzten Jahrzehnten ist
                                    das Interesse an Hungerk??nstlern sehr zur??ckgegangen. Aber sie ??berwanden sich, umdr??ngten den
                                    K??fig und wollten sich gar nicht fortr??hren.Jemand musste Josef K. verleumdet haben, denn ohne
                                    dass er etwas B??ses getan h??tte, wurde er eines Morgens verhaftet. ??Wie ein Hund!?? sagte er, es
                                    war, als sollte die Scham ihn ??berleben.
                                </p>
                            </div>}
                    </div> :
                    <></>
                }
                {!selected || (selected && detailView?.id === "pro3") ?
                    <div className={detailView?.id === "pro3" ? "projectL" : "projectG"} id="pro3" onClick={(evt) => showDetails(evt)}>
                        {detailView?.id === "pro3" ? <h4>Er h??rte leise</h4> : <h6>Er h??rte leise</h6>}
                        {detailView?.id === "pro3" &&
                            <div className="proContent">
                                <p className="pFull">
                                    Er h??rte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer w??rde ihm schon folgen, sp??t
                                    in der Nacht und dazu noch in dieser engen Gasse mitten im ??bel beleumundeten Hafenviertel? Gerade
                                    jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte! Hatte
                                    einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um
                                    die Fr??chte seiner Arbeit zu erleichtern? Oder geh??rten die Schritte hinter ihm zu einem der
                                    unz??hligen Gesetzesh??ter dieser Stadt, und die st??hlerne Acht um seine Handgelenke w??rde gleich
                                    zuschnappen? Er konnte die Aufforderung stehen zu bleiben schon h??ren. Gehetzt sah er sich um.
                                    Pl??tzlich erblickte er den schmalen Durchgang. Blitzartig drehte er sich nach rechts und verschwand
                                    zwischen den beiden Geb??uden. Beinahe w??re er dabei ??ber den umgest??rzten M??lleimer gefallen, der
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
                                    nicht sehr viele Zeitungen, aber ich habe geh??rt viele Situationen. Erstens: wir haben nicht offensiv
                                    gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern. Letzte
                                    Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir m??ssen nicht vergessen
                                    Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese W??rter, ist m??glich
                                    verstehen, was ich hab gesagt? Danke. Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich
                                    habe erkl??rt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch
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