import React, { Fragment } from 'react';
import styles from './reference.css';
import inspectCode from '../../lib/libraries/custom-decks/intro/figure-out-code-1.gif';
import createCustomBlock from '../../lib/libraries/custom-decks/reference/simple-custom-block.gif';
import introduceParam from '../../lib/libraries/custom-decks/reference/introduce-param.gif';
import cbNaming from '../../components/hint-overlay/cb-naming.png';
import renameCb from '../../components/hint-overlay/rename-custom-block.gif';
import customCardStyles from './custom-card.css';
import upIcon from './up-icon.png';

import { saveDataToMongo } from "../../lib/custom-analytics";

const Card = ({ id, title, image, content }) => (
    <div className={styles.card}>
        <h4 id={id}>{title}</h4>
        {image && <div className={styles.imageContainer}>
            <img className={styles.cardImage} src={image} />
        </div>}
        {
            content
        }
    </div>
);

const Link = ({ id, title }) => (
    <div className={styles.linkContainer}>
        <a href={"#" + id} className={styles.cardLink} onClick={ev => {
            document.getElementById(id).scrollIntoView();
            ev.preventDefault();
        }}>{title}</a>
    </div>
)

const cardContents = [

    // {
    //     id: "inspect",
    //     title: "Inspect code",
    //     image: inspectCode
    // },
    {
        id: "create-custom-block",
        title: "Create a custom block",
        image: createCustomBlock
    },
    {
        id: "introduce-parameter",
        title: "Introduce a custom block's parameter",
        image: introduceParam
    },
    {
        id: "renaming",
        title: "Rename a Custom Block",
        content: (
            <div className={styles.cardContent}>
                <p>
                    Right click on the <em>define</em> block and select "Edit".
                </p>
                <img src={renameCb} className={styles.mediumImg} />
            </div>
        )
    },
    {
        id: "good-naming",
        title: "Give a Descriptive Name for a Custom Block",
        content: (
            <div className={styles.cardContent}>
                <p>
                    A descriptive name that tells what your custom block does make code easier to understand. For example:
                </p>
                <img src={cbNaming} className={styles.mediumImg} />
            </div>
        )
    },
    {
        id: "undo",
        title: "Undo Your Last Action",
        content: (
            <div className={styles.cardContent}>
                <p>If you want to undo, right click on an empty space in the workspace and select "Undo" or alternatively, press ctrl+z</p>
            </div>
        )
    }

];

const Reference = ({ expanded, activeDeckId }) => {
    if (expanded) {
        // console.log('ref expanded');
        saveDataToMongo('interact', activeDeckId+'_view-reference', new Date().toLocaleString('en-US', { timeZone: "America/New_York" }));
    }
    return (
        <div className={expanded ? styles.container : customCardStyles.hidden}>
            <h3 id="top">Quick Reference</h3>
            {/* <a href="#inspect" onClick={ev=>{    
                document.getElementById("inspect").scrollIntoView();
                ev.preventDefault();
            }}>abc</a> */}
            <div className={styles.toc}>
                {cardContents.map(c => <Link key={c.id} id={c.id} title={c.title} image={c.image} />)}
            </div>
            {cardContents.map(c => <Card key={c.id} id={c.id} title={c.title} image={c.image} content={c.content} />)}

            <div className={styles.topButton} onClick={ev => {
                document.getElementById("top").scrollIntoView();
                ev.preventDefault();
            }}>
                <img className={styles.upIcon} src={upIcon} />
            </div>
        </div>
    );
}

export default Reference;