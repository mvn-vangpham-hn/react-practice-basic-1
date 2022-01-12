import React from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfrim}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card cssClass={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfrim}>OK</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDom.createPortal(
                <Backdrop onConfrim={props.onConfrim} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDom.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfrim={props.onConfrim}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;
