import React from "react";
import "../Main/index.css"

function Experience() {
    return (
        <div style={styles.experience} className='experience'>
            <div style={styles.center} className='center'>
                <div style={styles.title} className="title">
                    <div style={{ padding: 30 }} className="name-title">
                        <h1 style={styles.titleName}>Habilidades</h1>
                        <p style={styles.borderTitle}></p>
                    </div>
                </div>
                <div style={{padding: 30}} className="description">
                    <div className="skills">
                        <h3>- Desenvolvimento FullStack</h3>
                        <h3>- Desenvolvimento em React, React Native </h3>
                        <h3>- WordPress, Java Script, Html, CSS, Bootstrap 5
                        </h3>
                        <h3>- GIT, GitHub</h3>
                        <h3>- MongoDB</h3>
                        <h3>- Excel (avançado), Linguagem VBA, Macros </h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

const styles = ({
    experience: {
        padding: 30,
        width: '100%',
        minHeight: 768,
    },
    center: {
        display: 'flex',
        padding: '2%',
        flexWrap: 'wrap',
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    titleName: {
        color: 'darkslategrey',
        width: '100%',
        display: 'inline-block',
        fontSize: 40,
    },
    borderTitle: {
        backgroundColor: 'aqua',
        height: 6,
        marginBottom: 10,
        marginTop: 5,
        width: 70,
        marginRight: 150,
        display: 'inline-block',
    }

})


export default Experience;


