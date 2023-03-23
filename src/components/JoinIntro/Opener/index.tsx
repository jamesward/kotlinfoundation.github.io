import cn from "classnames";
import {useTextStyles} from "@rescui/typography";

import {IntroSection} from "../section";

import * as styles from "./opener.module.css";
import imgSection from './images/section.png';

export function OpenerSection() {
    const textCn = useTextStyles();
    const contactLink = <a className={textCn('rs-link')}
                           href="mailto:hello@kotlinfoundation.org">hello@kotlinfoundation.org</a>;

    return (
        <IntroSection className={styles.section} imageClassName={styles.image} image={imgSection} showImage={true}>
            <h1 className="ktf-h2">Join the Kotlin Foundation</h1>
            <p className={cn("ktl-text-2 ktf-para", styles.description)}>Shape the future of the language ecosystem and
                create a brand connection between Kotlin and your company.</p>
            <p className={styles.contact}>
                <span className={styles.mobile}>Want to apply? Contact <br/>{contactLink}</span>
                <span className={styles.desktop}>Contact {contactLink} to apply.</span>
            </p>
        </IntroSection>
    );
}
