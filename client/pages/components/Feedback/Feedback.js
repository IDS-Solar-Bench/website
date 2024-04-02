import React from 'react';
import style from './Feedback.module.css';

const Feedback = () => {

    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [inputs, setInputs] = React.useState({
        name: 'noAnswer',
        email: 'noAnswer',
        message: 'noAnswer',
    });

    function handleChangeInput(e) {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
        console.log(inputs);
    };

    function onSubmit(e) {
        e.preventDefault();

    }

    return <div className={style.container}>
        <div className={"customHeadingTextMainContent"}>
            Feedback
        </div>

        <form onSubmit={onSubmit} className={style.form}>

            <div className={style.nameEmailContainer}>

                <div className={style.nameWrapper}>
                    <label htmlFor="name" className={style.label}> Name </label>
                    <input type="text" name="name" id="name" className={style.name} placeholder="John Doe" onChange={handleChangeInput}/>
                </div>

                <div className={style.emailWrapper}>
                    <label htmlFor="email" className={style.label}> Email </label>
                    <input type="email" name="email" id="email" className={style.email} placeholder='johnDoe@student.ubc.ca' onChange={handleChangeInput}/>
                </div>
            </div>

            <div className={style.messageWrapper}>
                <label htmlFor="message" className={style.label}> Message * </label>
                <textarea name="message" id="message" className={style.message} placeholder="One suggestion about the bench I had..." onChange={handleChangeInput}/>
            </div>

            <button type="submit" className={style.submitButton}> Submit </button>

        </form>

    </div>
}

export default Feedback;