import React from 'react';

/*
 * props:
 * - onClick: showDetails-Funktion
 * 
 */

function ProjectNew(props) {
    return (
        <>
            {!props.selected || (props.selected && props.detailView?.id === "proNew") ?
                <div className={props.detailView?.id === "proNew" ? "projectL" : "project"} id="proNew" onClick={props.onClick}>
                    <h4>{props.detailView?.id === "proNew" ? "Nothing to see here..." : "Latest"}</h4>
                    {props.detailView?.id === "proNew" &&
                        <div className="proContent">
                            <p className="pCenter">
                                This is a placeholder page for my latest project. Stay tuned!
                            </p>
                        </div>}
                </div> :
                <></>
            }
        </>
    );
}

export default ProjectNew;