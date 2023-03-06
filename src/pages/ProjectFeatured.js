import React from 'react';

/*
 * props:
 * - onClick: Funktion
 * - detailView: Objekt
 * - selected: boolean
 */

function ProjectFeatured(props) {
    return (
        <>
            {!props.selected || (props.selected && props.detailView?.id === "proFeat") ?
                <div className={props.detailView?.id === "proFeat" ? "projectL" : "project"} id="proFeat" onClick={props.onClick}>
                    <h4>Featured{props.detailView?.id === "proFeat" && <>:<br />Li Europan lingues</>}</h4>
                    {props.detailView?.id === "proFeat" &&
                        <div className="proContent">
                            <p className="pFull">
                            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc,
                            litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
                            Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser
                            necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant
                            lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam
                            li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va
                            semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del
                            sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
                            </p>
                        </div>}
                </div> :
                <></>
            }
        </>
    );
}
export default ProjectFeatured;